"use client";

import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/Accordion";
import { siteConfig } from "@/data/siteConfig";
import { HelpCircle } from "lucide-react";

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Heading */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs font-bold text-teal-700 uppercase tracking-widest mb-6">
              <HelpCircle size={12} /> FAQ
            </div>
            <h2 className="section-heading text-slate-900 mb-5">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Find answers to the most frequently asked questions about our home X-Ray services.
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white">
              <p className="font-bold text-lg mb-2">Still have questions?</p>
              <p className="text-white/70 text-sm mb-4">Our team is ready to help you anytime.</p>
              <a href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-teal-700 bg-white hover:bg-teal-50 text-sm transition-colors shadow-md">
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="lg:col-span-3">
            <Accordion items={siteConfig.faqs} />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
