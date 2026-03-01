"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
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

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-[#0b1120] text-white px-6 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px]" />

      {/* LEFT FIXED SOCIAL ICONS */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-40">

        <a
          href="https://github.com/sahul54"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 transition duration-300 hover:-translate-y-1"
        >
          <Github size={20} />
        </a>

        <a
          href="https://linkedin.com/in/sahul54"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 transition duration-300 hover:-translate-y-1"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="https://x.com/SahulKumar76473"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-400 transition duration-300 hover:-translate-y-1"
        >
          <Twitter size={20} />
        </a>

        <div className="w-[1px] h-24 bg-gray-600 mt-4"></div>
      </div>

      {/* RIGHT FIXED EMAIL */}
      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center z-40">

        <div className="mb-8 flex items-center justify-center">
          <a
            href={mailToLink}
            className="text-gray-400 hover:text-pink-400 tracking-widest text-sm transition duration-300"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            {email}
          </a>
        </div>

        <div className="w-[1px] h-24 bg-gray-600"></div>
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-3xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-pink-400 tracking-widest uppercase mb-6"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Let’s Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-lg leading-relaxed mb-12"
        >
          I’m open to new opportunities — especially ambitious projects.
          Let’s build something impactful together.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          href={mailToLink}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition duration-300"
        >
          <Mail size={18} />
          Say Hello
        </motion.a>

      </div>
    </section>
  );
}