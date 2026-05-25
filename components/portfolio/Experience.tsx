"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#FFFFFF" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  AWS: { icon: FaAws, color: "#FF9900" },
};

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Vahan Assist Pvt. Ltd.",
    duration: "Mar 2026 – Present",
    bullets: [
      "Delivered production-grade MERN stack features across scalable full stack applications.",
      "Built secure REST APIs, JWT authentication, and protected route workflows.",
      "Developed responsive dashboards and optimized end-to-end user workflows.",
      "Collaborated on backend architecture, database operations, and feature integrations.",
      "Improved application scalability, maintainability, and overall user experience.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    role: "MERN Stack Developer",
    company: "Personal & Academic Projects",
    duration: "2024 – Feb 2026",
    bullets: [
      "Built scalable full stack MERN applications with secure authentication and responsive dashboards.",
      "Designed REST APIs and backend workflows for appointment booking and hospital management systems.",
      "Implemented JWT-based access control, database integrations, and production-ready backend architecture.",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've built things."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-px" />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
            >
              <div className="absolute left-4 md:left-1/2 top-2 size-3 rounded-full bg-foreground -translate-x-1/2 ring-4 ring-background shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {exp.duration}
                </div>
                <h3 className="mt-1 text-2xl font-semibold">{exp.role}</h3>
                <div className="text-muted-foreground inline-flex items-center gap-1.5 mt-1">
                  <Briefcase size={14} /> {exp.company}
                </div>
              </div>
              <div className={`pl-12 md:pl-0 mt-4 md:mt-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <ul className="space-y-2 text-muted-foreground">
                  {exp.bullets.map((b) => (
                    <li key={b} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
                <div className={`mt-4 flex flex-wrap gap-2 ${i % 2 === 0 ? "" : "md:justify-end"}`}>
                  {exp.tech.map((t) => {
                    const techInfo = techIcons[t];
                    const IconComponent = techInfo?.icon;
                    return (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md glass"
                      >
                        {IconComponent && (
                          <IconComponent
                            size={14}
                            style={{ color: techInfo.color }}
                          />
                        )}
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
