"use client";

import { motion } from "framer-motion";
import { Phone, MapPinned, Stethoscope, Building2 } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "You call",
    desc: "Reach our 24/7 dispatch desk — answered in under 20 seconds.",
  },
  {
    icon: MapPinned,
    title: "We dispatch",
    desc: "Nearest available unit is routed to your location via GPS.",
  },
  {
    icon: Stethoscope,
    title: "We stabilize",
    desc: "Onboard paramedics begin care the moment they reach you.",
  },
  {
    icon: Building2,
    title: "We arrive",
    desc: "Direct handoff to a pre-alerted hospital or care facility.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesProcess() {
  return (
    <section className="py-16 md:py-24 bg-navy-50/60 border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center mb-14"
        >
          <p className="text-maroon-700 font-semibold tracking-widest uppercase text-xs mono">
            How it works
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-900 mt-3">
            From call to care, in four steps
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} variants={item} className="relative">
              <div className="bg-white border border-navy-100 rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-2xl text-navy-100 mono">
                    0{i + 1}
                  </span>
                  <div className="h-10 w-10 rounded-lg bg-maroon-50 text-maroon-700 flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-xl text-navy-900 mt-4">
                  {title}
                </h3>
                <p className="text-navy-700/70 text-sm mt-1.5 leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}