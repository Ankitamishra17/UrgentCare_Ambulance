"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Emergency Response",
  "ICU on Wheels",
  "Patient Transfer",
  "Event Standby",
];

export default function Footer() {
  const footerRef = useRef(null);
  const colsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        colsRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
        },
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-navy-900 text-navy-100/80 overflow-hidden"
    >
      {/* Ambient texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Top emergency strip */}
      <div className="relative border-b border-bone/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-2xl text-bone">
              Need an ambulance right now?
            </p>
            <p className="text-navy-100/60 text-sm mt-1">
              Our dispatch desk is answering calls this very second.
            </p>
          </div>
          <a
            href="tel:+911800123456"
            className="dot-pulse inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-900 transition-colors px-6 py-3 rounded-md font-display font-semibold text-lg shadow-lg shadow-maroon-900/30 whitespace-nowrap"
          >
            <Phone className="h-4 w-4 relative z-10" />
            <span className="relative z-10">1800-123-456</span>
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-8">
        <div
          ref={colsRef}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/footer_logo.webp"
                alt="RapidCare Ambulance"
                width={94}
                height={44}
                priority
              />
              
            </Link>
            <p className="text-sm mt-4 leading-relaxed">
              24/7 ambulance and emergency medical transport across Delhi NCR.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full border border-navy-300/30 flex items-center justify-center hover:bg-maroon-700 hover:border-maroon-700 transition-colors"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full border border-navy-300/30 flex items-center justify-center hover:bg-maroon-700 hover:border-maroon-700 transition-colors"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="h-9 w-9 rounded-full border border-navy-300/30 flex items-center justify-center hover:bg-maroon-700 hover:border-maroon-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-display font-semibold text-lg text-bone mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-bone hover:pl-1 transition-all duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-display font-semibold text-lg text-bone mb-4">
              Services
            </p>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="hover:text-bone hover:pl-1 transition-all duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-display font-semibold text-lg text-bone mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-maroon-300" />
                Sector 62, Noida, UP
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-maroon-300" />
                urgent@rapidcareambulance.in
              </li>
              <li className="flex items-start gap-2.5 mono text-bone font-semibold">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-maroon-300" />
                1800-123-456
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-navy-300/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-navy-100/50">
          <p>&copy; 2026 RapidCare Ambulance. All rights reserved.</p>
          <p>Registered under Delhi NCR Emergency Medical Services</p>
          <a
            href="https://deboxtechnology.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-navy-100/60 hover:text-maroon-300 transition-colors"
          >
            Developed by{" "}
            <span className="font-semibold text-bone">Debox Technology</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
