"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { PhoneCall, Calendar, Home, Scan, ClipboardCheck, Share2 } from "lucide-react";

const stepIcons = [PhoneCall, Calendar, Home, Scan, ClipboardCheck, Share2];
const stepColors = ["teal", "sky", "violet", "orange", "emerald", "teal"];

export const HowItWorks = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #f0f9ff 50%, #f8fafc 100%)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs font-bold text-teal-700 uppercase tracking-widest mb-5">
            Simple Process
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-heading text-slate-900 mb-4">
            How It <span className="gradient-text">Works</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-slate-500 text-lg">
            From booking to report delivery — seamless, fast, and transparent.
          </motion.p>
        </div>

        {/* Timeline steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%_-_0.5px)] right-[calc(16.67%_-_0.5px)] h-0.5 bg-gradient-to-r from-teal-200 via-sky-200 to-teal-200 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {siteConfig.howItWorks.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isLast = index === siteConfig.howItWorks.length - 1;
              return (
                <motion.div key={step.step}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <div className="relative flex flex-col items-center text-center group">
                    {/* Step circle */}
                    <div className="relative z-10 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-white border-2 ${isLast ? "border-teal-500 shadow-lg shadow-teal-500/25" : "border-slate-100"} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-teal-500/20 group-hover:border-teal-400 transition-all duration-300`}>
                        <Icon size={26} className="text-teal-600" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-sky-500 flex items-center justify-center text-white text-[10px] font-bold shadow-md">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
