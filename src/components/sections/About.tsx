"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = ["No Hospital Queues", "Advanced Digital Machines", "Strict Hygiene Protocols", "Friendly Certified Staff"];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-teal-50/60 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-teal-500/10 border-4 border-white aspect-[4/3]">
              <img src="/about_xray_service.png"
                alt="Certified radiographer performing portable X-ray at patient's home"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 to-transparent" />
            </div>

            {/* Stats pill */}
            <div className="absolute -bottom-5 left-6 right-6 glass-card rounded-2xl p-4 shadow-xl border border-white/80 flex gap-6 justify-around">
              {[["500+", "Patients Served"], ["24h", "Report Delivery"], ["7×", "Days a Week"]].map(([num, label]) => (
                <div key={label} className="text-center">
                  <p className="text-xl font-extrabold gradient-text leading-none">{num}</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">{label}</p>
                </div>
              ))}
            </div>

            {/* Decorative bg block */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-2/3 h-2/3 rounded-[2rem] bg-gradient-to-br from-teal-100 to-sky-100 opacity-60" />
          </motion.div>

          {/* Text side */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs font-bold text-teal-700 uppercase tracking-widest mb-6">
              About Us
            </div>
            <h2 className="section-heading mb-6 text-slate-900">
              Healthcare Made <span className="gradient-text">Comfortable</span>
            </h2>
            <div className="space-y-4 text-slate-500 text-lg leading-relaxed mb-10">
              <p>Our Home X-Ray Service brings advanced portable digital radiography directly to your home. Whether recovering after surgery, caring for elderly family members, or unable to travel — we deliver safe, accurate, and hygienic imaging without a hospital visit.</p>
              <p>We follow strict infection control protocols and use modern portable digital X-ray machines to ensure high-quality imaging and quick report delivery.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 size={20} className="text-teal-600 shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
