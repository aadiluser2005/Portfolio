"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiMysql, SiGit, SiGithub, SiPostman,SiRabbitmq,SiRedis,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      // { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      // { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "REST APIs", icon: SiNodedotjs, color: "#68A063" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#d63aff" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
   
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
         { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Programming",
    items: [
      { name: "Java", icon: FaJava, color: "#f8981d" },
      { name: "DSA", icon: FaJava, color: "#f8981d" },
      { name: "OOP", icon: FaJava, color: "#f8981d" },
    ],
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineer at heart, builder by craft."
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
    <p className="text-lg text-muted-foreground leading-relaxed">
  I&apos;m a{" "}
  <span className="text-foreground font-medium">
    Full Stack Developer
  </span>{" "}
  passionate about building scalable and production-grade web applications
  using the MERN stack, microservices architecture, and cloud-native tools.
  My experience includes designing secure authentication systems, developing
  resilient REST APIs, and creating responsive frontend experiences with a
  strong focus on performance and maintainability.
</p>

<p className="text-lg text-muted-foreground leading-relaxed">
  Alongside full stack development, I actively explore AI integration,
  scalable backend architectures, and intelligent application workflows
  with a strong focus on clean engineering practices, problem solving,
  and computer science fundamentals including DSA, OOP, and core
  computer fundamentals.
</p>
        </motion.div>

        {/* RIGHT - Skills with slide-in from right animation and colorful icons */}
        <div className="space-y-6">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: "easeOut" }}
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, ii) => {
                  const Icon = item.icon;
                  return (
                    <motion.span
                      key={item.name}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: gi * 0.1 + ii * 0.05, ease: "easeOut" }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg glass hover:border-white/20 transition-all cursor-default"
                    >
                      <Icon size={16} style={{ color: item.color }} />
                      <span className="text-foreground/90">{item.name}</span>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
