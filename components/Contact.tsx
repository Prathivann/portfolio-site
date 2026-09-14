"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import AnimateIn from "./AnimateIn";

const links = [
  { label: "EMAIL", value: "prithivan8035@gmail.com", href: "mailto:prithivan8035@gmail.com", icon: Mail, iconColor: "text-navy" },
  { label: "LINKEDIN", value: "linkedin.com/in/prithivan-r", href: "https://linkedin.com/in/prithivan-r-817948219/", icon: Linkedin, iconColor: "text-gold-dark" },
  { label: "GITHUB", value: "github.com/Prithivann", href: "https://github.com/Prithivann", icon: Github, iconColor: "text-navy" },
];

export default function Contact() {
  return (
    <section id="contact" className="pt-6 pb-14 bg-white/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimateIn>
          <p className="section-number">/06</p>
          <h2 className="section-heading">Let&apos;s Connect</h2>
          <div className="w-16 h-0.5 bg-gold mt-3" />
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <p className="mt-6 text-text-secondary max-w-2xl text-lg leading-relaxed">
            I&apos;m actively seeking Winter 2027 co-op opportunities in financial analysis, portfolio analytics, and risk. If you&apos;re hiring or just want to talk markets and data, reach out.
          </p>
        </AnimateIn>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {links.map((link, i) => (
            <AnimateIn key={link.label} delay={0.2 + i * 0.1}>
              <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="paper-card group py-8 px-6 block">
                <div className={`${link.iconColor} mb-4`}><link.icon size={32} strokeWidth={1.5} /></div>
                <p className="text-sm font-extrabold text-gold-dark tracking-wider">{link.label}</p>
                <p className="text-lg text-navy-dark mt-2 font-bold">{link.value}</p>
              </a>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
