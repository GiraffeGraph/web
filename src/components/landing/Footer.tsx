"use client";

import { Github } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { GITHUB_ORG_URL } from "@/lib/links";

const footerLinks = {
  Project: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Case Study", href: "#case-study" },
    { label: "Research", href: "#research" },
  ],
  Community: [
    { label: "GitHub", href: GITHUB_ORG_URL },
    { label: "Contributors", href: "#contributors" },
    { label: "FAQ", href: "#faq" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="border-t border-[#1A2F44]"
      style={{ backgroundColor: "#070D18" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="inline-flex mb-3" aria-label="GiraffeGraph home">
              <Logo size={26} textClassName="text-[15px]" />
            </a>
            <p className="text-[13px] text-[#5A6A7E] leading-relaxed mb-6 max-w-[260px]">
              Open-source, human-in-the-loop knowledge graph engine. LLMs propose. Humans verify.
            </p>
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg bg-[#1D2E47] border border-[#253D5A] flex items-center justify-center text-[#5A6A7E] hover:text-[#E9AE3F] hover:border-[rgba(233,174,63,0.4)] transition-all"
            >
              <Github size={14} aria-hidden="true" />
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[12px] font-semibold text-white uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#5A6A7E] hover:text-[#A7ADB3] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1A2F44] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-[12px] text-[#5A6A7E]">
            <span>Made with ✦ for knowledge builders</span>
            <span className="hidden sm:inline h-3 w-px bg-[#1A2F44]" aria-hidden="true" />
            <span>© 2026 GiraffeGraph contributors</span>
          </div>
          <div
            className="flex items-center gap-2 text-[12px] text-[#5A6A7E] bg-[#1D2E47] border border-[#253D5A] px-3 py-1.5 rounded-full"
            aria-label="Dark mode enabled"
          >
            <span className="w-3 h-3 rounded-full bg-[#0B1624] border border-[#E9AE3F] flex-shrink-0" />
            Dark mode
          </div>
        </div>
      </div>
    </footer>
  );
}
