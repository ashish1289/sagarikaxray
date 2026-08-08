"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Calendar, Home, Scan, ClipboardCheck, Share2 } from "lucide-react";

const stepIcons = [PhoneCall, Calendar, Home, Scan, ClipboardCheck, Share2];

const stepsData = [
  {
    step: "01",
    tag: "BOOKING",
    title: "Call or Book Online",
    desc: "Contact us to schedule your visit.",
    glowColor: "rgba(20, 184, 166, 0.4)", // Teal
    textColor: "text-teal-600",
  },
  {
    step: "02",
    tag: "SCHEDULING",
    title: "Choose Time",
    desc: "Pick a slot that suits your convenience.",
    glowColor: "rgba(14, 165, 233, 0.4)", // Sky Blue
    textColor: "text-sky-500",
  },
  {
    step: "03",
    tag: "HOME VISIT",
    title: "Radiographer Visit",
    desc: "Our technician arrives with the portable machine.",
    glowColor: "rgba(20, 184, 166, 0.4)", // Teal
    textColor: "text-teal-600",
  },
  {
    step: "04",
    tag: "DIGITAL X-RAY",
    title: "X-Ray Performed",
    desc: "Safe and quick imaging process in your room.",
    glowColor: "rgba(14, 165, 233, 0.4)", // Sky Blue
    textColor: "text-sky-500",
  },
  {
    step: "05",
    tag: "DIAGNOSIS",
    title: "Doctor Reviews",
    desc: "Expert quality check and diagnostic report.",
    glowColor: "rgba(20, 184, 166, 0.4)", // Teal
    textColor: "text-teal-600",
  },
  {
    step: "06",
    tag: "DELIVERY",
    title: "Report Delivered",
    desc: "Fast delivery via email or WhatsApp.",
    glowColor: "rgba(14, 165, 233, 0.4)", // Sky Blue
    textColor: "text-sky-500",
  }
];

export const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-28 relative overflow-hidden bg-white">
      {/* Background Ornaments */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-teal-50/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-50/20 blur-[120px]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-[10px] font-extrabold text-teal-700 uppercase tracking-widest mb-5"
          >
            <span className="w-1 h-1 rounded-full bg-teal-500 animate-pulse" />
            Simple Process
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.05 }} 
            className="section-heading text-slate-900 mb-4 font-black tracking-tight"
          >
            How It <span className="gradient-text">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }} 
            className="text-slate-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            From booking to report delivery — seamless, fast, and transparent.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative min-h-[460px] flex items-center">
          
          {/* Desktop Connecting Zigzag Line */}
          <div className="hidden lg:block absolute inset-x-0 top-[104px] h-[112px] z-0 pointer-events-none">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Thick background line */}
              <path 
                d="M 8.33,0 L 25,100 L 41.67,0 L 58.33,100 L 75,0 L 91.67,100" 
                fill="none" 
                stroke="#f1f5f9" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-0.5 bg-slate-100 z-0 pointer-events-none" />

          {/* Steps Grid */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-6 gap-16 lg:gap-4 relative z-10 pt-20 lg:pt-28 items-start">
            {stepsData.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isOdd = index % 2 === 0;

              return (
                <div 
                  key={step.step}
                  className={`relative flex flex-col items-center group transition-all duration-500 ${
                    isOdd ? "lg:-translate-y-14" : "lg:translate-y-14"
                  }`}
                >
                  {/* Floating Upright Bold Step Number */}
                  <span className={`absolute top-[-38px] left-[15%] text-4xl font-heading font-black italic tracking-tighter ${step.textColor} opacity-90 group-hover:scale-110 transition-transform select-none`}>
                    {step.step}
                  </span>

                  {/* Isometric 3D Card Container */}
                  <div 
                    className="relative w-24 h-24 mb-6 flex items-center justify-center cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Shadow Glow under card */}
                    <div 
                      className="absolute inset-1 rounded-2xl blur-xl opacity-60 pointer-events-none"
                      style={{
                        transform: "translateY(16px) scale(0.9)",
                        background: step.glowColor,
                        filter: "blur(14px)",
                        opacity: hoveredIndex === index ? 0.95 : 0.6,
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                    />
                    
                    {/* 3D Tilted Card */}
                    <div 
                      className="absolute inset-0 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-[0_8px_16px_rgba(0,0,0,0.03)]"
                      style={{
                        transform: hoveredIndex === index 
                          ? "perspective(500px) rotateX(55deg) rotateZ(-45deg) translateZ(12px)" 
                          : "perspective(500px) rotateX(55deg) rotateZ(-45deg) translateZ(0px)",
                        boxShadow: hoveredIndex === index
                          ? "0 20px 30px rgba(0,0,0,0.06), inset 0 2px 2px rgba(255,255,255,0.8)"
                          : "0 8px 16px rgba(0,0,0,0.02), inset 0 2px 2px rgba(255,255,255,0.8)",
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                    >
                      <Icon size={24} className="text-slate-600 transition-colors" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <span className={`text-[10px] font-extrabold tracking-widest uppercase mb-2 ${step.textColor}`}>
                    {step.tag}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-800 mb-1.5 text-center group-hover:text-slate-900 transition-colors max-w-[140px]">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed text-center max-w-[130px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
