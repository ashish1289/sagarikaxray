"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const ServiceAreas = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-sky-100/70 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-xs font-bold text-sky-700 uppercase tracking-widest mb-5">
              <Navigation size={12} /> Service Coverage
            </div>
            <h2 className="section-heading text-slate-900 mb-5">
              Areas We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Currently providing quick and reliable home X-Ray services across Odisha's major cities and nearby areas. Expanding coverage soon!
            </p>

            <div className="flex flex-wrap gap-3">
              {siteConfig.areas.map((area, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm shadow-sm border transition-colors ${
                    i < 4
                      ? "bg-white text-teal-700 border-teal-200 hover:border-teal-400 hover:bg-teal-50"
                      : "bg-slate-100 text-slate-500 border-slate-200 hover:border-slate-300"
                  }`}>
                  <MapPin size={14} className={i < 4 ? "text-teal-600" : "text-slate-400"} />
                  {area}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:w-1/2 w-full">
            <div className="relative bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden" style={{ height: "360px" }}>
              {/* Placeholder for map or illustration */}
              <div className="w-full h-full bg-gradient-to-br from-teal-50 via-sky-50 to-slate-50 flex flex-col items-center justify-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-100 to-sky-100 border-4 border-white shadow-lg flex items-center justify-center">
                  <Navigation size={40} className="text-teal-600" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-800 text-lg">Bhubaneswar & Beyond</p>
                  <p className="text-slate-500 text-sm mt-1">Odisha's Premier Home X-Ray Service</p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center px-4">
                  {siteConfig.areas.slice(0, 4).map(a => (
                    <span key={a} className="px-3 py-1 text-xs font-semibold text-teal-700 bg-teal-100 rounded-full">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
