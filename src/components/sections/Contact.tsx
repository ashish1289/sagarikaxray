"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1000);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone / WhatsApp", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Service Area", value: siteConfig.address, href: "#" },
    { icon: Clock, label: "Working Hours", value: siteConfig.workingHours, href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-50/80 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-xs font-bold text-teal-700 uppercase tracking-widest mb-5">
            Book Now
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="section-heading text-slate-900 mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-slate-500 text-lg">
            Fill in your details and we'll confirm your home visit within minutes.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">

          {/* Contact Info Sidebar */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2 flex flex-col gap-4">
            
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 group transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-teal-100 group-hover:bg-teal-200 flex items-center justify-center shrink-0 transition-colors">
                  <Icon size={20} className="text-teal-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="font-semibold text-slate-800 text-sm leading-relaxed">{value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-2xl font-bold text-white bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/25 transition-all active:scale-95">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Booking Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
              {formStatus === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-teal-50 border-4 border-teal-100 flex items-center justify-center mb-2">
                    <CheckCircle2 size={40} className="text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Booking Confirmed!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">Our team will contact you shortly to confirm your home visit.</p>
                  <button onClick={() => setFormStatus("idle")}
                    className="mt-4 px-6 py-3 rounded-xl font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 transition-colors text-sm">
                    Book Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Appointment Details</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input required type="text" className="input-modern" placeholder="e.g. Ravi Sharma" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                      <input required type="tel" className="input-modern" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">X-Ray Type</label>
                      <select className="input-modern">
                        <option value="">Select type...</option>
                        {siteConfig.services.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Preferred Date</label>
                      <input type="date" className="input-modern" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Address *</label>
                    <textarea required rows={2} className="input-modern resize-none"
                      placeholder="Enter your complete home address..."></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Additional Message</label>
                    <textarea rows={2} className="input-modern resize-none"
                      placeholder="Any specific requirements or notes..."></textarea>
                  </div>
                  <button type="submit" disabled={formStatus === "submitting"}
                    className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/35 transition-all active:scale-[0.98] text-base disabled:opacity-70">
                    {formStatus === "submitting" ? "Submitting..." : "Confirm Appointment"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
