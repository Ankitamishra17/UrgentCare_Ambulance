"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  HeartPulse,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Replace with your own asset in /public, e.g. "/images/contact-form.jpg"
const IMAGE =
  "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=1400&auto=format&fit=crop";

const SERVICES = [
  "Emergency response",
  "ICU transport",
  "Scheduled patient transfer",
  "Event standby cover",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

// --- Validation rules -------------------------------------------------
function validateField(name, value) {
  switch (name) {
    case "name": {
      const v = value.trim();
      if (!v) return "Full name is required.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      if (!/^[a-zA-Z\s.'-]+$/.test(v))
        return "Name can only contain letters and spaces.";
      return "";
    }
    case "email": {
      const v = value.trim();
      if (!v) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        return "Enter a valid email address.";
      return "";
    }
    case "phone": {
      const v = value.trim().replace(/[\s-]/g, "");
      if (!v) return "Phone number is required.";
      if (!/^(\+91)?[6-9]\d{9}$/.test(v))
        return "Enter a valid 10-digit mobile number.";
      return "";
    }
    case "service": {
      if (!value) return "Please select a service.";
      return "";
    }
    case "message": {
      const v = value.trim();
      if (!v) return "Please tell us what you need.";
      if (v.length < 10) return "Message must be at least 10 characters.";
      if (v.length > 600) return "Message must be under 600 characters.";
      return "";
    }
    default:
      return "";
  }
}

function validateAll(form) {
  const errors = {};
  Object.keys(form).forEach((key) => {
    const err = validateField(key, form[key]);
    if (err) errors[key] = err;
  });
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null

  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const floatCardRef = useRef(null);
  const formCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapRef.current,
        { x: -60, opacity: 0, scale: 0.96 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        floatCardRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.6)",
          delay: 0.35,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );

      gsap.fromTo(
        formCardRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allErrors = validateAll(form);
    setErrors(allErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      message: true,
    });

    if (Object.keys(allErrors).length > 0) {
      setSubmitStatus(null);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API route, e.g. /api/send-quote
      // const res = await fetch("/api/send-quote", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Request failed");

      await new Promise((resolve) => setTimeout(resolve, 1200)); // simulated request

      setSubmitStatus("success");
      setForm(initialForm);
      setTouched({});
      setErrors({});
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldError = (name) => touched[name] && errors[name];

  const baseInput =
    "w-full border rounded-md pl-11 pr-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2";
  const okInput = "border-navy-100 focus:border-navy-500 focus:ring-navy-100";
  const badInput =
    "border-maroon-500 focus:border-maroon-500 focus:ring-maroon-100";

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative hidden lg:block">
          <div
            ref={imageWrapRef}
            className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15 border border-navy-100"
          >
            <img
              src={IMAGE}
              alt="UrgentCare ambulance crew"
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
          </div>

          {/* Floating stat card */}
          <div
            ref={floatCardRef}
            className="absolute -bottom-8 -right-4 sm:-right-8 bg-navy-900 text-bone rounded-2xl p-6 shadow-2xl shadow-navy-900/30 border border-navy-700 max-w-[230px]"
          >
            <div className="h-10 w-10 rounded-xl bg-maroon-700 flex items-center justify-center mb-3">
              <HeartPulse className="h-5 w-5" />
            </div>
            <p className="text-sm text-navy-100/85 leading-relaxed">
              Dispatch desk answers every call within 20 seconds, day or
              night.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div
          ref={formCardRef}
          className="bg-white border border-navy-100 rounded-2xl p-7 sm:p-9"
        >
          <AnimatePresence mode="wait">
            {submitStatus === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="h-14 w-14 rounded-full bg-navy-50 text-navy-700 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-navy-900 mt-5">
                  Request received
                </h3>
                <p className="text-navy-700/70 text-sm mt-2 max-w-sm">
                  Our team will call you back shortly to confirm the
                  details. For anything urgent, please call{" "}
                  <a
                    href="tel:+911800123456"
                    className="font-semibold text-maroon-700"
                  >
                    1800-123-456
                  </a>{" "}
                  directly.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-6 text-sm font-medium text-navy-700 border border-navy-100 hover:bg-navy-50 rounded-md px-4 py-2 transition-colors"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                noValidate
                onSubmit={handleSubmit}
                className="grid sm:grid-cols-2 gap-5"
              >
                {/* Name */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-navy-900 mb-1.5 block"
                  >
                    Full name
                  </label>
                  <div className="relative">
                    <User className="h-4 w-4 text-navy-700/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your name"
                      aria-invalid={!!fieldError("name")}
                      aria-describedby="name-error"
                      className={`${baseInput} ${
                        fieldError("name") ? badInput : okInput
                      }`}
                    />
                  </div>
                  <FieldError id="name-error" message={fieldError("name")} />
                </div>

                {/* Phone */}
                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-navy-900 mb-1.5 block"
                  >
                    Phone number
                  </label>
                  <div className="relative">
                    <Phone className="h-4 w-4 text-navy-700/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98xxxxxxx"
                      aria-invalid={!!fieldError("phone")}
                      aria-describedby="phone-error"
                      className={`${baseInput} ${
                        fieldError("phone") ? badInput : okInput
                      }`}
                    />
                  </div>
                  <FieldError id="phone-error" message={fieldError("phone")} />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-navy-900 mb-1.5 block"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="h-4 w-4 text-navy-700/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="name@example.com"
                      aria-invalid={!!fieldError("email")}
                      aria-describedby="email-error"
                      className={`${baseInput} ${
                        fieldError("email") ? badInput : okInput
                      }`}
                    />
                  </div>
                  <FieldError id="email-error" message={fieldError("email")} />
                </div>

                {/* Service */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-navy-900 mb-1.5 block"
                  >
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!fieldError("service")}
                    aria-describedby="service-error"
                    className={`w-full border rounded-md px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 ${
                      fieldError("service") ? badInput : okInput
                    } ${form.service === "" ? "text-navy-700/40" : "text-ink"}`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="text-ink">
                        {s}
                      </option>
                    ))}
                  </select>
                  <FieldError
                    id="service-error"
                    message={fieldError("service")}
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-navy-900 block"
                    >
                      Message
                    </label>
                    <span
                      className={`text-xs ${
                        form.message.length > 600
                          ? "text-maroon-700"
                          : "text-navy-700/40"
                      }`}
                    >
                      {form.message.length}/600
                    </span>
                  </div>
                  <div className="relative">
                    <MessageSquare className="h-4 w-4 text-navy-700/40 absolute left-4 top-3.5" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Pickup and drop location, timing, patient condition..."
                      aria-invalid={!!fieldError("message")}
                      aria-describedby="message-error"
                      className={`${baseInput} pt-3 resize-none ${
                        fieldError("message") ? badInput : okInput
                      }`}
                    />
                  </div>
                  <FieldError
                    id="message-error"
                    message={fieldError("message")}
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="sm:col-span-2 flex items-center gap-2 bg-maroon-50 text-maroon-700 text-sm rounded-md px-4 py-3">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    Something went wrong sending your request. Please try
                    again or call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="sm:col-span-2 flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-900 disabled:opacity-70 disabled:cursor-not-allowed text-bone font-display font-semibold text-lg py-3 rounded-md transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FieldError({ id, message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-1.5 text-xs text-maroon-700 mt-1.5"
        >
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}