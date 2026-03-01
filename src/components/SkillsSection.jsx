"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiBootstrap,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFigma,
} from "react-icons/si";
import { FaDatabase, FaTools, FaCode } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    icon: <FaCode />,
    skills: [
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Frameworks",
    icon: <SiReact />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Databases & CMS",
    icon: <FaDatabase />,
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Hygraph", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full py-28 bg-[#0b1120] text-white overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Technologies & tools I use to build scalable products
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-[1px] rounded-3xl bg-gradient-to-br from-pink-500/40 via-purple-500/30 to-violet-500/40"
            >
              <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-pink-500 text-2xl">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 hover:-translate-y-1 transition duration-300 cursor-pointer"
                    >
                      <div className="text-pink-400 text-lg">
                        {skill.icon}
                      </div>
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}