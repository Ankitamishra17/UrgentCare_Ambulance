"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Activity, ShieldCheck, ListChecks, Plus, Check } from "lucide-react";

const points = [
  {
    title: "GPS-tracked dispatch",
    desc: "nearest available unit, every time.",
  },
  {
    title: "Trained paramedics",
    desc: "onboard every single unit, not just drivers.",
  },
  {
    title: "Direct hospital handoff",
    desc: "with pre-alerted ER teams.",
  },
];

const stats = [
  {
    icon: Activity,
    value: 12,
    suffix: " yrs",
    decimals: 0,
    label: "Serving NCR families",
    style: "bg-navy-700 text-bone",
    iconClass: "text-maroon-300",
  },
  {
    icon: ShieldCheck,
    value: 98.4,
    suffix: "%",
    decimals: 1,
    label: "On-time arrival rate",
    style: "bg-maroon-700 text-bone",
    iconClass: "text-navy-100",
  },
  {
    icon: ListChecks,
    value: 45,
    suffix: "+",
    decimals: 0,
    label: "Hospital partners",
    style: "bg-navy-50 border border-navy-100 text-navy-900",
    iconClass: "text-navy-700",
  },
  {
    icon: Plus,
    value: null, // static, not a counting number
    display: "24/7",
    label: "Dispatch desk",
    style: "bg-navy-50 border border-navy-100 text-navy-900",
    iconClass: "text-navy-700",
  },
];

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const textContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const textItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listItem = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function CountUpNumber({ value, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-14 items-center">
        {/* Stats grid */}
        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="order-2 md:order-1 grid grid-cols-2 gap-4"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                variants={cardItem}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`rounded-2xl p-6 flex flex-col justify-between h-48 ${
                  s.style
                } ${i % 2 === 1 ? "mt-8" : ""}`}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.1,
                    ease: "backOut",
                  }}
                >
                  <Icon className={`h-8 w-8 ${s.iconClass}`} />
                </motion.div>
                <div>
                  <p className="font-display font-bold text-3xl">
                    {s.value !== null ? (
                      <CountUpNumber
                        value={s.value}
                        decimals={s.decimals}
                        suffix={s.suffix}
                      />
                    ) : (
                      s.display
                    )}
                  </p>
                  <p
                    className={`text-sm ${
                      s.style.includes("bg-navy-700")
                        ? "text-navy-100/70"
                        : s.style.includes("bg-maroon-700")
                          ? "text-maroon-100/70"
                          : "text-navy-700/70"
                    }`}
                  >
                    {s.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Text content */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="order-1 md:order-2"
        >
          <motion.p
            variants={textItem}
            className="text-maroon-700 font-semibold tracking-widest uppercase text-xs mono"
          >
            About RapidCare
          </motion.p>
          <motion.h2
            variants={textItem}
            className="font-display font-bold text-4xl md:text-5xl text-navy-900 mt-3 leading-tight"
          >
            Built for the moment nobody plans for
          </motion.h2>
          <motion.p
            variants={textItem}
            className="text-navy-700/70 mt-5 leading-relaxed"
          >
            RapidCare runs a fleet of fully-equipped ambulances staffed by
            certified paramedics and emergency technicians, on call around the
            clock across Noida, Greater Noida, Ghaziabad, and Delhi. Every
            vehicle carries the same standard of care as a hospital ICU &mdash;
            because the ride to the hospital shouldn&apos;t be the risky part.
          </motion.p>

          <motion.ul variants={textItem} className="mt-7 space-y-4">
            {points.map((p) => (
              <motion.li
                key={p.title}
                variants={listItem}
                className="flex gap-3"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: "backOut" }}
                  className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-maroon-50 text-maroon-700 flex items-center justify-center"
                >
                  <Check className="h-3 w-3" strokeWidth={3} />
                </motion.span>
                <span className="text-navy-900/80">
                  <strong className="font-semibold">{p.title}</strong> {p.desc}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
