"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { GITHUB_ORG_URL } from "@/lib/links";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Case Study", href: "#case-study" },
  { label: "Research", href: "#research" },
  { label: "Contributors", href: "#contributors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(11,22,36,0.92)] backdrop-blur-xl border-b border-[#1A2F44]"
            : "bg-[rgba(11,22,36,0.7)] backdrop-blur-lg border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a href="#" className="flex-shrink-0" aria-label="GiraffeGraph home">
            <Logo size={32} />
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative px-3 py-2 text-[14px] text-[#A7ADB3] hover:text-white transition-colors duration-200 group rounded-lg hover:bg-[rgba(167,173,179,0.06)]"
                >
                  {link.label}
                  <span className="absolute bottom-0.5 left-3 right-3 h-px bg-[#E9AE3F] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <ButtonLink href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" size="sm" variant="primary">
              <Github size={16} aria-hidden="true" />
              GitHub
            </ButtonLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#A7ADB3] hover:text-white hover:bg-[#1A2F44] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-[#0B1624] flex flex-col pt-20 px-6"
          >
            {/* Logo in mobile menu */}
            <div className="mb-6">
              <Logo size={28} />
            </div>

            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a
                    href={link.href}
                    className="block px-4 py-3.5 text-[16px] text-[#A7ADB3] hover:text-white hover:bg-[#1A2F44] rounded-xl transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer" variant="primary" size="md" className="w-full">
                <Github size={16} aria-hidden="true" />
                GitHub
              </ButtonLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
