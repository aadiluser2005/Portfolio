"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Github, Linkedin, Twitter, Instagram, Check } from "lucide-react";
import { Section } from "./Section";

const socials = [
  { icon: Github, href: "https://github.com/aadiluser2005", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aadil-khan-494375380/", label: "LinkedIn" },
 
];

function Field({
  label, type = "text", textarea, value, onChange, error,
}: {
  label: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  const common =
    "peer w-full bg-transparent text-foreground outline-none px-4 pt-6 pb-2 rounded-xl border transition-colors";
  const borderClass = error
    ? "border-destructive/60"
    : active
    ? "border-white/40"
    : "border-white/10 hover:border-white/20";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${common} ${borderClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${common} ${borderClass}`}
        />
      )}
      <label
        className={`pointer-events-none absolute left-4 transition-all ${
          active ? "top-1.5 text-[11px] uppercase tracking-wider text-muted-foreground" : "top-4 text-base text-muted-foreground"
        }`}
      >
        {label}
      </label>
      {error && <p className="text-xs text-destructive mt-1.5 ml-1">{error}</p>}
    </div>
  );
}

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [sent, setSent] = useState(false);

 const submit = async (e: React.FormEvent) => {
  e.preventDefault();

  const errs: typeof errors = {};

  if (!name.trim()) {
    errs.name = "Please enter your name";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errs.email = "Enter a valid email";
  }

  if (message.trim().length < 10) {
    errs.message = "Message must be at least 10 characters";
  }

  setErrors(errs);

  if (Object.keys(errs).length > 0) return;

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await response.json();

    if (data.success) {
      setSent(true);

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSent(false);
      }, 2500);
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      description="Open to full-time roles, internships, and meaningful collaborations."
    >
      <div className="grid lg:grid-cols-5 gap-10">
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 glass rounded-2xl p-7 md:p-9 space-y-5"
        >
          <Field label="Your name" value={name} onChange={setName} error={errors.name} />
          <Field label="Email address" type="email" value={email} onChange={setEmail} error={errors.email} />
          <Field label="Tell me about your project" textarea value={message} onChange={setMessage} error={errors.message} />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={sent}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium w-full hover:opacity-90 transition disabled:opacity-60"
          >
            {sent ? (
              <>
                <Check size={16} /> Message Sent
              </>
            ) : (
              <>
                <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-2 glass rounded-2xl p-7 md:p-9 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold">Get in touch</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              I&apos;d love to hear from you. Whether it&apos;s a project, job opportunity, or just want to say hello — reach out anytime.
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div>
                <span className="text-foreground">Email</span>
                <p className="mt-0.5">aadilkhan00723@gmail.com</p>
              </div>
              <div>
                <span className="text-foreground">Location</span>
                <p className="mt-0.5">Jhansi, India</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="size-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-white/20 transition"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </Section>
  );
}
