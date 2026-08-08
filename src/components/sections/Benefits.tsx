"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { CheckCircle2 } from "lucide-react";

export const Benefits = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text + benefit list */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-6">
              Who Benefits
            </div>
            <h2 className="section-heading text-slate-900 mb-5">
              Who Can <span className="gradient-text">Benefit?</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Our portable X-Ray service is designed to help anyone who finds it difficult, painful, or risky to travel to a hospital or diagnostic center.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {siteConfig.benefits.map((benefit, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-50 to-transparent border border-teal-100/60">
                  <CheckCircle2 size={18} className="text-teal-600 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all text-sm active:scale-95">
              Book an Appointment
            </a>
          </motion.div>

          {/* Right: Image */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-500/10 border-4 border-white aspect-[4/5] max-h-[550px]">
              <img src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&w=800&q=85"
                alt="Patient receiving care at home"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-3/4 h-3/4 rounded-[2.5rem] bg-gradient-to-br from-teal-100 to-sky-100 opacity-60" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
