"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  HeartPulse,
  MapPinned,
  Users,
  Ambulance,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "24/7 Emergency Response",
    description:
      "Round-the-clock ambulance dispatch with rapid response times across the city, so help is never more than a call away.",
    span: "lg:col-span-2 lg:row-span-2",
    style: "bg-navy-900 text-bone",
    iconBg: "bg-bone/10",
    iconColor: "text-maroon-300",
    featured: true,
  },
  {
    icon: HeartPulse,
    title: "Advanced Life Support",
    description:
      "ICU-grade medical equipment and oxygen support on every unit.",
    span: "lg:col-span-2",
    style: "bg-maroon-700 text-bone",
    iconBg: "bg-bone/10",
    iconColor: "text-bone",
  },
  {
    icon: ShieldCheck,
    title: "Certified Paramedics",
    description: "Experienced medical professionals in every ambulance.",
    span: "lg:col-span-1",
    style: "bg-white text-navy-900 border border-navy-100",
    iconBg: "bg-maroon-50",
    iconColor: "text-maroon-700",
  },
  {
    icon: MapPinned,
    title: "GPS Tracking",
    description: "Real-time tracking and optimized routes.",
    span: "lg:col-span-1",
    style: "bg-white text-navy-900 border border-navy-100",
    iconBg: "bg-maroon-50",
    iconColor: "text-maroon-700",
  },
  {
    icon: Users,
    title: "Trusted by Families",
    description:
      "Thousands of successful emergency transfers and patient transport services across Delhi NCR.",
    span: "lg:col-span-2",
    style: "bg-navy-50 text-navy-900 border border-navy-100",
    iconBg: "bg-navy-700",
    iconColor: "text-bone",
  },
  {
    icon: Ambulance,
    title: "Modern Fleet",
    description:
      "Well-maintained ambulances equipped for emergency, ICU, and patient transfer services.",
    span: "lg:col-span-2",
    style: "bg-white text-navy-900 border border-navy-100",
    iconBg: "bg-maroon-50",
    iconColor: "text-maroon-700",
  },
];

const stats = [
  ["10+", "Years Experience"],
  ["120+", "Ambulances"],
  ["24/7", "Support"],
  ["5,000+", "Patients Served"],
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-maroon-700 font-semibold tracking-widest uppercase text-xs mono">
            <span className="h-1.5 w-1.5 rounded-full bg-maroon-700 animate-pulse" />
            Why Choose Us
          </span>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl text-navy-900">
            Trusted emergency care when every second matters
          </h2>
          <p className="mt-4 text-navy-700/70 text-lg leading-relaxed">
            We combine rapid response, experienced medical teams, and advanced
            ambulance technology to provide dependable emergency care.
          </p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-5 mt-14"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl p-7 overflow-hidden flex flex-col ${f.span} ${f.style} ${
                  f.featured ? "justify-between min-h-[280px] lg:min-h-0" : ""
                }`}
              >
                {f.style.includes("navy-900") && (
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                )}

                <div
                  className={`relative h-12 w-12 rounded-xl ${f.iconBg} flex items-center justify-center mb-5 ${
                    f.featured ? "h-14 w-14" : ""
                  }`}
                >
                  <Icon
                    className={`${f.featured ? "h-7 w-7" : "h-6 w-6"} ${f.iconColor}`}
                  />
                </div>

                <div className="relative">
                  <h3
                    className={`font-display font-semibold leading-snug ${
                      f.featured ? "text-2xl sm:text-3xl" : "text-lg"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed ${
                      f.featured
                        ? "text-sm opacity-80 max-w-xs"
                        : "text-sm opacity-70"
                    }`}
                  >
                    {f.description}
                  </p>
                </div>

                {f.featured && (
                  <div className="relative flex items-center gap-2 mt-6 text-maroon-300 text-sm font-semibold mono">
                    ACTIVE 24/7/365
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10"
        >
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 text-center border border-navy-100"
            >
              <h3 className="font-display font-bold text-3xl text-maroon-700">
                {value}
              </h3>
              <p className="text-navy-700/60 text-sm mt-2">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
