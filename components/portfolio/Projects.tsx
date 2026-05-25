"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Rabbit,
} from "lucide-react";
import { Section } from "./Section";
import { useState } from "react";
import Image from "next/image";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiTailwindcss,
  SiJavascript,
  SiRedis,
  SiRabbitmq,
  SiBootstrap,
  SiMapbox,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

const ZustandIcon = ({ size = 16 }: { size?: number }) => (
  <span style={{ fontSize: size, lineHeight: 1 }}>🐻</span>
);

const techIcons: Record<
  string,
  { icon: React.ElementType; color: string }
> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  Express: { icon: SiExpress, color: "#FFFFFF" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  JWT: { icon: SiJsonwebtokens, color: "#FB015B" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  CSS: { icon: FaCss3Alt, color: "#1572B6" },
  EJS: { icon: SiJavascript, color: "#A91E50" },
  Zustand: { icon: ZustandIcon, color: "#FF6B35" },
Redis: { icon: SiRedis, color: "#DC382D" },
RabbitMQ: { icon: SiRabbitmq, color: "#FF6600" },
Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
MapBox: { icon: SiMapbox, color: "#4264FB" },
}

interface Screenshot {
  src: string;
  alt: string;
  label: string;
}

interface ProjectType {
  name: string;
  description: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string;
  screenshots: Screenshot[];
  accent: "cyan" | "emerald" | "rose";
}

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const appointmentProject: ProjectType = {
  name: "Appointment Booking System",
  description:
    "A scalable appointment booking platform built with microservices architecture, secure JWT authentication, role-based access control, and efficient backend communication using Redis and RabbitMQ for seamless appointment management.",
  features: [
    "JWT Authentication & Authorization",
    "Concurrent Booking Management",
    "Real-time Appointment Scheduling",
    "RESTful API Architecture",
    "Interactive Admin Dashboard",
    "Secure Backend Infrastructure",
  ],
  tech: ["React", "Node.js", "Express", "MongoDB","Redis","RabbitMQ", "JWT","Tailwind"],
  github: "https://github.com/aadiluser2005/AppointmentBookingApp",
  demo: "#",
  accent: "cyan",
  screenshots: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20191132-W3Gzn7YfjzMF3eu8rttOKKnRo9oQob.png",
      alt: "Admin Dashboard",
      label: "Admin Dashboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20191151-bUqmCWsiRG1PLiWvzpsQs8s5m16xzZ.png",
      alt: "Appointments",
      label: "Appointments",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20191208-9wAsmxzzQ4Au71hblZGWk6lSCS5qX8.png",
      alt: "Users",
      label: "Users",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20191426-TPMwUaPmTDuWdqug5T2UsxEyE3oQL8.png",
      alt: "Authentication",
      label: "Authentication",
    },
  ],
};

const ipdProject: ProjectType = {
  name: "Hospital IPD Management System",
  description:
    "A desktop-focused hospital management system designed to streamline inpatient workflows with patient admissions, ward management, live case sheet previews, advance receipt generation, and centralized patient record handling.",
  features: [
    "Patient Admission with Live Preview",
    "Case Sheet Generation",
    "Advance Receipt Management",
    "Ward & Bed Management",
    "Patient Record Search",
    "Print-Ready Documents",
  ],
  tech: ["React", "Node.js", "Express", "MongoDB","Zustand", "Tailwind","JavaScript"],
  github: "https://github.com/aadiluser2005/IPD-management",
  demo: "https://ipd-management.vercel.app",
  accent: "emerald",
  screenshots: [
    {
      src: "/ipd-patient-details.png",
      alt: "Patient Details",
      label: "Patient Admission",
    },
    {
      src: "/ipd-manage-patients.png",
      alt: "Manage Patients",
      label: "Manage Patients",
    },
    {
      src: "/ipd-advance-receipt.png",
      alt: "Advance Receipt",
      label: "Advance Receipt",
    },
    {
      src: "/ipd-view-records.png",
      alt: "View Records",
      label: "View Records",
    },
  ],
};

const wanderlustProject: ProjectType = {
  name: "WanderLust - Travel Listing Platform",
  description:
    "A full-stack travel listing platform with dynamic property management, RESTful routing, Mapbox integration, server-side rendering, and an Airbnb-inspired UI for smooth property discovery.",
  features: [
    "RESTful API Architecture",
    "CRUD Operations",
    "Server-side Rendering",
    "Dynamic Listing Management",
    "Mapbox Integration",
    "Category Filtering",
  ],
  tech: ["Node.js", "MongoDB", "EJS", "MapBox","CSS","Bootstrap", "JavaScript"],
  github: "https://github.com/aadiluser2005/WanderLust",
  demo: "https://wanderlust-p4il.onrender.com/listings",
  accent: "rose",
  screenshots: [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20195626-5DXexwdFZWOjifRp0jrzdeZeQCUsFe.png",
      alt: "Home",
      label: "Explore Listings",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20195647-UUuhmCMWraAIkoSxQiiMkRCRu2Kxh8.png",
      alt: "Listing Details",
      label: "Listing Details",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20195808-GOnUmN8gwnUDygafU7jgBj16U1HwoV.png",
      alt: "Create Listing",
      label: "Create Listing",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20195752-0go6ZJgYPaLiZtHfi35hFAhNeNTMqG.png",
      alt: "Map Integration",
      label: "Map Integration",
    },
  ],
};

const projects = [appointmentProject, ipdProject, wanderlustProject];

/* -------------------------------------------------------------------------- */
/*                               IMAGE CAROUSEL                               */
/* -------------------------------------------------------------------------- */

function ProjectImageCarousel({
  screenshots,
  accentColor,
}: {
  screenshots: Screenshot[];
  accentColor: "cyan" | "emerald" | "rose";
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);

  const activeColor =
    accentColor === "cyan"
      ? "bg-cyan-400"
      : accentColor === "emerald"
      ? "bg-emerald-400"
      : "bg-rose-400";

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((p) =>
      p === 0 ? screenshots.length - 1 : p - 1
    );
  };

  const next = () => {
    setDirection(1);
    setCurrentIndex((p) =>
      p === screenshots.length - 1 ? 0 : p + 1
    );
  };

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <>
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50">
        <div className="relative w-full aspect-video">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) next();
                if (info.offset.x > 100) prev();
              }}
            >
              <Image
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                fill
                className="object-contain cursor-pointer"
                sizes="100vw"
                priority
                onClick={() => setIsFullscreen(true)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 border border-white/20"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 border border-white/20"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Bottom Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">
                {screenshots[currentIndex].label}
              </span>

              <span className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full">
                {currentIndex + 1} / {screenshots.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? `w-8 h-2 ${activeColor}`
                : "w-2 h-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Fullscreen */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-5 right-5 z-20 p-3 rounded-full bg-white/10 border border-white/20"
            >
              <X className="text-white w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 border border-white/20"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 border border-white/20"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>

            <div
              className="relative w-full max-w-6xl px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                               PROJECT CARD                                 */
/* -------------------------------------------------------------------------- */

function FeaturedProject({
  project,
}: {
  project: ProjectType;
}) {
  const accentClasses = {
    cyan: {
      text: "text-cyan-400",
      border: "border-cyan-400/30",
      dot: "bg-cyan-400",
    },
    emerald: {
      text: "text-emerald-400",
      border: "border-emerald-400/30",
      dot: "bg-emerald-400",
    },
    rose: {
      text: "text-rose-400",
      border: "border-rose-400/30",
      dot: "bg-rose-400",
    },
  };

  const accent = accentClasses[project.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="glass rounded-2xl overflow-hidden"
    >
      <div className="p-6 md:p-10">
        {/* Badge */}
        <span
          className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full glass border ${accent.border} ${accent.text}`}
        >
          <Sparkles size={12} />
          Featured Project
        </span>

        {/* Title */}
        <h3 className="mt-5 text-3xl md:text-4xl font-bold">
          {project.name}
        </h3>

        {/* Description */}
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Features */}
        <div className="mt-8">
          <h4 className="text-sm uppercase tracking-wider text-foreground/70 mb-4">
            Key Features
          </h4>

          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${accent.dot}`}
                />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-8">
          <h4 className="text-sm uppercase tracking-wider text-foreground/70 mb-4">
            Tech Stack
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => {
              const info = techIcons[tech];
              const Icon = info?.icon;

              return (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-white/10 text-sm"
                >
                  {Icon && (
                    <Icon
                      size={16}
                      style={{ color: info.color }}
                    />
                  )}
                  {tech}
                </motion.div>
              );
            })}
          </div>
        </div>

      {/* Buttons */}
<div className="mt-8 flex flex-wrap gap-3">
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium"
  >
    <Github size={16} />
    View Code
  </a>

  {project.name !== "Appointment Booking System" && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 glass border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium"
    >
      <ExternalLink size={16} />
      Live Demo
    </a>
  )}
</div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Carousel */}
      <div className="p-6 md:p-10">
        <h4 className="text-sm uppercase tracking-wider text-foreground/70 mb-6">
          Application Screenshots
        </h4>

        <ProjectImageCarousel
          screenshots={project.screenshots}
          accentColor={project.accent}
        />
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  EXPORT                                    */
/* -------------------------------------------------------------------------- */

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Work"
      title="Featured Projects"
      description="A selection of production-grade full stack systems built with strong focus on scalability, architecture, security, and user experience."
    >
      <div className="space-y-8">
        {projects.map((project) => (
          <FeaturedProject
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}