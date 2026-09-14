"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy-dark ${scrolled ? "shadow-lg" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-center h-16 relative">

        {/* Center nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.label} href={item.href} className="text-base font-bold text-gold-dark font-serif hover:text-gold-bright transition-colors">
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className="text-base font-bold text-gold-dark font-serif hover:text-gold-bright transition-colors">
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Resume — absolute right */}
        <a href="/resume.pdf" target="_blank" className="absolute right-6 md:right-10 hidden md:inline-flex px-5 py-2 bg-gold text-navy-dark text-sm font-bold font-serif hover:bg-gold-bright transition-all">
          View Resume
        </a>

        <button className="absolute right-6 md:hidden text-gold" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-dark border-t border-navy-light/30">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="text-base font-bold text-gold font-serif py-2">{item.label}</Link>
              ) : (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="text-base font-bold text-gold font-serif py-2">{item.label}</a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}