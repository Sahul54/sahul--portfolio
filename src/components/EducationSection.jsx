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
      className="relative w-full py-28 bg-[#0b1120] text-white overflow-hidden px-6"
    >
      {/* Glow Background */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-violet-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-pink-600/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            Academic background & qualifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE – Code Style Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center w-full"
          >
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-violet-500/40 w-full max-w-2xl">

              <div
                className="relative bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 transition-all duration-300 hover:shadow-pink-500/20"
                style={{
                  backgroundImage: "url('/Card.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex gap-3 mb-6">
                  <div className="h-3.5 w-3.5 rounded-full bg-red-400"></div>
                  <div className="h-3.5 w-3.5 rounded-full bg-yellow-400"></div>
                  <div className="h-3.5 w-3.5 rounded-full bg-green-400"></div>
                </div>

                <pre className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-wrap break-words font-mono">
<span className="text-pink-400">const</span> education = {"["}
{"\n"}
{educations.map((edu, index) => (
  <span key={edu.id}>
    {"  {"}
    {"\n    "}
    degree: <span className="text-green-400">"{edu.degree}"</span>,
    {"\n    "}
    institute: <span className="text-green-400">"{edu.institute}"</span>,
    {"\n    "}
    duration: <span className="text-cyan-400">"{edu.duration}"</span>
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

          {/* RIGHT SIDE – Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {educations.map((edu) => (
              <div
                key={edu.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:border-pink-500/40 transition duration-500"
              >
                <p className="text-sm text-[#16f2b3] mb-3">
                  {edu.duration}
                </p>

                <div className="flex items-center gap-4 mb-3">
                  <BsMortarboard
                    className="text-pink-400"
                    size={26}
                  />
                  <h3 className="text-lg md:text-xl font-semibold">
                    {edu.degree}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm md:text-base">
                  {edu.institute}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}