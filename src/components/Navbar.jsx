"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Download } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", link: "hero" },
    { name: "About", link: "about" },
    { name: "Experience", link: "experience" },
    { name: "Projects", link: "projects" },
    { name: "Education", link: "education" },
    { name: "Contact", link: "contact" },
  ];

  // 🔥 Scroll Spy + Navbar Blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = menuItems.map((item) =>
        document.getElementById(item.link)
      );

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "bg-black/30 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

          {/* LEFT LOGO */}
          <Link
            href="#hero"
            className="text-3xl text-pink-500 italic"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            sahul.dev
          </Link>

          {/* CENTER MENU */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-6">

            {menuItems.map((item) => (
              <a
                key={item.link}
                href={`#${item.link}`}
                className="relative px-4 py-2 text-white font-medium"
              >
                {active === item.link && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 transition ${
                    active === item.link
                      ? "text-black font-semibold"
                      : "text-white hover:text-pink-400"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            ))}

          </div>

          {/* RIGHT DOWNLOAD BUTTON */}
          <div className="hidden md:flex">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-white shadow-lg shadow-pink-500/20 hover:scale-105 transition"
            >
              <Download size={16} />
              Download CV
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-8 text-2xl z-40"
        >
          {menuItems.map((item) => (
            <a
              key={item.link}
              href={`#${item.link}`}
              onClick={() => setOpen(false)}
              className="text-white hover:text-pink-400 transition"
            >
              {item.name}
            </a>
          ))}

          <Link
            href="/resume.pdf"
            target="_blank"
            className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-white"
          >
            Download CV
          </Link>
        </motion.div>
      )}
    </>
  );
}