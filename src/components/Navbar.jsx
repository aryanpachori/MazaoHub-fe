"use client";

import { useState } from "react";

const links = ["Product", "Solutions", "Pricing", "CropSupply", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-[#0F6E56] tracking-tight">
            MazaoHub
          </span>
          <span className="text-[10px] bg-[#E1F5EE] text-[#085041] px-2 py-0.5 rounded-full">
            SaaS
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-600 hover:text-[#0F6E56] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#signin" className="text-sm text-gray-600 hover:text-gray-900">
            Sign in
          </a>
          <a
            href="#book-a-call"
            className="text-sm font-medium bg-[#0F6E56] text-white px-4 py-2 rounded-xl hover:bg-[#085041] transition-colors"
          >
            Book a demo
          </a>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-600 hover:text-[#0F6E56]"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-3 border-t border-gray-100">
            <a href="#signin" className="text-sm text-gray-600 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#book-a-call"
              className="text-sm font-medium bg-[#0F6E56] text-white px-4 py-2 rounded-xl hover:bg-[#085041] transition-colors text-center"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
