
"use client";

import { useEffect, useRef } from "react";

const technologies = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "Docker",
  "Prisma",
  "AWS",
  "Git",
  "Express.js",
  "GraphQL",
  "Redis",
  "GitHub",
  "REST API",
];

export default function GlobalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;
    let particles = [];
    let width = 0;
    let height = 0;

    const particleCount = 65;
    const connectionDistance = 150;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.5,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= width) p.vx *= -1;
        if (p.y <= 0 || p.y >= height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 220, 190, 0.55)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(0, 190, 180, ${
              (1 - distance / connectionDistance) * 0.22
            })`;

            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[#030712]">
      {/* Network Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      {/* Floating Technologies */}
      <div className="absolute inset-0 overflow-hidden">
        {technologies.map((tech, index) => (
          <span
            key={tech}
            className="floating-tech absolute whitespace-nowrap font-mono text-xs sm:text-sm"
            style={{
              left: `${(index * 37 + 5) % 95}%`,
              top: `${(index * 23 + 8) % 95}%`,
              animationDuration: `${18 + (index % 8) * 2}s`,
              animationDelay: `-${index * 2}s`,
              color:
                index % 3 === 0
                  ? "rgba(34,211,238,0.25)"
                  : index % 3 === 1
                  ? "rgba(52,211,153,0.22)"
                  : "rgba(45,212,191,0.20)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#334155 1px,transparent 1px),linear-gradient(to bottom,#334155 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />

      <style jsx>{`
        .floating-tech {
          animation: floating 20s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes floating {
          0% {
            transform: translate3d(-15px, -20px, 0) rotate(-8deg);
          }

          50% {
            transform: translate3d(25px, 20px, 0) rotate(5deg);
          }

          100% {
            transform: translate3d(-10px, 35px, 0) rotate(-5deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-tech {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
