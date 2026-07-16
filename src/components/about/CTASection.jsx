// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";
// import { Phone, Ambulance, ArrowRight } from "lucide-react";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger);
// }

// // Replace with your own asset in /public, e.g. "/images/emergency-cta.jpg"
// const BG_IMAGE =
//   "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2000&auto=format&fit=crop";

// const stats = [
//   { value: "24/7", label: "Emergency Support" },
//   { value: "10+", label: "Years Experience" },
//   { value: "120+", label: "Ambulances" },
//   { value: "5,000+", label: "Patients Served" },
// ];

// export default function EmergencyCTA() {
//   const sectionRef = useRef(null);
//   const iconRef = useRef(null);
//   const headingRef = useRef(null);
//   const paraRef = useRef(null);
//   const statsRef = useRef(null);
//   const buttonsRef = useRef(null);
//   const numberRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power3.out", duration: 0.7 },
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });

//       tl.fromTo(
//         iconRef.current,
//         { scale: 0.4, opacity: 0, rotate: -20 },
//         {
//           scale: 1,
//           opacity: 1,
//           rotate: 0,
//           duration: 0.6,
//           ease: "back.out(1.7)",
//         },
//       )
//         .fromTo(
//           headingRef.current,
//           { y: 30, opacity: 0 },
//           { y: 0, opacity: 1 },
//           "-=0.3",
//         )
//         .fromTo(
//           paraRef.current,
//           { y: 24, opacity: 0 },
//           { y: 0, opacity: 1 },
//           "-=0.4",
//         )
//         .fromTo(
//           statsRef.current.children,
//           { y: 24, opacity: 0 },
//           { y: 0, opacity: 1, stagger: 0.1 },
//           "-=0.35",
//         )
//         .fromTo(
//           buttonsRef.current.children,
//           { y: 20, opacity: 0, scale: 0.95 },
//           { y: 0, opacity: 1, scale: 1, stagger: 0.1 },
//           "-=0.3",
//         )
//         .fromTo(
//           numberRef.current,
//           { opacity: 0 },
//           { opacity: 1, duration: 0.5 },
//           "-=0.2",
//         );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden py-10 md:py-18 text-bone"
//     >
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${BG_IMAGE})` }}
//       />

//       {/* Maroon gradient overlay for brand identity + legibility */}
//       <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/95 via-maroon-700/90 to-navy-900/90" />

//       {/* Ambient glow accents */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-bone/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy-900/30 rounded-full blur-3xl" />
//       <div
//         className="absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
//           backgroundSize: "26px 26px",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
//         <div
//           ref={iconRef}
//           className="w-14 h-14 mx-auto rounded-full bg-bone/10 backdrop-blur border border-bone/20 flex items-center justify-center mb-6 -mt-6"
//         >
//           <Ambulance className="w-8 h-8" />
//         </div>

//         <h2
//           ref={headingRef}
//           className="font-display font-bold text-3xl md:text-4xl lg:text-5xl drop-shadow-sm"
//         >
//           Need emergency medical assistance?
//         </h2>

//         <p
//           ref={paraRef}
//           className="max-w-3xl mx-auto mt-6 text-lg text-bone/85 leading-relaxed"
//         >
//           Our emergency response team is available 24 hours a day, 7 days a
//           week. Whether it&apos;s a medical emergency, patient transfer, or ICU
//           ambulance requirement, we&apos;re just one call away.
//         </p>

//         <div
//           ref={statsRef}
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 mb-12 max-w-3xl mx-auto"
//         >
//           {stats.map((s) => (
//             <div
//               key={s.label}
//               className="bg-bone/5 backdrop-blur-sm border border-bone/10 rounded-2xl py-2"
//             >
//               <h3 className="font-display font-bold text-3xl">{s.value}</h3>
//               <p className="text-bone/70 text-xs mt-1">{s.label}</p>
//             </div>
//           ))}
//         </div>

//         <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4 -mt-4">
//           <a
//             href="tel:+919540767878"
//             className="dot-pulse inline-flex items-center gap-2 px-8 py-4 bg-bone text-maroon-700 font-display font-semibold text-lg rounded-md hover:bg-navy-50 transition-colors shadow-xl shadow-navy-900/30"
//           >
//             <Phone className="w-5 h-5 relative z-10" />
//             <span className="relative z-10">Call Now</span>
//           </a>

//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-bone/5 backdrop-blur-sm border border-bone/30 hover:border-bone/70 hover:bg-bone/10 rounded-md font-medium transition-colors"
//           >
//             Book Ambulance
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>

//         <div ref={numberRef} className="mt-6">
//           <p className="text-bone/70 text-xs uppercase tracking-widest mono">
//             Emergency Helpline
//           </p>
//           <a
//             href="tel:+919540767878"
//             className="font-display font-bold text-3xl md:text-4xl mt-2 inline-block hover:text-navy-100 transition-colors"
//           >
//             +91 9540767878
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

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

const PHONE = "+919540767878";

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
      className="relative overflow-hidden py-10 md:py-14 text-[#f7f5f2]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Brand gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01203f]/95 via-[#01203f]/90 to-[#b61416]/80" />

      {/* Ambient glow accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#b61416]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        {/* Pulsing siren icon */}
        <div ref={iconRef} className="relative w-11 h-11 mx-auto mb-4">
          <span className="absolute inset-0 rounded-full bg-[#b61416]/40 animate-ping [animation-duration:2s]" />
          <div className="relative w-11 h-11 rounded-full bg-[#b61416] flex items-center justify-center shadow-lg shadow-[#b61416]/30">
            <Ambulance className="w-5 h-5 text-white" />
          </div>
        </div>

        <h2
          ref={headingRef}
          className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl drop-shadow-sm"
        >
          Need emergency medical assistance?
        </h2>

        <p
          ref={paraRef}
          className="max-w-xl mx-auto mt-3 text-sm md:text-base text-white/75 leading-relaxed"
        >
          Our emergency response team is available 24 hours a day, 7 days a week
          — medical emergency, patient transfer, or ICU ambulance, we&apos;re
          just one call away.
        </p>

        {/* ECG divider */}
        <div className="w-full max-w-[180px] mx-auto my-5 opacity-60">
          <svg
            viewBox="0 0 300 40"
            className="w-full h-5"
            preserveAspectRatio="none"
          >
            <polyline
              points="0,20 70,20 85,4 100,36 115,20 300,20"
              fill="none"
              stroke="#f7f5f2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Stat row */}
        <div
          ref={statsRef}
          className="flex flex-wrap justify-center max-w-2xl mx-auto mb-6"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex-1 min-w-[110px] px-3 py-1 ${
                i !== 0 ? "sm:border-l border-white/15" : ""
              }`}
            >
              <h3 className="font-heading font-extrabold text-xl md:text-2xl">
                {s.value}
              </h3>
              <p className="text-white/60 text-[11px] mt-0.5 tracking-wide uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div ref={buttonsRef} className="flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#f7f5f2] text-[#b61416] font-heading font-semibold text-sm md:text-base rounded-full hover:bg-white transition-colors shadow-xl shadow-black/20 hover:-translate-y-0.5 duration-200"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/25 hover:border-white/60 hover:bg-white/10 rounded-full font-heading font-medium text-sm md:text-base transition-colors"
          >
            Book Ambulance
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div ref={numberRef} className="mt-4">
          <p className="text-white/60 text-[11px] uppercase tracking-[0.15em]">
            Emergency Helpline
          </p>
          <a
            href={`tel:${PHONE}`}
            className="font-heading font-bold text-lg md:text-xl mt-1 inline-block hover:text-white/80 transition-colors"
          >
            +91 9540767878
          </a>
        </div>
      </div>
    </section>
  );
}

