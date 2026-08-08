"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { Award, Monitor, Shield, Zap, Home, BadgeIndianRupee } from "lucide-react";

const iconMap = [Award, Monitor, Shield, Zap, Home, BadgeIndianRupee];
const iconColors = [
  "from-teal-400 to-teal-600",
  "from-sky-400 to-sky-600",
  "from-emerald-400 to-emerald-600",
  "from-violet-400 to-violet-600",
  "from-orange-400 to-orange-500",
  "from-rose-400 to-rose-500",
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2314b8a6%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs font-bold text-teal-700 uppercase tracking-widest mb-5">
            Why Choose Us
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-heading text-slate-900 mb-4">
            The Gold Standard in <span className="gradient-text">Home Diagnostics</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-slate-500 text-lg">
            We deliver a seamless, safe, and professional diagnostic experience right at your doorstep.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, index) => {
            const Icon = iconMap[index % iconMap.length];
            const grad = iconColors[index % iconColors.length];
            return (
              <motion.div key={index}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }} transition={{ duration: 0.5, delay: index * 0.08 }}>
                <div className="relative h-full bg-white rounded-3xl p-7 border border-slate-100 shadow-sm card-hover group overflow-hidden">
                  {/* Subtle bg accent */}
                  <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${grad} opacity-5 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
