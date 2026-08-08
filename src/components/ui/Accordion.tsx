"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  items: { q: string; a: string }[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}
            className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
              isOpen ? "border-teal-200 shadow-md shadow-teal-500/8 bg-white" : "border-slate-100 bg-white hover:border-slate-200"
            }`}>
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-2xl"
            >
              <span className={`font-semibold text-base leading-snug ${isOpen ? "text-teal-700" : "text-slate-800"}`}>
                {item.q}
              </span>
              <div className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                isOpen ? "bg-teal-100 text-teal-600" : "bg-slate-100 text-slate-500"
              }`}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                  <div className="px-6 pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-3">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
