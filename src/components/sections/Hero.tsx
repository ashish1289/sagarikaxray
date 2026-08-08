"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, FileText, Clock, CalendarDays, Phone, Calendar as CalendarIcon, Zap, Star } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const badges = [
    { icon: ShieldCheck, label: "Doctor Recommended", bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100" },
    { icon: FileText, label: "Digital Reports", bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-100" },
    { icon: Clock, label: "Same-Day Service", bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
    { icon: CalendarDays, label: "Available 7 Days", bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient pt-28 pb-20">
      {/* Dynamic graphic glow blobs */}
      <div className="absolute top-20 right-[15%] w-80 h-80 bg-teal-300/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-sky-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Grid Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #0f766e 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Rebranded text & details */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="visible"
            className="lg:col-span-7 text-left"
          >
            {/* Location pill */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-teal-200/50 text-xs font-extrabold text-teal-700 mb-8 shadow-sm"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              Now Available in Bhubaneswar & Cuttack
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-black leading-[1.1] sm:leading-[1.08] tracking-tight mb-6 text-slate-900"
            >
              Professional{" "}
              <span className="relative inline-block">
                <span className="gradient-text font-black">
                  Sagarika Home <span className="whitespace-nowrap">X-Ray</span>
                </span>
                <svg className="absolute -bottom-2.5 left-0 w-full overflow-visible hidden sm:block" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 100 1 150 3C200 5 250 8 298 6" stroke="url(#underlineGrad)" strokeWidth="3.5" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underlineGrad" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#14b8a6"/>
                      <stop offset="1" stopColor="#0ea5e9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {" "}at Your Bedside
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants} 
              className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-xl font-medium"
            >
              Skip the travel and hospital queues. We bring advanced digital portable X-ray technology and certified radiographers directly to your bedside, delivering high-resolution imaging and signed reports within hours.
            </motion.p>

            {/* CTA Actions */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href={`tel:${siteConfig.phone}`}
                className="group flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl font-extrabold text-white bg-gradient-to-br from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 shadow-xl shadow-teal-500/20 hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 active:scale-[0.98] text-sm"
              >
                <Phone size={18} className="group-hover:animate-pulse" />
                Call Now
              </a>
              <a href="#contact"
                className="flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-2xl font-extrabold text-teal-700 bg-white hover:bg-teal-50 border border-teal-200 hover:border-teal-400 shadow-md shadow-slate-100 transition-all duration-300 active:scale-[0.98] text-sm"
              >
                <CalendarIcon size={18} />
                Schedule Appointment
              </a>
            </motion.div>

            {/* Feature Cards Grid */}
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {badges.map(({ icon: Icon, label, bg, text, border }) => (
                <div 
                  key={label} 
                  className="flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 hover:bg-white hover:border-teal-500/20 hover:shadow-[0_15px_30px_rgba(13,148,136,0.06)] hover:-translate-y-1 transition-all duration-300 text-center cursor-default group"
                >
                  <div className={`w-9 h-9 rounded-xl ${bg} ${text} ${border} border flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon size={18} strokeWidth={2.5} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700 leading-tight">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image container with decorative overlays */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Glowing background halo */}
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/10 to-sky-400/10 rounded-[2.5rem] blur-2xl pointer-events-none" />

            {/* Main Image Frame with double borders */}
            <div className="relative rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-2xl shadow-slate-300/40 aspect-[4/5] max-h-[580px] z-10">
              <img src="/portable_xray_hero.png"
                alt="Certified radiographer performing portable X-ray at patient's home"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating stats card (Left side) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-10 top-[28%] backdrop-blur-md bg-white/75 border border-white/60 rounded-2xl p-4 shadow-2xl w-44 z-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-teal-50 border border-teal-100 rounded-xl flex items-center justify-center">
                  <Zap size={18} className="text-teal-600" />
                </div>
                <div>
                  <p className="text-sm font-extrabold text-slate-800 leading-none">Same Day</p>
                  <p className="text-[10px] text-slate-400 font-bold mt-1">Reports</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">High-resolution reports delivered in hours</p>
            </motion.div>

            {/* Rating card (Right side) */}
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.8 }}
              className="absolute -right-6 bottom-[18%] backdrop-blur-md bg-white/75 border border-white/60 rounded-2xl p-4 shadow-2xl w-48 z-20"
            >
              <div className="flex gap-0.5 mb-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-xs font-extrabold text-slate-800 mb-1 leading-snug">"Highly professional home service!"</p>
              <p className="text-[9px] text-slate-400 font-bold">— Verified Patient</p>
            </motion.div>

            {/* Decorative offset border ring */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-teal-200/30 to-sky-200/30 border border-white/50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
