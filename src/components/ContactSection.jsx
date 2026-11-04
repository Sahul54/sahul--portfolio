"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function ContactSection() {
  const email = "ksahul9576@gmail.com";

  const mailSubject = "Project Inquiry from Portfolio";
  const mailBody = `Hi Sahul,

I came across your portfolio and would like to discuss a potential project opportunity.

Looking forward to connecting with you.

Best Regards,
[Your Name]`;

  const mailToLink = `mailto:${email}?subject=${encodeURIComponent(
    mailSubject
  )}&body=${encodeURIComponent(mailBody)}`;

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sahul54",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/sahul54",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/SahulKumar76473",
      label: "Twitter",
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[120px]" />

      {/* Left Social Links */}
      <div className="fixed bottom-0 left-8 z-40 hidden flex-col items-center gap-6 lg:flex">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-[var(--accent)]"
          >
            <Icon size={20} />
          </a>
        ))}

        <div className="mt-4 h-24 w-px bg-gradient-to-b from-[var(--secondary)] to-transparent" />
      </div>

      {/* Right Email */}
      <div className="fixed bottom-0 right-8 z-40 hidden flex-col items-center lg:flex">
        <div className="mb-8">
          <a
            href={mailToLink}
            className="text-sm tracking-widest text-gray-400 transition duration-300 hover:text-[var(--accent)]"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            {email}
          </a>
        </div>

        <div className="h-24 w-px bg-gradient-to-b from-[var(--secondary)] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-4xl font-bold md:text-6xl"
        >
          Let’s Work{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
            Together
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-base leading-relaxed text-gray-400 md:text-lg"
        >
          I’m open to new opportunities and exciting collaborations.
          Have a project in mind? Let’s build something impactful together.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          href={mailToLink}
          className="group inline-flex items-center gap-3 rounded-xl border border-[var(--accent)]/50 bg-[var(--surface)] px-8 py-4 font-medium text-[var(--accent)] shadow-lg shadow-[var(--glow-primary)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--primary)] hover:text-white hover:shadow-[var(--glow-secondary)]"
        >
          <Mail size={18} />
          Say Hello
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </motion.a>

        {/* Mobile Social Links */}
        <div className="mt-14 flex items-center justify-center gap-8 lg:hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 transition duration-300 hover:text-[var(--accent)]"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        <p className="mt-20 text-xs text-gray-500">
          © {new Date().getFullYear()} Sahul Kumar. All rights reserved.
        </p>
      </div>
    </section>
  );
}