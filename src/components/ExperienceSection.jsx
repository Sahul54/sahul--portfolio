
"use client";

import { motion } from "framer-motion";
import { BsPersonWorkspace } from "react-icons/bs";

const experiences = [
  {
    id: 1,
    duration: "Jan 2026 - Present",
    title: "SDE1 (Software Development Engineer)",
    company: "PlaceTie",
    description:
      "Working on a US market focused EdTech platform. Building scalable architecture, optimized frontend and backend systems using Next.js and Firebase.",
  },
  {
    id: 2,
    duration: "March 2025 - Dec 2025",
    title: "Full Stack Developer",
    company: "Edrix",
    description:
      "Developed and maintained an EdTech project and a Corporate Event Management platform. Handled frontend, backend, database architecture and deployment.",
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full py-28 text-white overflow-hidden px-6"
    >
      <div className="max-w-6xl mx-auto relative">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            My professional journey in software development
          </p>
        </motion.div>

        {/* TIMELINE LINE */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-transparent via-[var(--secondary)]/50 to-transparent"
        />

        {/* EXPERIENCE ITEMS */}
        <div className="space-y-20">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* TIMELINE DOT */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                  className="absolute md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full shadow-lg shadow-cyan-500/30 z-10 border-4 border-[#030712]"
                />

                {/* EXPERIENCE CARD */}
                <div
                  className={`w-full md:w-[45%] ${
                    isLeft
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[var(--primary)]/50 via-[var(--secondary)]/30 to-[var(--accent)]/40"
                  >
                    <div className="bg-[var(--surface)]/90 backdrop-blur-xl border border-[var(--border)] rounded-2xl p-8 shadow-xl hover:shadow-cyan-500/15 transition duration-300">

                      {/* DURATION */}
                      <p className="text-sm text-[var(--secondary)] font-medium mb-3">
                        {exp.duration}
                      </p>

                      {/* ROLE */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-[var(--primary)]/10 rounded-xl border border-[var(--secondary)]/20">
                          <BsPersonWorkspace
                            className="text-[var(--secondary)]"
                            size={24}
                          />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold">
                            {exp.title}
                          </h3>

                          <p className="text-gray-400 text-sm mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
