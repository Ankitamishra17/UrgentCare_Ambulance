"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const items = [
  {
    icon: Phone,
    label: "Emergency line",
    value: "+91 9540767878",
    href: "tel:+919540767878",
    mono: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "urgentcare@ambulance.in",
    href: "mailto:urgentcare@ambulance.in",
  },
  {
    icon: MapPin,
    label: "Base station",
    value: "Sector 62, Noida, Uttar Pradesh",
  },
  {
    icon: Clock,
    label: "Dispatch desk",
    value: "Open 24 hours, 7 days a week",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactInfo() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-4"
    >
      <div className="bg-[#851829] text-bone rounded-2xl p-6">
        <p className="font-display font-semibold text-2xl">
          Medical emergency?
        </p>
        <p className="text-maroon-50/80 text-sm mt-1">
          Don&apos;t fill the form &mdash; call us directly.
        </p>
        <a
          href="tel:+911800123456"
          className="mt-4 inline-flex items-center gap-2 bg-bone text-maroon-700 font-display font-bold text-lg px-5 py-2.5 rounded-md hover:bg-navy-50 transition-colors"
        >
          <Phone className="h-4 w-4" />
          +91 9540767878
        </a>
      </div>

      <div className="bg-white border border-navy-100 rounded-2xl divide-y divide-navy-50">
        {items.map(({ icon: Icon, label, value, href, mono }) => {
          const content = (
            <div className="flex items-start gap-4 p-5">
              <div className="h-11 w-11 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-navy-700/60 font-medium">{label}</p>
                <p
                  className={`text-navy-900 font-semibold  mt-0.5 break-all ${
                    mono ? "mono" : ""
                  }`}
                >
                  {value}
                </p>
              </div>
            </div>
          );
          return href ? (
            <a
              key={label}
              href={href}
              className="block hover:bg-navy-50/50 transition-colors"
            >
              {content}
            </a>
          ) : (
            <div key={label}>{content}</div>
          );
        })}
      </div>
    </motion.div>
  );
}
