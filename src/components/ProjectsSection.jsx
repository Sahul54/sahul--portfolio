"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full py-28 bg-[#0b1120] text-white overflow-hidden px-6"
    >
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
            Things I've{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Built
            </span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            Real-world production projects
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={isReverse ? "lg:order-2" : ""}
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <p className="text-sm text-pink-400 mb-4">
                    {project.role}
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.live}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 hover:scale-105 transition duration-300 shadow-lg shadow-pink-500/30"
                  >
                    Visit Live
                    <ExternalLink size={18} />
                  </a>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={isReverse ? "lg:order-1" : ""}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition duration-500"></div>

                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl group-hover:scale-105 transition duration-500">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={550}
                        height={500}
                        className="rounded-xl object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}