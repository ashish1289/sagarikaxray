"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Stethoscope } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute left-0 top-0 w-80 h-80 bg-teal-50/70 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-bold text-sky-700 uppercase tracking-widest mb-5">
            <Stethoscope size={13} /> Our Services
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-heading text-slate-900 mb-4">
            Comprehensive <span className="gradient-text">X-Ray Services</span> at Home
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-slate-500 text-lg">
            Full-range digital imaging for various medical needs, performed safely and professionally at your home.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.services.map((service, index) => (
            <motion.div key={service.id}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }} transition={{ duration: 0.45, delay: index * 0.06 }}>
              <div className="group relative h-full bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-200 transition-all duration-300 overflow-hidden cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-sky-500/0 group-hover:from-teal-500/3 group-hover:to-sky-500/3 transition-all duration-500 rounded-3xl" />
                
                <div className="relative flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
                    <Stethoscope size={20} className="text-teal-600" />
                  </div>
                  <span className="text-xs font-bold text-slate-300 group-hover:text-teal-400 transition-colors">0{index + 1}</span>
                </div>
                
                <h3 className="text-base font-bold text-slate-800 group-hover:text-teal-700 mb-2 transition-colors">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.desc}</p>
                
                <a href="#contact" className="inline-flex items-center text-xs font-bold text-teal-600 hover:text-teal-700 gap-1 group/link">
                  Book Now
                  <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
