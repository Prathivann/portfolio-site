"use client";

import { useState, useEffect } from "react";
import { Briefcase, FileText } from "lucide-react";
import Image from "next/image";
import AnimateIn from "./AnimateIn";

const roles = [
  "Finance & Risk Analytics",
  "Data Analyst",
  "Portfolio & Investment Analytics",
  "Financial Data Science",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!deleting && charIndex < currentRole.length) {
      const t = setTimeout(() => setCharIndex(charIndex + 1), 60);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === currentRole.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex(charIndex - 1), 35);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gold/15 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <AnimateIn delay={0.1}>
              <p className="text-text-muted text-lg mb-3">Hi, I&apos;m</p>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-dark leading-tight tracking-tight font-serif">
                Prithivan Raja
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div className="mt-5 h-10 flex items-center">
                <span className="text-2xl md:text-3xl font-bold text-gold-dark font-serif">
                  {roles[roleIndex].slice(0, charIndex)}
                </span>
                <span className="w-0.5 h-8 bg-gold ml-0.5 animate-cursor-blink" />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.4}>
              <div className="mt-6 space-y-1">
                <p className="text-text-secondary text-lg">
                  Turning complex data into strategic financial decisions.
                </p>
                <p className="text-text-secondary text-lg">
                  MS Engineering Management @ Northeastern | CFA Level I Candidate
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.5}>
              <p className="mt-6 text-lg font-semibold text-navy tracking-wide">
                Boston <span className="text-gold mx-3">|</span> Searching Winter CO-OP <span className="text-gold mx-3">|</span> East Coast
              </p>
            </AnimateIn>

            <AnimateIn delay={0.6}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  <Briefcase size={18} /> View My Work
                </a>
                <a href="/resume.pdf" download="betterhirePrithivan.pdf" className="btn-secondary">
                  <FileText size={18} /> Download CV
                </a>
              </div>
            </AnimateIn>
          </div>

          {/* Photo — clean, no metric badges */}
          <AnimateIn delay={0.4} direction="right" className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-gold/25 to-navy/15 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/30 bg-white shadow-xl aspect-[4/5]">
                <Image
                  src="/headshot.jpg"
                  alt="Prithivan Raja"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
