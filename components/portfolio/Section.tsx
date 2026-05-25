"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-14"
        >
          {eyebrow && (
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-gradient">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
