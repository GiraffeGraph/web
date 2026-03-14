"use client";

import { Twitter, Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap", "Status"],
  "Use Cases": ["Story & Film", "Research", "Documents", "Enterprise"],
  Resources: ["Documentation", "API Reference", "Blog", "Templates", "Community"],
  Company: ["About", "Careers", "Privacy Policy", "Terms of Service", "Contact"],
};

export default function Footer() {
  return (
    <footer
      className="border-t border-[#1A2F44]"
      style={{ backgroundColor: "#070D18" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <a href="#" className="inline-flex mb-3" aria-label="GiraffeGraph home">
              <Logo size={26} textClassName="text-[15px]" />
            </a>
            <p className="text-[13px] text-[#5A6A7E] leading-relaxed mb-6 max-w-[220px]">
              From raw data to living knowledge. AI extracts. You control. Graph grows.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email for newsletter"
                className="flex-1 bg-[#1D2E47] border border-[#253D5A] rounded-lg px-3 py-2 text-[13px] text-white placeholder:text-[#5A6A7E] focus:border-[#E9AE3F] focus:outline-none transition-colors min-w-0"
              />
              <button className="bg-gradient-to-br from-[#E9AE3F] to-[#C4893A] text-[#1D2E47] text-[12px] font-semibold px-3 py-2 rounded-lg hover:shadow-[0_0_12px_rgba(233,174,63,0.3)] transition-shadow flex-shrink-0">
                Subscribe
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-[#1D2E47] border border-[#253D5A] flex items-center justify-center text-[#5A6A7E] hover:text-[#E9AE3F] hover:border-[rgba(233,174,63,0.4)] transition-all"
                >
                  <Icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[12px] font-semibold text-white uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-[#5A6A7E] hover:text-[#A7ADB3] transition-colors"
                    >
                      {link}
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
            <span>© 2025 GiraffeGraph, Inc.</span>
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
