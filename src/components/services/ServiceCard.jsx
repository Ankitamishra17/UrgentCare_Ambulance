"use client";

import { motion } from "framer-motion";
import {
  Zap,
  HeartPulse,
  Truck,
  Users,
  Home,
  Flower2,
  Check,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";

const ICONS = { Zap, HeartPulse, Truck, Users, Home, Flower2 };

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon] || Zap;

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative bg-white border border-navy-100 rounded-2xl p-7 flex flex-col overflow-hidden hover:border-navy-700 hover:shadow-2xl hover:shadow-navy-900/10 transition-colors duration-300"
    >
      {/* Decorative corner glow, appears on hover */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-maroon-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-start justify-between">
        <motion.div
          whileHover={{ rotate: -8, scale: 1.08 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="h-12 w-12 rounded-xl bg-maroon-50 text-maroon-700 flex items-center justify-center group-hover:bg-maroon-700 group-hover:text-bone transition-colors duration-300"
        >
          <Icon className="h-6 w-6" strokeWidth={1.7} />
        </motion.div>
        <span className="flex items-center gap-1.5 text-xs font-medium text-navy-700/60 mono bg-navy-50 px-2.5 py-1 rounded-full">
          <Clock className="h-3.5 w-3.5" />
          {service.responseTime}
        </span>
      </div>

      <h3 className="relative font-display font-semibold text-2xl text-navy-900 mt-5">
        {service.title}
      </h3>
      <p className="relative text-maroon-700 text-sm font-medium mt-0.5">
        {service.tagline}
      </p>
      <p className="relative text-navy-700/70 text-sm mt-3 leading-relaxed">
        {service.desc}
      </p>

      <motion.ul
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="relative mt-5 space-y-2.5 flex-1"
      >
        {service.features.map((f) => (
          <motion.li
            key={f}
            variants={listItem}
            className="flex gap-2.5 text-sm text-navy-900/80"
          >
            <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-full bg-navy-50 text-navy-700 flex items-center justify-center">
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
            </span>
            {f}
          </motion.li>
        ))}
      </motion.ul>

      <a
        href="tel:+919540767878"
        className="relative mt-6 inline-flex items-center justify-center gap-2 border border-navy-100 group-hover:border-navy-700 bg-navy-50/0 hover:bg-navy-700 text-navy-900 hover:text-bone font-medium text-sm rounded-md py-2.5 transition-all duration-300"
      >
        <Phone className="h-4 w-4" />
        Request this service
        <ArrowRight className="h-3.5 w-3.5 -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
      </a>
    </motion.div>
  );
}