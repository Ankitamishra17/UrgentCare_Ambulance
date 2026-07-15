"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { Phone, Clock3, ChevronRight, Home } from "lucide-react";

// Replace with your own asset in /public, e.g. "/images/contact-hero.jpg"
const BG_IMAGE =
  "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2000&auto=format&fit=crop";

export default function ContactHero() {
  const bgRef = useRef(null);
  const crumbRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.fromTo(
        bgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1.05, opacity: 1, duration: 1.4, ease: "power2.out" },
      )
        .fromTo(
          crumbRef.current,
          { y: -12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.9",
        )
        .fromTo(
          badgeRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          headingRef.current,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.3",
        )
        .fromTo(
          paraRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.5",
        )
        
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-900 text-bone min-h-screen flex items-center">
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Overlay gradients for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/85 to-navy-900" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative text-center w-full">
        {/* Breadcrumb */}
        <nav
          ref={crumbRef}
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-1.5 text-sm text-navy-100/60 mb-6 sm:-mt-12 lg:-mt-[120px]"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-bone transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-navy-100/40" />
          <span className="text-bone font-medium">Contact</span>
        </nav>

        <span
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/50 backdrop-blur-sm border border-maroon-300/30 text-xs font-semibold tracking-widest uppercase mono text-maroon-100"
        >
          <Clock3 className="h-3.5 w-3.5 text-maroon-300" />
          Contact Us
        </span>

        <h1
          ref={headingRef}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl mt-6 leading-[0.98] drop-shadow-sm"
        >
          We&apos;re one call away
        </h1>

        <p
          ref={paraRef}
          className="text-navy-100/85 text-sm sm:text-[10px] md:text-lg lg:text-lg mt-5 max-w-xl mx-auto leading-relaxed"
        >
          For life-threatening emergencies, call our dispatch line directly. For
          bookings and enquiries, send us a message below.
        </p>

        
      </div>

      <svg
        className="block w-full absolute bottom-0 left-0 z-10"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: "40px" }}
      >
        <path fill="#F6F5F1" d="M0 60 L1440 0 L1440 60 Z" />
      </svg>
    </section>
  );
}
