"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { 
  ArrowRight, 
  Stethoscope, 
  HeartPulse, 
  Layers, 
  Move, 
  Grid, 
  Shield, 
  Orbit, 
  Activity, 
  Compass, 
  ClipboardCheck 
} from "lucide-react";

const serviceIcons: Record<string, React.ComponentType<any>> = {
  "chest": HeartPulse,
  "spine": Layers,
  "limb": Move,
  "pelvis": Grid,
  "hip": Shield,
  "shoulder": Orbit,
  "knee": Activity,
  "foot": Compass,
  "post-surgery": ClipboardCheck
};

const categories = [
  { id: "all", label: "All Scans" },
  { id: "chest-spine", label: "Chest & Spine" },
  { id: "limbs-joints", label: "Limbs & Joints" },
  { id: "specialized", label: "Specialized Care" }
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredServices = siteConfig.services.filter(service => {
    if (activeTab === "all") return true;
    if (activeTab === "chest-spine") return ["chest", "spine"].includes(service.id);
    if (activeTab === "limbs-joints") return ["limb", "hip", "shoulder", "knee", "foot"].includes(service.id);
    if (activeTab === "specialized") return ["pelvis", "post-surgery"].includes(service.id);
    return true;
  });

  return (
    <section id="services" className="py-28 bg-slate-50/40 relative overflow-hidden">
      {/* Background graphic elements */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-teal-50/60 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-sky-50/50 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50/80 border border-teal-100/60 text-[10px] font-extrabold text-teal-700 uppercase tracking-widest mb-5"
          >
            <Stethoscope size={12} className="text-teal-600 animate-pulse" />
            Our Services
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.05 }} 
            className="section-heading text-slate-900 mb-4 font-black tracking-tight"
          >
            Comprehensive <span className="gradient-text">X-Ray Services</span> at Home
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} 
            className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-medium"
          >
            Full-range digital imaging for various medical needs, performed safely and professionally at your home.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 max-w-2xl mx-auto">
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-6 py-3 rounded-full text-xs font-black tracking-wide transition-all duration-300 active:scale-95 ${
                  isActive 
                    ? "text-white shadow-lg shadow-teal-500/15" 
                    : "text-slate-500 hover:text-slate-800 bg-white border border-slate-100 hover:border-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-teal-500 to-sky-500 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid with Framer Motion layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = serviceIcons[service.id] || Stethoscope;
              const isTeal = index % 2 === 0;

              const glowColor = isTeal ? "rgba(20, 184, 166, 0.4)" : "rgba(14, 165, 233, 0.4)";
              const hoverBorder = isTeal ? "hover:border-teal-500/20" : "hover:border-sky-500/20";
              const iconColor = isTeal ? "text-teal-600" : "text-sky-500";
              const iconBg = isTeal ? "bg-teal-50/60 border-teal-100/50" : "bg-sky-50/60 border-sky-100/50";
              const highlightGlow = isTeal ? "from-teal-500/[0.015] to-transparent" : "from-sky-500/[0.015] to-transparent";

              return (
                <motion.div 
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  {/* Glowing radial backdrop shadow */}
                  <div 
                    className="absolute inset-4 rounded-[2rem] blur-2xl opacity-0 pointer-events-none transition-all duration-500"
                    style={{
                      background: glowColor,
                      opacity: hoveredIndex === index ? 0.4 : 0,
                      transform: hoveredIndex === index ? "translateY(12px) scale(0.95)" : "translateY(0px) scale(0.9)",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  />

                  {/* Premium Asymmetric Rounded Card */}
                  <div 
                    className={`group relative h-full bg-gradient-to-b from-white to-slate-50 border border-slate-100/80 rounded-[2rem] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.01)] ${hoverBorder} hover:shadow-[0_25px_50px_rgba(0,0,0,0.04)] hover:bg-white transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer min-h-[250px]`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      transform: hoveredIndex === index ? "translateY(-6px)" : "translateY(0px)",
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    {/* Hover color wash */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${highlightGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />
                    
                    <div>
                      {/* Icon & Index Row */}
                      <div className="relative flex items-center justify-between mb-6">
                        {/* Circular Icon badge */}
                        <div className={`w-14 h-14 rounded-full ${iconBg} border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                          <IconComponent size={24} className={`${iconColor}`} />
                        </div>
                        
                        {/* Numeric Indicator */}
                        <span className="text-[11px] font-black text-slate-350 tracking-tight font-heading">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-black text-slate-800 group-hover:text-teal-950 mb-2.5 transition-colors">
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs text-slate-400 group-hover:text-slate-500 leading-relaxed mb-6 transition-colors font-semibold">
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* request Footer booking link */}
                    <div className="flex items-center gap-2 text-xs font-black text-teal-600 group-hover:text-teal-700 mt-auto pt-4 border-t border-slate-100/60 transition-colors">
                      <span>Request Booking</span>
                      <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
