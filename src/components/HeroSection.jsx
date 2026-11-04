
"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white px-6 sm:px-10"
    >
      {/* Ambient Theme Glows */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[var(--glow-primary)] rounded-full blur-[140px] animate-pulse pointer-events-none" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-[var(--glow-secondary)] rounded-full blur-[140px] animate-pulse pointer-events-none" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6,182,212,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,182,212,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-[var(--border)] text-sm text-[var(--secondary)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--secondary)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--secondary)]" />
            </span>
            Open for Work
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              Sahul Kumar
            </span>
          </h1>

          {/* Typing */}
          <div className="mt-5 text-lg sm:text-xl md:text-2xl font-semibold text-[var(--secondary)] min-h-[40px]">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Next.js Specialist",
                2000,
                "SaaS Platform Builder",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
            I build scalable web platforms with beautiful UI,
            smooth UX and production-ready architecture.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 mt-8 flex-wrap">

            <Link
              href="https://github.com/sahul54"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-white/5 border border-[var(--border)] rounded-xl hover:bg-[var(--primary)]/15 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <Github className="text-gray-300 hover:text-white transition" />
            </Link>

            <Link
              href="https://linkedin.com/in/sahul54"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-white/5 border border-[var(--border)] rounded-xl hover:bg-[var(--primary)]/15 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <Linkedin className="text-gray-300 hover:text-white transition" />
            </Link>

            <Link
              href="https://x.com/SahulKumar76473"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-3 bg-white/5 border border-[var(--border)] rounded-xl hover:bg-[var(--secondary)]/15 hover:border-[var(--secondary)] hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
            >
              <Twitter className="text-gray-300 hover:text-white transition" />
            </Link>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">

            <Link
              href="#contact"
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 hover:shadow-cyan-500/30 transition-all"
            >
              <Mail size={18} />
              Contact Me
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-xl border border-[var(--secondary)] text-[var(--secondary)] font-medium hover:bg-[var(--secondary)] hover:text-[#030712] transition-all"
            >
              <Download size={18} />
              Resume
            </Link>

          </div>
        </motion.div>

        {/* RIGHT SIDE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          {/* Outer Gradient Border */}
          <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] w-full max-w-xl group">

            {/* Main Card */}
            <div
              className="relative bg-[var(--surface)]/95 backdrop-blur-2xl border border-[var(--border)] rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-500 group-hover:shadow-cyan-500/20 overflow-hidden"
              style={{ backgroundImage: "url('/Card.png')", backgroundSize: "cover", backgroundPosition: "center" }}
            >

              {/* Card Overlay */}
              <div className="absolute inset-0 bg-[#07111d]/90 pointer-events-none" />

              {/* Glow Ring */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full blur-3xl opacity-25 animate-pulse" />

              {/* Terminal Content */}
              <div className="relative z-10">

                {/* Terminal Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-3">
                    <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
                    <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
                    <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
                  </div>

                  <span className="text-xs text-gray-400 font-mono">
                    sahul.dev
                  </span>
                </div>

                {/* Code Block */}
                <div className="font-mono text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 space-y-1 overflow-x-auto">

                  <div>
                    <span className="text-[var(--secondary)]">const</span>{" "}
                    <span className="text-cyan-400">developer</span> = {"{"}
                  </div>

                  <div className="pl-4">
                    name:{" "}
                    <span className="text-emerald-400">
                      "Sahul Kumar"
                    </span>,
                  </div>

                  <div className="pl-4">
                    role:{" "}
                    <span className="text-emerald-400">
                      "Full Stack Developer"
                    </span>,
                  </div>

                  <div className="pl-4">
                    experience:{" "}
                    <span className="text-yellow-400">
                      "1.7+ Years"
                    </span>,
                  </div>

                  <div className="pl-4">
                    stack: [
                    <span className="text-[var(--secondary)]">"React"</span>,{" "}
                    <span className="text-[var(--secondary)]">"Next.js"</span>,{" "}
                    <span className="text-[var(--secondary)]">"Firebase"</span>,{" "}
                    <span className="text-[var(--secondary)]">"Node.js"</span>
                    ],
                  </div>

                  <div className="pl-4">
                    specialization:{" "}
                    <span className="text-yellow-400">
                      "Scalable SaaS & EdTech Platforms"
                    </span>,
                  </div>

                  <div className="pl-4">
                    status:{" "}
                    <span className="text-emerald-400">
                      "Available for Opportunities"
                    </span>
                  </div>

                  <div>{"};"}</div>
                </div>

                {/* Bottom Badges */}
                <div className="mt-8 flex justify-between items-center flex-wrap gap-4">

                  <div className="px-4 py-1 text-xs rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--accent)]">
                    ⚡ Production Ready Code
                  </div>

                  <div className="px-4 py-1 text-xs rounded-full bg-[var(--secondary)]/10 border border-[var(--secondary)]/30 text-[var(--secondary)]">
                    🚀 SaaS Builder
                  </div>

                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
