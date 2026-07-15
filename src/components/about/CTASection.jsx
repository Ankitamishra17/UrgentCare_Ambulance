"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Phone, Ambulance, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Replace with your own asset in /public, e.g. "/images/emergency-cta.jpg"
const BG_IMAGE =
  "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2000&auto=format&fit=crop";

const stats = [
  { value: "24/7", label: "Emergency Support" },
  { value: "10+", label: "Years Experience" },
  { value: "120+", label: "Ambulances" },
  { value: "5,000+", label: "Patients Served" },
];

export default function EmergencyCTA() {
  const sectionRef = useRef(null);
  const iconRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        iconRef.current,
        { scale: 0.4, opacity: 0, rotate: -20 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
      )
        .fromTo(
          headingRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.3",
        )
        .fromTo(
          paraRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.4",
        )
        .fromTo(
          statsRef.current.children,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1 },
          "-=0.35",
        )
        .fromTo(
          buttonsRef.current.children,
          { y: 20, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.1 },
          "-=0.3",
        )
        .fromTo(
          numberRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 md:py-18 text-bone"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Maroon gradient overlay for brand identity + legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/95 via-maroon-700/90 to-navy-900/90" />

      {/* Ambient glow accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-bone/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy-900/30 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <div
          ref={iconRef}
          className="w-14 h-14 mx-auto rounded-full bg-bone/10 backdrop-blur border border-bone/20 flex items-center justify-center mb-6 -mt-6"
        >
          <Ambulance className="w-8 h-8" />
        </div>

        <h2
          ref={headingRef}
          className="font-display font-bold text-3xl md:text-4xl lg:text-5xl drop-shadow-sm"
        >
          Need emergency medical assistance?
        </h2>

        <p
          ref={paraRef}
          className="max-w-3xl mx-auto mt-6 text-lg text-bone/85 leading-relaxed"
        >
          Our emergency response team is available 24 hours a day, 7 days a
          week. Whether it&apos;s a medical emergency, patient transfer, or ICU
          ambulance requirement, we&apos;re just one call away.
        </p>

        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 mb-12 max-w-3xl mx-auto"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-bone/5 backdrop-blur-sm border border-bone/10 rounded-2xl py-2"
            >
              <h3 className="font-display font-bold text-3xl">{s.value}</h3>
              <p className="text-bone/70 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 -mt-4">
          <a
            href="tel:+919540767878"
            className="dot-pulse inline-flex items-center gap-2 px-8 py-4 bg-bone text-maroon-700 font-display font-semibold text-lg rounded-md hover:bg-navy-50 transition-colors shadow-xl shadow-navy-900/30"
          >
            <Phone className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Call Now</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-bone/5 backdrop-blur-sm border border-bone/30 hover:border-bone/70 hover:bg-bone/10 rounded-md font-medium transition-colors"
          >
            Book Ambulance
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div ref={numberRef} className="mt-6">
          <p className="text-bone/70 text-xs uppercase tracking-widest mono">
            Emergency Helpline
          </p>
          <a
            href="tel:+919540767878"
            className="font-display font-bold text-3xl md:text-4xl mt-2 inline-block hover:text-navy-100 transition-colors"
          >
            +91 9540767878
          </a>
        </div>
      </div>
    </section>
  );
}
