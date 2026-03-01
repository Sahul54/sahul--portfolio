import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Sahul.dev
          </h2>
          <p className="text-sm leading-relaxed">
            Full Stack Developer specializing in building modern,
            scalable web applications using Next.js, Firebase,
            and modern technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Me
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:your@email.com"
              className="hover:text-white transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Sahul Kumar. All rights reserved.
      </div>
    </footer>
  );
}
