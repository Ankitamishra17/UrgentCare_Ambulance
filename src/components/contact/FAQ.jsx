"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Phone, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How quickly can an ambulance reach me?",
    answer:
      "Our average response time is 10-15 minutes depending on traffic conditions and your location within Delhi NCR.",
  },
  {
    question: "Are your ambulances available 24/7?",
    answer:
      "Yes, our ambulance services operate 24 hours a day, 7 days a week, including weekends and public holidays.",
  },
  {
    question: "Do you provide ICU and ventilator ambulances?",
    answer:
      "Yes, we offer fully equipped ICU ambulances with ventilators, cardiac monitors, oxygen support, and trained paramedics.",
  },
  {
    question: "Can I book an ambulance in advance?",
    answer:
      "Absolutely. You can schedule patient transfers, hospital discharge transport, and non-emergency medical transportation in advance.",
  },
  {
    question: "Do your ambulances have trained medical staff?",
    answer:
      "Yes, every ambulance is staffed with certified drivers and trained medical personnel based on the service level required.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We provide ambulance services throughout Delhi, Noida, Greater Noida, Ghaziabad, Gurugram, and surrounding NCR regions.",
  },
];

// Split into two columns: first half left, second half right
const half = Math.ceil(faqs.length / 2);
const leftFaqs = faqs.slice(0, half).map((f, i) => ({ ...f, index: i }));
const rightFaqs = faqs.slice(half).map((f, i) => ({ ...f, index: i + half }));

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  const renderFaq = (faq) => {
    const isOpen = active === faq.index;

    return (
      <div
        key={faq.question}
        className={`border rounded-2xl bg-white transition-colors ${
          isOpen
            ? "border-navy-700 shadow-lg shadow-navy-900/5"
            : "border-navy-100"
        }`}
      >
        <button
          onClick={() => toggleFAQ(faq.index)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-4 p-6 text-left"
        >
          <h3 className="font-display font-semibold  sm:text-sm md:text-base lg:text-xl text-navy-900">
            {faq.question}
          </h3>

          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`flex-shrink-0 h-9 w-9 rounded-full flex items-center justify-center ${
              isOpen ? "bg-maroon-700 text-bone" : "bg-navy-50 text-navy-700"
            }`}
          >
            <Plus className="h-4 w-4" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-6 text-sm text-navy-700/70 leading-relaxed border-t border-navy-50 pt-4 -mt-2">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="py-20 md:py-28 bg-bone">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-maroon-700 font-semibold tracking-widest uppercase text-xs mono">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy-900 mt-3">
            Frequently asked questions
          </h2>
          <p className="text-navy-700/70 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Find answers to the most common questions about our ambulance and
            emergency medical transportation services.
          </p>
        </motion.div>

        {/* FAQ Items — two columns */}
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3.5"
          >
            {leftFaqs.map(renderFaq)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3.5"
          >
            {rightFaqs.map(renderFaq)}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 text-center bg-navy-900 rounded-3xl p-10 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative">
            <h3 className="font-display font-bold text-3xl text-bone mb-2">
              Still have questions?
            </h3>
            <p className="text-navy-100/75 mb-6">
              Our emergency support team is available 24/7 to help you.
            </p>
            <a
              href="tel:+919540767878"
              className="dot-pulse inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-900 text-bone font-display font-semibold text-lg px-7 py-3.5 rounded-md transition-colors shadow-lg shadow-maroon-900/30"
            >
              <Phone className="h-4 w-4 relative z-10" />
              <span className="relative text-nowrap text-[12px] z-10">Call Now: +91 9540767878</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
