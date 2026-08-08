"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0f766e 0%, #0d9488 40%, #0284c7 100%)" }}>
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold text-white/90 uppercase tracking-widest mb-5">
            <Sparkles size={12} /> Pricing
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Transparent & Affordable
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-lg mx-auto">
            Quality home diagnostic care at rates that don't break the bank. No hidden charges.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/60 mb-3">Starting From</p>
          <div className="flex items-start justify-center gap-1 mb-3">
            <span className="text-4xl font-extrabold text-white mt-3">₹</span>
            <span className="text-8xl font-black text-white leading-none">XXX</span>
            <span className="text-2xl font-bold text-white/50 self-end mb-3">*</span>
          </div>
          <p className="text-white/60 text-sm mb-8 max-w-sm mx-auto">
            * Price varies based on location and examination type. Contact us for an exact quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-teal-700 bg-white hover:bg-teal-50 shadow-xl shadow-black/20 transition-all text-base active:scale-95">
              <PhoneCall size={20} />
              Call for Exact Pricing
            </a>
            <a href="#contact"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-white/15 hover:bg-white/25 border border-white/30 transition-all text-base active:scale-95">
              Book Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
