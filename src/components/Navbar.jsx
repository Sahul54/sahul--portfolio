
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = menuItems
        .map((item) => document.getElementById(item.link))
        .filter(Boolean);

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(section.id);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-[#030712]/40 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

          {/* LOGO */}
          <Link
            href="#hero"
            className="text-3xl italic text-[var(--secondary)] hover:opacity-80 transition"
            style={{ fontFamily: "'Brush Script MT', cursive" }}
          >
            sahul.dev
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-3">
            {menuItems.map((item) => (
              <a
                key={item.link}
                href={`#${item.link}`}
                className="relative px-4 py-2 text-sm font-medium"
              >
                {active === item.link && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] shadow-lg"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors ${
                    active === item.link
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-[var(--secondary)]"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </div>

          {/* DOWNLOAD CV */}
          <div className="hidden md:flex">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full text-white shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Download size={16} />
              Download CV
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden text-[var(--secondary)]"
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed inset-0 bg-[#030712]/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 text-2xl z-40"
        >
          {menuItems.map((item) => (
            <a
              key={item.link}
              href={`#${item.link}`}
              onClick={() => setOpen(false)}
              className={`transition-colors ${
                active === item.link
                  ? "text-[var(--secondary)] font-semibold"
                  : "text-white hover:text-[var(--secondary)]"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download="Sahul_Kumar_Resume.pdf"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-full text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>
      )}
    </>
  );
}
