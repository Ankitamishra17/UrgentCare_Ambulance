"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactMap() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-2xl overflow-hidden border border-navy-100 shadow-lg shadow-navy-900/5 h-full min-h-[320px]"
    >
      <iframe
        className="w-full h-full"
        title="Urgent Care Ambulance Location"
        src="https://www.google.com/maps?q=Mayur+Vihar+Phase+III,+Gharoli,+New+Delhi,+Delhi+110096&output=embed"
        style={{ border: 0, minHeight: "320px" }}
        loading="lazy"
      />
    </motion.div>
  );
}
