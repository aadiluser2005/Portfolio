"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Fewer particles on mobile for performance
const desktopParticles = Array.from({ length: 18 });
const mobileParticles = Array.from({ length: 6 });

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const particles = isMobile ? mobileParticles : desktopParticles;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-zinc-900/20 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative">
        {/* LEFT - Slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-7"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground glass px-3 py-1.5 rounded-full"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            <span className="text-gradient">Aadil Khan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-2xl md:text-3xl text-muted-foreground font-light"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Engineering intelligent web applications with AI integration,
            scalable APIs, microservices, and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)]"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition"
            >
              <Mail size={16} /> Contact Me
            </a>
            {/* FIX 3: Use direct download link instead of viewer link */}
            <a
              href="https://drive.google.com/uc?export=download&id=18bHq2Qk8puMjYxQxbxlV_hhHEXaV_31m"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT - Slides in from right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* FIX 1: Only render particles after mount to prevent hydration mismatch.
              isMobile is also correctly resolved by this point. */}
          {mounted && particles.map((_, i) => (
            <motion.span
              key={i}
              className="absolute size-1 rounded-full bg-white/40 will-change-transform"
              style={{ transform: "translateZ(0)" }}
              initial={{
                x: Math.cos((i / particles.length) * Math.PI * 2) * 180,
                y: Math.sin((i / particles.length) * Math.PI * 2) * 180,
                opacity: 0,
              }}
              animate={{
                x: Math.cos((i / particles.length) * Math.PI * 2) * (180 + (i % 3) * 30),
                y: Math.sin((i / particles.length) * Math.PI * 2) * (180 + (i % 3) * 30),
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: isMobile ? 6 + (i % 3) : 4 + (i % 5),
                repeat: Infinity,
                delay: i * (isMobile ? 0.4 : 0.2),
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative will-change-transform"
            style={{ transform: "translateZ(0)" }}
          >
            {/* Hide rotating circles on mobile for performance */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/10 hidden md:block"
              style={{ width: "120%", height: "120%", left: "-10%", top: "-10%" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/5 hidden md:block"
              style={{ width: "140%", height: "140%", left: "-20%", top: "-20%" }}
            />

            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10" />
              {/* FIX 2: Corrected alt text from "Aditya Sharma" to "Aadil Khan" */}
              <Image
                src="/profile.jpg"
                alt="Aadil Khan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}