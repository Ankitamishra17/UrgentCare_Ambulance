"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "Emergency response",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Wire this up to your backend / API route (e.g. /api/send-quote)
    console.log(form);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-5 gap-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-2"
        >
          <p className="text-maroon-700 font-semibold tracking-widest uppercase text-xs mono">
            Get in touch
          </p>
          <h2 className="font-display font-bold text-4xl text-navy-900 mt-3">
            Book a transport or ask a question
          </h2>
          <p className="text-navy-700/70 mt-4 leading-relaxed">
            For emergencies, always call our dispatch line directly. For
            scheduled transport or general enquiries, use the form.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-navy-900">Emergency line</p>
                <p className="text-navy-700/70 text-sm mono">
                  +91 9540767878 
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-navy-900">Email</p>
                <p className="text-navy-700/70 text-sm">
                  info@urgentcareambulance.in
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-11 w-11 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-navy-900">Base station</p>
                <p className="text-navy-700/70 text-sm">
                  Mayur Vihar Phase III, Gharoli,New Delhi, Delhi – 110096 
                

                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:col-span-3 bg-white border border-navy-100 rounded-2xl p-7 sm:p-9"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-navy-900 mb-1.5 block">
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-navy-100 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm font-medium text-navy-900 mb-1.5 block">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98xxxxxxx"
                className="w-full border border-navy-100 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-navy-900 mb-1.5 block">
                Service needed
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border border-navy-100 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
              >
                <option>Emergency response</option>
                <option>ICU transport</option>
                <option>Scheduled patient transfer</option>
                <option>Event standby cover</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium text-navy-900 mb-1.5 block">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Pickup and drop location, timing, patient condition..."
                className="w-full border border-navy-100 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="sm:col-span-2 bg-navy-700 hover:bg-navy-900 text-bone font-display font-semibold text-lg py-3 rounded-md transition-colors"
            >
              Send Request
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
