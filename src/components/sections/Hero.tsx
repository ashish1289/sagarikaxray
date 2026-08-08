"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, FileText, Clock, CalendarDays, Phone, Calendar as CalendarIcon, Zap, Star } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  };

  const badges = [
    { icon: ShieldCheck, label: "Doctor Recommended" },
    { icon: FileText, label: "Digital Reports" },
    { icon: Clock, label: "Same-Day Service" },
    { icon: CalendarDays, label: "Available 7 Days" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient pt-24 pb-16">
      {/* Decorative circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-50 to-sky-50 border border-teal-200/60 text-sm font-semibold text-teal-700 mb-8 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              Now Available in Bhubaneswar & Cuttack
            </motion.div>

            <motion.h1 variants={itemVariants}
              className="font-heading text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-[-0.04em] mb-6 text-slate-900">
              Professional{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Home X-Ray</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 100 1 150 3C200 5 250 8 298 6" stroke="url(#underlineGrad)" strokeWidth="3" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="underlineGrad" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#0d9488"/>
                      <stop offset="1" stopColor="#0ea5e9"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {" "}Service at Your Doorstep
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Digital Portable X-Ray by Certified Radiographers. Safe, fast, and affordable — at home for patients who cannot visit a diagnostic center.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href={`tel:${siteConfig.phone}`}
                className="group flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-semibold text-white bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 active:scale-95 text-base">
                <Phone size={20} className="group-hover:animate-pulse" />
                Call Now
              </a>
              <a href="#contact"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-semibold text-teal-700 bg-white hover:bg-teal-50 border-2 border-teal-200 hover:border-teal-400 shadow-lg shadow-slate-200/50 transition-all duration-300 active:scale-95 text-base">
                <CalendarIcon size={20} />
                Schedule Appointment
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/70 border border-slate-100 shadow-sm text-center">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center">
                    <Icon size={16} className="text-teal-700" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 leading-tight">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image Card */}
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block">
            
            {/* Main image */}
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl shadow-slate-400/20 aspect-[4/5] max-h-[600px]">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85"
                alt="Certified radiographer performing portable X-ray at patient's home"
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-8 top-1/3 glass-card rounded-2xl p-4 shadow-xl w-44">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
                  <Zap size={20} className="text-teal-700" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-slate-900 leading-none">Fast</p>
                  <p className="text-xs text-slate-500">Reports</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium">Digital reports in hours</p>
            </motion.div>

            {/* Rating card */}
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -right-4 bottom-16 glass-card rounded-2xl p-4 shadow-xl w-48">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-xs font-semibold text-slate-800 mb-1">"Excellent home service!"</p>
              <p className="text-[10px] text-slate-500">— Verified Patient</p>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-[2rem] bg-gradient-to-br from-teal-200/40 to-sky-200/40 border-2 border-white/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
