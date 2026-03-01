"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-28 bg-[#0b1120] text-white overflow-hidden px-6"
    >
      {/* Soft Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />

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
            <div className="absolute -inset-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-violet-600 rounded-3xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>

            {/* Image Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-3">
              <Image
                src="/sahul.jpeg"
                alt="Sahul Kumar"
                width={420}
                height={420}
                className="rounded-2xl object-cover"
              />
            </div>

          </div>
        </motion.div>

        {/* RIGHT CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Me</span>
          </h2>

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
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-600 mt-8 rounded-full"></div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">

            {[
              { number: "1+", label: "Years Experience" },
              { number: "5+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition duration-300"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
              </div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}