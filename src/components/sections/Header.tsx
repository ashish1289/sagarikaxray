"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Menu, X, Activity, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "py-3 bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-white/60" : "py-5 bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 bg-gradient-to-br from-teal-600 to-sky-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform">
            <Activity size={20} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900">
              Home<span className="gradient-text">X-Ray</span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Diagnostic Service</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-all duration-200">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-100 transition-all">
            <Phone size={15} />
            Call Now
          </a>
          <a href="#contact">
            <button className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/35 transition-all duration-300 active:scale-95">
              Book Appointment
            </button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors">
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {siteConfig.navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700 rounded-xl transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="pt-3 pb-1 flex gap-3">
                <a href={`tel:${siteConfig.phone}`} onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-teal-700 bg-teal-50 border border-teal-100 text-sm">
                  <Phone size={16} /> Call Now
                </a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 text-sm shadow-md">
                  Book Appointment
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
