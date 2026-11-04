"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden px-6 py-24 md:py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:mb-24"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            My Portfolio
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Things I've{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Built
            </span>
          </h2>

          <p className="mt-6 text-base text-gray-400 md:text-lg">
            Real-world projects built with modern technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={project.title || index}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={isReverse ? "lg:order-2" : ""}
                >
                  <span className="mb-4 inline-block text-sm font-medium text-[var(--accent)]">
                    Featured Project / 0{index + 1}
                  </span>

                  <h3 className="mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-sm font-medium text-[var(--accent)]">
                    {project.role}
                  </p>

                  <p className="mb-7 leading-relaxed text-gray-300">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8 flex flex-wrap gap-3">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs text-gray-300 transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Live Project Link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] px-6 py-3 font-medium text-white shadow-lg shadow-[var(--glow-primary)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--glow-secondary)]"
                    >
                      Visit Live
                      <ExternalLink
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  )}
                </motion.div>

                {/* Project Preview */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={isReverse ? "lg:order-1" : ""}
                >
                  <div className="group relative">
                    {/* Glow */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-10 blur-3xl transition duration-500 group-hover:opacity-25" />

                    {/* Image Card */}
                    <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-2xl backdrop-blur-xl transition duration-500 group-hover:-translate-y-2 group-hover:border-[var(--accent)]/40 md:p-6">
                      <div className="mb-4 flex items-center gap-2 border-b border-[var(--border)] pb-4">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-yellow-400" />
                        <span className="h-3 w-3 rounded-full bg-green-400" />
                        <span className="ml-auto text-xs text-gray-500">
                          {project.title}
                        </span>
                      </div>

                      <div className="relative overflow-hidden rounded-xl">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          width={550}
                          height={500}
                          className="h-auto w-full rounded-xl object-contain transition duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
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