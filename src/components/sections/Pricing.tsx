"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, Sparkles, ShieldCheck, Check } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #094f4a 0%, #0a6960 40%, #03527a 100%)" }}>
      
      {/* Background Ornaments */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Floating sphere glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] font-extrabold text-white uppercase tracking-widest mb-6 shadow-md"
          >
            <Sparkles size={11} className="text-teal-300 animate-pulse" />
            Pricing
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.05 }} 
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight"
          >
            Transparent & Affordable
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} 
            className="text-teal-100/70 text-base md:text-lg max-w-lg mx-auto font-medium"
          >
            Quality home diagnostic care at rates that don't break the bank. No hidden charges.
          </motion.p>
        </div>

        {/* Centered Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 md:p-12 backdrop-blur-md bg-white/[0.06] border border-white/10 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 text-center overflow-hidden"
        >
          {/* Highlight gradient backglow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-gradient-to-br from-teal-500/10 to-sky-500/10 opacity-40 blur-3xl pointer-events-none" />

          <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-teal-200/80 mb-4">Starting From</p>
          
          <div className="flex items-start justify-center gap-1.5 mb-4">
            <span className="text-3xl font-extrabold text-white mt-4">₹</span>
            <span className="text-8xl font-black text-white leading-none tracking-tighter">1,200</span>
            <span className="text-2xl font-bold text-teal-200/50 self-end mb-3">*</span>
          </div>

          <p className="text-teal-100/70 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
            * Price varies based on location and scan types. Includes radiographer home visit, high-resolution digital film, signed report, and travel. No hidden fees.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 max-w-md mx-auto">
            <a href={`tel:${siteConfig.phone}`}
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-extrabold text-teal-950 bg-white hover:bg-teal-50 shadow-xl shadow-black/10 transition-all text-sm active:scale-95"
            >
              <PhoneCall size={16} />
              Call for Exact Quote
            </a>
            <a href="#contact"
              className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-extrabold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-sm active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-8" />

          {/* Horizontal Benefits Row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] font-bold text-teal-100/70">
            <span className="flex items-center gap-1.5">
              <Check size={13} strokeWidth={3} className="text-teal-400" />
              Certified Radiographer Visit
            </span>
            <span className="hidden sm:inline text-teal-200/20">•</span>
            <span className="flex items-center gap-1.5">
              <Check size={13} strokeWidth={3} className="text-teal-400" />
              Digital Film & Report Included
            </span>
            <span className="hidden sm:inline text-teal-200/20">•</span>
            <span className="flex items-center gap-1.5">
              <Check size={13} strokeWidth={3} className="text-teal-400" />
              No Travel or Visit Fees
            </span>
          </div>

        </motion.div>

        {/* Footnote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-1.5 text-center text-[10px] font-bold text-teal-200/30 uppercase tracking-wide"
        >
          <ShieldCheck size={14} className="text-teal-400/40" />
          <span>Strict Radiation & Infection Control Protocol Certified</span>
        </motion.div>

      </div>
    </section>
  );
};
