"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="relative py-16 md:py-24 overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-20 -left-24 w-72 h-72 bg-navy-50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 -right-24 w-72 h-72 bg-maroon-50 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center mb-14"
        >
          <p className="inline-flex items-center gap-2 text-maroon-700 font-semibold tracking-widest uppercase text-xs mono">
            <span className="h-1.5 w-1.5 rounded-full bg-maroon-700 animate-pulse" />
            Full range
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-900 mt-3">
            Six ways we can help
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}