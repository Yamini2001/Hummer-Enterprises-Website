// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PROJECTS", href: "/projects" },
  { name: "CLIENTS & PARTNERS", href: "/clients" },
  { name: "CONTACT US", href: "/contact", cta: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B1C2D]/95 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2 leading-tight text-[#444343]">
          <Link
  href="/"
  className="flex items-center gap-2 leading-tight cursor-pointer"
>
  <img
    src="/logo.png"
    alt="Hummer Logo"
    className="h-8 w-8 object-contain"
  />
  <div>
    <h1 className="text-2xl font-bold tracking-wide text-[#b2b4b6]">
      HUMMER
    </h1>
    <p className="text-[11px] tracking-widest text-[#b2b4b6]">
      ENTERPRISES PVT. LTD.
    </p>
  </div>
</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  link.cta
                    ? "bg-orange-500 hover:bg-orange-600 text-[#393737] px-5 py-2 rounded-sm transition"
                    : "text-gray-300 hover:text-[#9b9090] transition-colors"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-300"
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-[#0B1C2D]`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-sm font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  link.cta
                    ? "block bg-orange-500 hover:bg-orange-600 text-white text-center px-4 py-3 rounded-sm transition"
                    : "block text-gray-300 border-b border-white/10 pb-2 hover:text-white transition"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
