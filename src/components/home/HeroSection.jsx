"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "120+", label: "Ambulances" },
  { value: "24/7", label: "Availability" },
  { value: "45", label: "Hospital tie-ups" },
];

// Replace this with your own asset in /public, e.g. "/images/hero-ambulance.jpg"
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2000&auto=format&fit=crop";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-900 text-bone min-h-[92vh] flex items-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Overlay gradients for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/10 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 -mt-16 sm:px-8 py-20 md:py-28 relative grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 text-maroon-100 bg-maroon-900/50 backdrop-blur-sm border border-maroon-300/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mono">
            <span className="h-1.5 w-1.5 rounded-full bg-maroon-300 animate-pulse" />
            Avg. dispatch time &mdash; 8 min 40 sec
          </span>

          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-[4.2rem] leading-[0.98] mt-5 drop-shadow-sm">
            Every second
            <br /> counts.
            <span className="text-maroon-300"> We move first.</span>
          </h1>

          <p className="text-navy-100/85 text-lg mt-6 max-w-md leading-relaxed">
            ICU-equipped ambulances, trained paramedics, and hospital tie-ups
            across Delhi NCR &mdash; dispatched the moment you call.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="tel:+919540767878"
              className="dot-pulse inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-900 transition-colors px-7 py-3.5 rounded-md font-display font-semibold text-xl shadow-lg shadow-maroon-900/30"
            >
              <Phone className="h-5 w-5 relative z-10" />
              <span className="relative z-10">+91 9540767878</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bone/5 backdrop-blur-sm border border-navy-100/30 hover:border-bone/70 hover:bg-bone/10 transition-colors px-7 py-3.5 rounded-md font-medium text-base"
            >
              Book a Transport
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display font-bold text-3xl">{s.value}</p>
                <p className="text-xs text-navy-100/60 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="hidden md:block"
        >
          <div className="relative bg-navy-900/40 backdrop-blur-md border border-bone/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-navy-900/40">
            <div className="flex items-center gap-2 text-xs text-navy-100/60 mono mb-1">
              <ShieldCheck className="h-3.5 w-3.5 text-maroon-300" />
              VERIFIED DISPATCH FEED
            </div>

            <div className="h-24 overflow-hidden">
              <motion.svg
                className="h-full"
                width="200%"
                viewBox="0 0 1600 100"
                preserveAspectRatio="none"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              >
                <path
                  className="ecg-line"
                  d="M0 50 H120 L140 20 L160 80 L180 10 L200 50 H340 L360 20 L380 80 L400 10 L420 50 H560 L580 20 L600 80 L620 10 L640 50 H780 L800 50 L820 20 L840 80 L860 10 L880 50 H1020 L1040 20 L1060 80 L1080 10 L1100 50 H1240 L1260 20 L1280 80 L1300 10 L1320 50 H1460 L1480 20 L1500 80 L1520 10 L1540 50 H1600"
                />
              </motion.svg>
            </div>

            <div className="flex items-center justify-between mt-2 border-t border-bone/10 pt-5">
              <div>
                <p className="text-xs text-navy-100/60 mono">LIVE STATUS</p>
                <p className="font-display font-semibold text-2xl mt-1">
                  Unit 07 &mdash; En Route
                </p>
              </div>
              <span className="mono text-maroon-300 text-sm font-semibold">
                ETA 06:12
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="bg-navy-900/60 border border-bone/5 rounded-lg p-4">
                <p className="text-xs text-navy-100/60">Ventilator</p>
                <p className="font-semibold mt-0.5">Onboard</p>
              </div>
              <div className="bg-navy-900/60 border border-bone/5 rounded-lg p-4">
                <p className="text-xs text-navy-100/60">Paramedic</p>
                <p className="font-semibold mt-0.5">Certified BLS/ACLS</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <svg
        className="block w-full absolute bottom-0 left-0 z-10"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: "50px" }}
      >
        <path fill="#F6F5F1" d="M0 60 L1440 0 L1440 60 Z" />
      </svg> */}
    </section>
  );
}
