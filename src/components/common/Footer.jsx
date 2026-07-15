// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";
// import Image from "next/image";
// import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// const quickLinks = [
//   { href: "#home", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/services", label: "Services" },
//   { href: "/contact", label: "Contact" },
// ];

// const serviceLinks = [
//   "Emergency Response",
//   "ICU on Wheels",
//   "Patient Transfer",
//   "Event Standby",
// ];

// export default function Footer() {
//   const footerRef = useRef(null);
//   const colsRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         colsRef.current.children,
//         { y: 30, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.12,
//           duration: 0.7,
//           ease: "power3.out",
//           scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
//         },
//       );
//     }, footerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <footer
//       ref={footerRef}
//       className="relative bg-navy-900 text-navy-100/80 overflow-hidden"
//     >
//       {/* Ambient texture */}
//       <div
//         className="absolute inset-0 opacity-[0.05]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
//           backgroundSize: "26px 26px",
//         }}
//       />

//       {/* Top emergency strip */}
//       <div className="relative border-b border-bone/10">
//         <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
//           <div className="text-center md:text-left">
//             <p className="font-display font-bold text-2xl text-bone">
//               Need an ambulance right now?
//             </p>
//             <p className="text-navy-100/60 text-sm mt-1">
//               Our dispatch desk is answering calls this very second.
//             </p>
//           </div>
//           <a
//             href="tel:+911800123456"
//             className="dot-pulse inline-flex items-center gap-2 bg-maroon-700 hover:bg-maroon-900 transition-colors px-6 py-3 rounded-md font-display font-semibold text-lg shadow-lg shadow-maroon-900/30 whitespace-nowrap"
//           >
//             <Phone className="h-4 w-4 relative z-10" />
//             <span className="relative z-10">1800-123-456</span>
//           </a>
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-8">
//         <div
//           ref={colsRef}
//           className="grid sm:grid-cols-2 md:grid-cols-4 gap-10"
//         >
//           {/* Brand */}
//           <div>
//             <Link href="/" className="inline-flex items-center gap-3">
//               <Image
//                 src="/footer_logo.webp"
//                 alt="RapidCare Ambulance"
//                 width={94}
//                 height={44}
//                 priority
//               />

//             </Link>
//             <p className="text-sm mt-4 leading-relaxed">
//               24/7 ambulance and emergency medical transport across Delhi NCR.
//             </p>
//             <div className="flex gap-3 mt-5">
//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="h-9 w-9 rounded-full border border-navy-300/30 flex items-center justify-center hover:bg-maroon-700 hover:border-maroon-700 transition-colors"
//               >
//                 <FaFacebookF className="h-4 w-4" />
//               </a>
//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="h-9 w-9 rounded-full border border-navy-300/30 flex items-center justify-center hover:bg-maroon-700 hover:border-maroon-700 transition-colors"
//               >
//                 <FaInstagram className="h-4 w-4" />
//               </a>
//               <a
//                 href="#"
//                 aria-label="WhatsApp"
//                 className="h-9 w-9 rounded-full border border-navy-300/30 flex items-center justify-center hover:bg-maroon-700 hover:border-maroon-700 transition-colors"
//               >
//                 <MessageCircle className="h-4 w-4" />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <p className="font-display font-semibold text-lg text-bone mb-4">
//               Quick Links
//             </p>
//             <ul className="space-y-2.5 text-sm">
//               {quickLinks.map((l) => (
//                 <li key={l.href}>
//                   <Link
//                     href={l.href}
//                     className="hover:text-bone hover:pl-1 transition-all duration-200"
//                   >
//                     {l.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <p className="font-display font-semibold text-lg text-bone mb-4">
//               Services
//             </p>
//             <ul className="space-y-2.5 text-sm">
//               {serviceLinks.map((s) => (
//                 <li key={s}>
//                   <Link
//                     href="/services"
//                     className="hover:text-bone hover:pl-1 transition-all duration-200"
//                   >
//                     {s}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <p className="font-display font-semibold text-lg text-bone mb-4">
//               Contact
//             </p>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-start gap-2.5">
//                 <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-maroon-300" />
//                 Sector 62, Noida, UP
//               </li>
//               <li className="flex items-start gap-2.5">
//                 <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-maroon-300" />
//                 urgent@rapidcareambulance.in
//               </li>
//               <li className="flex items-start gap-2.5 mono text-bone font-semibold">
//                 <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-maroon-300" />
//                 1800-123-456
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-12 pt-6 border-t border-navy-300/15 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-navy-100/50">
//           <p>&copy; 2026 RapidCare Ambulance. All rights reserved.</p>
//           <p>Registered under Delhi NCR Emergency Medical Services</p>
//           <a
//             href="https://deboxtechnology.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-1 text-navy-100/60 hover:text-maroon-300 transition-colors"
//           >
//             Developed by{" "}
//             <span className="font-semibold text-bone">Debox Technology</span>
//             <ArrowUpRight className="h-3 w-3" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Heart,
} from "lucide-react";
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
const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const elementsToAnimate = contentRef.current?.querySelectorAll(
        ".animate-fade-in-up",
      );

      if (elementsToAnimate && elementsToAnimate.length > 0) {
        gsap.fromTo(
          elementsToAnimate,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      // ref={footerRef}
      className="relative bg-gradient-to-b from-[#13416f] to-[#0b2545] text-slate-200 overflow-hidden border-t border-white/10"
    >
      {/* Premium background noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Radial glow effects featuring your custom brand red */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#851829]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-[#13416f]/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Top emergency strip with your brand red action button */}
      <div className="relative border-b border-white/10 bg-[#0b2545]/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#851829]/10 border border-[#851829]/20 text-red-400 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-20 animate-ping" />
              <Heart className="h-5 w-5 fill-current" />
            </div>
            <div>
              <p className="font-display font-bold text-2xl text-white tracking-tight">
                Need an ambulance right now?
              </p>
              <p className="text-slate-300 text-sm mt-1">
                Our dispatch desk is active and answering calls this very
                second.
              </p>
            </div>
          </div>

          <a
            href="tel:+911800123456"
            className="group relative inline-flex items-center gap-3 bg-[#851829] hover:bg-[#9c2033] active:scale-[0.98] transition-all duration-300 px-8 py-4 rounded-xl font-display font-bold text-lg text-white shadow-xl shadow-black/30 hover:shadow-[#851829]/20 hover:-translate-y-0.5 animate-pulse-subtle"
          >
            <Phone className="h-5 w-5 animate-pulse" />
            <span>+91 9540767878</span>
            <span className="text-white/40 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </a>
        </div>
      </div>

      {/* Main Grid Content */}
      <div
        // ref={contentRef}
        className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-9 pb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand & Socials Column */}
          <div className="animate-fade-in-up space-y-6">
            <Link
              href="/"
              className="inline-flex items-center transition-opacity hover:opacity-90"
            >
              <Image
                src="/footer_logo.webp"
                alt="RapidCare Ambulance Logo"
                width={120}
                height={56}
                className="brightness-110"
                priority
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Leading the standard in high-tier critical care and rapid 24/7
              emergency medical transports across Delhi NCR.
            </p>

            <div className="flex gap-3 pt-2">
              {[
                {
                  icon: <FaFacebookF className="h-4 w-4" />,
                  label: "Facebook",
                  href: "#",
                },
                {
                  icon: <FaInstagram className="h-4 w-4" />,
                  label: "Instagram",
                  href: "#",
                },
                {
                  icon: <MessageCircle className="h-4 w-4" />,
                  label: "WhatsApp",
                  href: "#",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#851829] hover:border-[#851829] hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="animate-fade-in-up">
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-6">
              Quick Links
            </p>
            <ul className="space-y-3.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="h-1.5 w-0 bg-[#851829] rounded-full mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="animate-fade-in-up">
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-6">
              Services
            </p>
            <ul className="space-y-3.5 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="group flex items-center text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="h-1.5 w-0 bg-[#851829] rounded-full mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="animate-fade-in-up">
            <p className="font-display font-semibold text-sm uppercase tracking-wider text-white mb-6">
              Contact Us
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-red-400 shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-slate-300">Sector 62, Noida, UP</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-red-400 shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:urgent@rapidcareambulance.in"
                  className="hover:text-white transition-colors break-all text-slate-300"
                >
                  urgent@rapidcareambulance.in
                </a>
              </li>
              <li className="flex items-start gap-3 font-semibold">
                <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-red-400 shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <a
                  href="tel:+919540767878"
                  className="text-white hover:text-red-400 transition-colors tracking-wide"
                >
                  +91 9540767878
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Developer Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p>&copy; 2026 RapidCare Ambulance. All rights reserved.</p>
            <span className="hidden sm:inline text-white/10">|</span>
            <p className="flex items-center gap-1.5 justify-center">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              Delhi NCR EMS Certified
            </p>
          </div>

          <a
            href="https://deboxtechnology.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            Developed by{" "}
            <span className="font-semibold text-white group-hover:text-red-400 transition-colors">
              Debox Technology
            </span>
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
