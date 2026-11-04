
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const stats = [
    { number: "1.7+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-28 text-white overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Gradient Border */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500" />

            {/* Image Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-[var(--border)] rounded-3xl p-3">
              <Image
                src="/sahul.jpeg"
                alt="Sahul Kumar"
                width={420}
                height={420}
                priority
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Image Glow */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--glow-secondary)] rounded-full blur-3xl -z-10" />

          </div>
        </motion.div>

        {/* RIGHT CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-gray-300 text-lg leading-relaxed">
            I'm a passionate Software Developer focused on building scalable,
            high-performance web applications. I specialize in React, Next.js,
            Firebase and modern backend technologies.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            I enjoy solving complex problems, crafting beautiful UI, and turning
            ideas into real-world digital products. Always learning, always building.
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mt-8 rounded-full" />

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-[var(--border)] text-center hover:border-[var(--secondary)] hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
                  {stat.number}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
