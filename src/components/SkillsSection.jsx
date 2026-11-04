
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
  SiTypescript,
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
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiAmazon,
  SiGooglecloud,
  SiOpenai,
  SiGooglegemini,
  SiPython,
  SiGithub,
  SiFramer,
  SiGraphql,
  SiRedis,
  SiExpo,
  SiReactquery,
  SiRazorpay,
  SiCloudinary,
} from "react-icons/si";

import {
  FaDatabase,
  FaTools,
  FaCode,
  FaBrain,
  FaServer,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Frontend Development",
    icon: <SiReact />,
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Framer Motion", icon: <SiFramer /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "Expo", icon: <SiExpo /> },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <FaServer /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Better Auth", icon: <FaServer /> },
    ],
  },
  {
    title: "Databases & ORM",
    icon: <FaDatabase />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Neon DB", icon: <SiPostgresql /> },
      { name: "Hygraph CMS", icon: <FaDatabase /> },
    ],
  },
  {
    title: "AI & Generative AI",
    icon: <FaBrain />,
    skills: [
      { name: "OpenAI API", icon: <SiOpenai /> },
      { name: "Google Gemini", icon: <SiGooglegemini /> },
      { name: "RAG", icon: <FaBrain /> },
      { name: "AI Integration", icon: <FaBrain /> },
      { name: "Embeddings", icon: <FaBrain /> },
      { name: "Vector Search", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: <SiVercel />,
    skills: [
      { name: "AWS", icon: <SiAmazon /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
      { name: "Firebase Storage", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Tools & Development",
    icon: <FaTools />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "Razorpay", icon: <SiRazorpay /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative w-full py-28 text-white overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Technologies, frameworks and tools I use to build
            scalable applications and AI-powered products.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative p-[1px] rounded-3xl bg-gradient-to-br from-[var(--primary)]/50 via-[var(--secondary)]/30 to-[var(--accent)]/40"
            >
              <div className="h-full bg-[var(--surface)]/90 backdrop-blur-xl border border-[var(--border)] rounded-3xl p-8">

                {/* CATEGORY HEADER */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-[var(--secondary)] text-2xl">
                    {category.icon}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                {/* SKILLS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="flex items-center gap-3 bg-white/5 border border-[var(--border)] rounded-xl px-3 py-3 hover:border-[var(--secondary)] hover:bg-[var(--secondary)]/5 hover:shadow-lg hover:shadow-cyan-500/10 transition duration-300 cursor-default"
                    >
                      <div className="text-[var(--secondary)] text-lg shrink-0">
                        {skill.icon}
                      </div>

                      <span className="text-gray-300 text-xs sm:text-sm font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
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
