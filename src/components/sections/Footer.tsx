import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Activity, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 group mb-6 w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-teal-900/50">
                <Activity size={20} className="text-white" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                Home<span className="text-teal-400">X-Ray</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-xs mb-6 text-sm leading-relaxed">
              Professional portable digital X-Ray services at your doorstep. Fast, reliable, and comfortable — without leaving home.
            </p>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-slate-400">
                <Phone size={14} className="text-teal-500 shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail size={14} className="text-teal-500 shrink-0" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin size={14} className="text-teal-500 shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 6).map(service => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 pb-20 md:pb-0">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
