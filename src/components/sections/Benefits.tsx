"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2 } from "lucide-react";

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle graphic decorations */}
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-teal-50/50 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute right-0 bottom-1/3 w-80 h-80 bg-sky-50/50 rounded-full blur-3xl translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Text + Benefit cards list */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            {/* Header tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-[10px] font-extrabold text-teal-700 uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              Who Benefits
            </div>
            
            {/* Heading */}
            <h2 className="section-heading text-slate-900 mb-5 font-black tracking-tight">
              Who Can <span className="gradient-text">Benefit?</span>
            </h2>
            
            {/* Description */}
            <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 font-medium">
              Our portable X-Ray service is designed to help anyone who finds it difficult, painful, or risky to travel to a hospital or diagnostic center.
            </p>

            {/* Glassmorphic Benefit Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {siteConfig.benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3.5 px-5 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:border-teal-500/20 hover:shadow-[0_12px_25px_rgba(13,148,136,0.04)] hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-lg bg-teal-50 flex items-center justify-center border border-teal-100/50 group-hover:scale-105 transition-transform shrink-0">
                    <CheckCircle2 size={14} className="text-teal-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 leading-snug">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <a href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4.5 rounded-2xl font-extrabold text-white bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-xl shadow-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/30 transition-all text-sm active:scale-[0.98]"
            >
              Book an Appointment
            </a>
          </motion.div>

          {/* Right Column: Custom Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }} 
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }} 
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing background halo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/5 to-sky-400/5 rounded-[2.5rem] blur-2xl pointer-events-none" />

            {/* Main Image Frame with double borders */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl shadow-slate-300/40 aspect-[4/5] max-h-[520px] z-10">
              <img src="/who_benefits.png"
                alt="Patient receiving certified home portable X-ray diagnostics in comfort"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>

            {/* Decorative offset border ring */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-teal-200/30 to-sky-200/30 border border-white/50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
