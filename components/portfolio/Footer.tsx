"use client";

import { ArrowUp, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/aadiluser2005", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aadil-khan-494375380/", label: "LinkedIn" },

];

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aadil Khan. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="size-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition"
              >
                <Icon size={15} />
              </a>
            );
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="size-9 ml-2 rounded-lg bg-foreground text-background flex items-center justify-center hover:opacity-90 transition"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
