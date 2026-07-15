"use client";

import { motion } from "framer-motion";
import { Target, Eye, Compass } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 text-maroon-700 font-semibold uppercase tracking-widest text-xs mono">
            <span className="h-1.5 w-1.5 rounded-full bg-maroon-700 animate-pulse" />
            Mission &amp; Vision
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy-900">
            Driven by care, guided by excellence
          </h2>

          <p className="mt-5 text-navy-700/70 leading-relaxed">
            Every emergency response we make is powered by our commitment to
            saving lives, supporting families, and providing world-class medical
            transportation services.
          </p>
        </motion.div>

        {/* Split panels joined by a center badge */}
        <div className="relative grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10">
          {/* Mission panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative bg-navy-900 text-bone p-10 md:p-14 overflow-hidden"
          >
            <Target
              className="absolute -right-8 -bottom-8 w-56 h-56 text-bone/[0.04]"
              strokeWidth={1}
            />
            <span className="text-xs font-semibold tracking-widest uppercase mono text-navy-100/50">
              01 &mdash; Purpose
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl mt-3">
              Our Mission
            </h3>
            <div className="w-12 h-0.5 bg-maroon-500 mt-4 mb-5" />
            <p className="text-navy-100/80 leading-relaxed relative">
              To provide fast, reliable, and professional emergency medical
              transportation services that save lives and ensure patient safety.
              We are committed to delivering compassionate care with highly
              trained medical staff and advanced ambulance facilities.
            </p>
          </motion.div>

          {/* Vision panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative bg-maroon-700 text-bone p-10 md:p-14 overflow-hidden"
          >
            <Eye
              className="absolute -right-8 -bottom-8 w-56 h-56 text-bone/[0.06]"
              strokeWidth={1}
            />
            <span className="text-xs font-semibold tracking-widest uppercase mono text-maroon-50/60">
              02 &mdash; Direction
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl mt-3">
              Our Vision
            </h3>
            <div className="w-12 h-0.5 bg-navy-300 mt-4 mb-5" />
            <p className="text-maroon-50/85 leading-relaxed relative">
              To become the most trusted ambulance service provider by setting
              the highest standards in emergency response, patient care, and
              medical transportation through innovation, technology, and
              excellence.
            </p>
          </motion.div>

          {/* Center joining badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "backOut" }}
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-bone shadow-xl items-center justify-center border-4 border-bone z-10"
          >
            <Compass className="h-7 w-7 text-navy-900" strokeWidth={1.7} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
