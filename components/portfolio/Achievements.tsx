"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Database, Layers, Lightbulb, Briefcase } from "lucide-react";
import { Section } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString() + suffix);
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const items = [
  { icon: Layers, title: "Full Stack Development", value: 4, suffix: "+", note: "End-to-end systems shipped" },
  { icon: Database, title: "Backend Engineering", value: 25, suffix: "+", note: "REST APIs designed" },
  { icon: Lightbulb, title: "Problem Solving", value: 125, suffix: "+", note: "DSA problems solved" },
  { icon: Briefcase, title: "Internship Experience", value: 3, suffix: " mo", note: "Real product team" },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Milestones that mean something."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:border-white/20 transition"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.06), transparent 40%)" }}
              />
              <div className="flex items-center justify-between">
                <div className="size-11 rounded-xl glass-strong flex items-center justify-center">
                  <Icon size={20} className="text-foreground" />
                </div>
                <div className="text-3xl font-semibold text-gradient">
                  <Counter to={it.value} suffix={it.suffix} />
                </div>
              </div>
              <h3 className="mt-5 text-lg font-medium">{it.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{it.note}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
