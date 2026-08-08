"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  { rating: 5, text: "The radiographer arrived on time and the entire process was smooth. My father could get his X-Ray without leaving bed. Highly recommended!", author: "Priya S.", role: "Patient Family, Bhubaneswar" },
  { rating: 5, text: "Excellent service for elderly patients who cannot travel. The team was very professional, polite, and followed all safety protocols.", author: "Ramesh K.", role: "Satisfied Customer, Cuttack" },
  { rating: 5, text: "Received digital reports the same day on WhatsApp. Very convenient and more affordable than I expected. Will use again!", author: "Anjali M.", role: "Local Resident, Khordha" },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-96 h-96 bg-teal-50/80 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-xs font-bold text-amber-700 uppercase tracking-widest mb-5">
            <Star size={12} className="fill-amber-500 text-amber-500" /> Patient Reviews
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-heading text-slate-900 mb-4">
            What Patients <span className="gradient-text">Say About Us</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.12 }}>
              <div className="relative h-full bg-gradient-to-br from-white to-slate-50 rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-teal-500/8 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
                {/* Large quote icon */}
                <Quote size={64} className="absolute -top-2 -right-2 text-teal-50 group-hover:text-teal-100 transition-colors" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-5 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-600 italic leading-relaxed mb-6 relative z-10">"{review.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3 relative z-10 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-teal-500/25">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                    <p className="text-xs text-slate-400">{review.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
