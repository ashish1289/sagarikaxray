import React from "react";
import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3"
      style={{ background: "linear-gradient(to top, rgba(255,255,255,0.98), rgba(255,255,255,0.92))", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(226,232,240,0.8)" }}>
      <div className="flex gap-3 safe-area-inset-bottom">
        <a href={`tel:${siteConfig.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-sky-700 bg-sky-50 border-2 border-sky-200 active:scale-95 transition-transform shadow-sm">
          <Phone size={17} />
          Call Now
        </a>
        <a href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg shadow-teal-500/30 active:scale-95 transition-transform">
          <Calendar size={17} />
          Book Appointment
        </a>
      </div>
    </div>
  );
};
