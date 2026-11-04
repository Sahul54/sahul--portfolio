
"use client";

import { motion } from "framer-motion";
import { BsMortarboard } from "react-icons/bs";

const educations = [
  {
    id: 1,
    duration: "2020 - 2024",
    degree: "Bachelor of Technology (CSE)",
    institute: "IES College of Technology, Bhopal",
  },
  {
    id: 2,
    duration: "2018 - 2020",
    degree: "Intermediate (Science)",
    institute: "Inter Science College, Hazaribag",
  },
  {
    id: 3,
    duration: "2008 - 2018",
    degree: "Secondary Education",
    institute: "PND Jain High School, Isri",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative w-full py-28 text-white overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Academic background & qualifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE - CODE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center w-full"
          >
            {/* Gradient Border */}
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-[var(--primary)]/50 via-[var(--secondary)]/40 to-[var(--accent)]/40 w-full max-w-2xl">

              {/* Card */}
              <div
                className="relative bg-[var(--surface)]/90 backdrop-blur-2xl border border-[var(--border)] rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 transition-all duration-300 hover:shadow-cyan-500/15 overflow-hidden"
              >
                {/* Card Glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[var(--glow-secondary)] rounded-full blur-3xl pointer-events-none" />

                {/* Terminal Header */}
                <div className="relative z-10 flex items-center justify-between mb-8">
                  <div className="flex gap-3">
                    <div className="h-3.5 w-3.5 rounded-full bg-red-400" />
                    <div className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
                    <div className="h-3.5 w-3.5 rounded-full bg-green-400" />
                  </div>

                  <span className="text-xs text-gray-500 font-mono">
                    education.js
                  </span>
                </div>

                {/* Code Content */}
                <pre className="relative z-10 text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-wrap break-words font-mono">
                  <span className="text-[var(--secondary)]">const</span>{" "}
                  <span className="text-cyan-400">education</span> = {"["}
                  {"\n"}
                  {educations.map((edu, index) => (
                    <span key={edu.id}>
                      {"  {"}
                      {"\n    "}
                      degree:{" "}
                      <span className="text-emerald-400">
                        "{edu.degree}"
                      </span>
                      ,
                      {"\n    "}
                      institute:{" "}
                      <span className="text-emerald-400">
                        "{edu.institute}"
                      </span>
                      ,
                      {"\n    "}
                      duration:{" "}
                      <span className="text-[var(--secondary)]">
                        "{edu.duration}"
                      </span>
                      {"\n  }"}
                      {index !== educations.length - 1 && ","}
                      {"\n"}
                    </span>
                  ))}
                  {"];"}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - EDUCATION CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {educations.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl border border-[var(--border)] rounded-2xl p-6 shadow-xl hover:border-[var(--secondary)]/50 hover:shadow-cyan-500/10 transition duration-500"
              >
                {/* Duration */}
                <p className="text-sm text-[var(--secondary)] font-medium mb-3">
                  {edu.duration}
                </p>

                {/* Degree */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--secondary)]/20">
                    <BsMortarboard
                      className="text-[var(--secondary)]"
                      size={26}
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold">
                    {edu.degree}
                  </h3>
                </div>

                {/* Institute */}
                <p className="text-gray-400 text-sm md:text-base ml-1">
                  {edu.institute}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
