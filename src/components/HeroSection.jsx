"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Github,
    Linkedin,
    Facebook,
    Twitter,
    Download,
    Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white px-6 sm:px-10"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-black"></div>

            {/* Animated Blobs */}
            <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-pink-600/30 rounded-full blur-[140px] animate-pulse"></div>
            <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-violet-600/30 rounded-full blur-[140px] animate-pulse"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b1a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>

            <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center z-10">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    {/* Badge */}
                    <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-pink-400 backdrop-blur-md">
                        🚀 Open for Work
                    </div>

                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                            Sahul Kumar
                        </span>
                    </h1>

                    {/* Typing */}
                    <div className="mt-5 text-lg sm:text-xl md:text-2xl font-semibold text-cyan-400 min-h-[40px]">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "Next.js Specialist",
                                2000,
                                "SaaS Platform Builder",
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
                        I build scalable web platforms with beautiful UI, smooth UX and
                        production-ready architecture.
                    </p>

                    {/* Social Links – Separate Styling */}
                    <div className="flex justify-center lg:justify-start gap-4 mt-8 flex-wrap">

                        {/* Github */}
                        <Link
                            href="https://github.com/sahul54"
                            target="_blank"
                            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-700/30 transition"
                        >
                            <Github className="text-gray-300 hover:text-white transition" />
                        </Link>

                        {/* LinkedIn */}
                        <Link
                            href="https://linkedin.com/in/sahul54"
                            target="_blank"
                            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition"
                        >
                            <Linkedin className="text-gray-300 hover:text-white transition" />
                        </Link>

                        {/* Facebook */}
                        {/* <Link
              href="https://facebook.com/yourusername"
              target="_blank"
              className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/30 transition"
            >
              <Facebook className="text-gray-300 hover:text-white transition" />
            </Link> */}

                        {/* Twitter */}
                        <Link
                            href="https://x.com/SahulKumar76473"
                            target="_blank"
                            className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-400/30 transition"
                        >
                            <Twitter className="text-gray-300 hover:text-white transition" />
                        </Link>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
                        <Link
                            href="#contact"
                            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 font-medium shadow-lg shadow-pink-500/30 hover:scale-105 transition"
                        >
                            <Mail size={18} />
                            Contact Me
                        </Link>

                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 px-8 py-3 rounded-xl border border-pink-500 text-pink-400 font-medium hover:bg-pink-500 hover:text-white transition"
                        >
                            <Download size={18} />
                            Resume
                        </Link>
                    </div>
                </motion.div>

                {/* RIGHT SIDE CARD */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    {/* Outer Gradient Border */}
                    <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-pink-500 via-purple-500 to-violet-500 w-full max-w-xl group">

                        {/* Background Image Layer */}
                        <div
                            className="absolute inset-0 rounded-3xl opacity-20 bg-cover bg-center"

                        />

                        {/* Main Card */}
                        <div className="relative bg-[#0f172a]/85 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 transition-all duration-500 group-hover:shadow-pink-500/30 " style={{ backgroundImage: "url('/Card.png')" }}>

                            {/* Glow Ring */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                            {/* Terminal Header */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-3">
                                    <div className="h-3.5 w-3.5 rounded-full bg-red-400"></div>
                                    <div className="h-3.5 w-3.5 rounded-full bg-yellow-400"></div>
                                    <div className="h-3.5 w-3.5 rounded-full bg-green-400"></div>
                                </div>

                                <span className="text-xs text-gray-400 font-mono">
                                    sahul.dev
                                </span>
                            </div>

                            {/* Code Block */}
                            <div className="font-mono text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 space-y-1">

                                <div>
                                    <span className="text-pink-400">const</span>{" "}
                                    <span className="text-cyan-400">developer</span> = {"{"}
                                </div>

                                <div className="pl-4">
                                    name: <span className="text-green-400">"Sahul Kumar"</span>,
                                </div>

                                <div className="pl-4">
                                    role: <span className="text-green-400">"Full Stack Developer"</span>,
                                </div>

                                <div className="pl-4">
                                    experience: <span className="text-yellow-400">"1+ Years"</span>,
                                </div>

                                <div className="pl-4">
                                    stack: [
                                    <span className="text-cyan-400">"React"</span>,{" "}
                                    <span className="text-cyan-400">"Next.js"</span>,{" "}
                                    <span className="text-cyan-400">"Firebase"</span>,{" "}
                                    <span className="text-cyan-400">"Node.js"</span>
                                    ],
                                </div>

                                <div className="pl-4">
                                    specialization:{" "}
                                    <span className="text-yellow-400">
                                        "Scalable SaaS & EdTech Platforms"
                                    </span>,
                                </div>

                                <div className="pl-4">
                                    status:{" "}
                                    <span className="text-green-400">
                                        "Available for Opportunities"
                                    </span>
                                </div>

                                <div>{"};"}</div>
                            </div>

                            {/* Bottom Badge */}
                            <div className="mt-8 flex justify-between items-center flex-wrap gap-4">
                                <div className="px-4 py-1 text-xs rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400">
                                    ⚡ Production Ready Code
                                </div>

                                <div className="px-4 py-1 text-xs rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400">
                                    🚀 SaaS Builder
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}