// "use client";

// import { useRef } from "react";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   ArrowRight,
//   Phone,
//   ShieldCheck,
//   HeartPulse,
//   Home,
//   ChevronRight,
// } from "lucide-react";

// // Replace with your own asset in /public, e.g. "/images/about-hero.jpg"
// const BG_IMAGE =
//   "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2000&auto=format&fit=crop";

// const stats = [
//   { value: "10+", label: "Years experience" },
//   { value: "120+", label: "Ambulances" },
//   { value: "5,000+", label: "Patients served" },
// ];

// export default function AboutHero() {
//   const crumbRef = useRef(null);
//   return (
//     <section className="relative overflow-hidden bg-navy-900 text-bone min-h-[88vh] flex items-center">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center scale-105"
//         style={{ backgroundImage: `url(${BG_IMAGE})` }}
//       />

//       {/* Overlay gradients for legibility */}
//       <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60" />
//       <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
//       <div
//         className="absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
//           backgroundSize: "26px 26px",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28 w-full">
//         <div className="grid lg:grid-cols-2 gap-14 items-center">
//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, y: 28 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut" }}
//           >
//             <nav
//               ref={crumbRef}
//               aria-label="Breadcrumb"
//               className="flex items-center justify-center gap-1.5 text-sm text-navy-100/60 mb-6 mr-108 -mt-10"
//             >
//               <Link
//                 href="/"
//                 className="flex items-center gap-1.5 hover:text-bone transition-colors"
//               >
//                 <Home className="h-3.5 w-3.5" />
//                 Home
//               </Link>
//               <ChevronRight className="h-3.5 w-3.5 text-navy-100/40" />
//               <span className="text-bone font-medium">About</span>
//             </nav>
//             <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-maroon-900/50 backdrop-blur-sm border border-maroon-300/30 text-xs font-semibold tracking-wider uppercase mono text-maroon-100">
//               <ShieldCheck className="w-4 h-4 text-maroon-300" />
//               Trusted Emergency Medical Service
//             </span>
//             {/* Breadcrumb */}

//             <h1 className="mt-5 font-display font-bold text-5xl sm:text-4xl md:text-5xl lg:text-7xl leading-[0.98] drop-shadow-sm">
//               About
//               <span className="block text-nowrap text-[#851829]">
//                 UrgentCare{" "}
//               </span>
//             </h1>

//             <p className="mt-6 text-[10px] md:text-base lg:text-xl text-navy-100/85 max-w-lg leading-relaxed">
//               For over a decade, UrgentCare Ambulance has been providing
//               reliable emergency medical transportation, ICU ambulance services,
//               and patient transfer solutions with trained paramedics and modern
//               life-support equipment.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-3 mt-8 items-start">
//               <Link
//                 href="/contact"
//                 className="inline-flex w-fit items-center gap-2 px-6 py-3 bg-maroon-700 hover:bg-maroon-900 rounded-md font-semibold text-base shadow-lg"
//               >
//                 Contact Us
//                 <ArrowRight className="w-4 h-4" />
//               </Link>

//               <a
//                 href="tel:+919540767878"
//                 className="inline-flex w-fit items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-md"
//               >
//                 <Phone className="w-4 h-4" />
//                 Call Emergency
//               </a>
//             </div>

//             {/* <div className="grid grid-cols-3 gap-6 mt-12 max-w-md">
//               {stats.map((s) => (
//                 <div key={s.label}>
//                   <p className="font-display font-bold text-3xl text-maroon-300">
//                     {s.value}
//                   </p>
//                   <p className="text-xs text-navy-100/60 mt-1">{s.label}</p>
//                 </div>
//               ))}
//             </div> */}
//           </motion.div>

//           {/* Glass status card */}
//           <motion.div
//             initial={{ opacity: 0, y: 28 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
//             className="hidden lg:block"
//           >
//             <div className="relative bg-navy-900/40 backdrop-blur-md border border-bone/10 rounded-2xl p-7 shadow-2xl shadow-navy-900/40">
//               <div className="flex items-center gap-2 text-xs text-navy-100/60 mono mb-4">
//                 <HeartPulse className="h-3.5 w-3.5 text-maroon-300" />
//                 24/7 EMERGENCY CARE
//               </div>

//               <h4 className="font-display font-semibold text-2xl">
//                 Fast response, every time
//               </h4>
//               <p className="text-sm text-navy-100/75 mt-2 leading-relaxed">
//                 Trained paramedics and life-support equipment dispatched the
//                 moment you call — no exceptions, no delays.
//               </p>

//               <div className="grid grid-cols-2 gap-3 mt-6">
//                 <div className="bg-navy-900/60 border border-bone/5 rounded-lg p-4">
//                   <p className="text-xs text-navy-100/60">Founded</p>
//                   <p className="font-semibold mt-0.5">2014, Noida</p>
//                 </div>
//                 <div className="bg-navy-900/60 border border-bone/5 rounded-lg p-4">
//                   <p className="text-xs text-navy-100/60">Coverage</p>
//                   <p className="font-semibold mt-0.5">Delhi NCR</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <svg
//         className="block w-full absolute bottom-0 left-0 z-10"
//         viewBox="0 0 1440 60"
//         preserveAspectRatio="none"
//         style={{ height: "40px" }}
//       >
//         <path fill="#F6F5F1" d="M0 60 L1440 0 L1440 60 Z" />
//       </svg>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  HeartPulse,
  Home,
  ChevronRight,
} from "lucide-react";

// Replace with your own asset in /public, e.g. "/images/about-hero.jpg"
const BG_IMAGE =
  "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2000&auto=format&fit=crop";

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "120+", label: "Ambulances" },
  { value: "5,000+", label: "Patients served" },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-bone min-h-[auto] sm:min-h-[80vh] lg:min-h-[88vh] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />

      {/* Overlay gradients for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-900/90 to-navy-900/70 lg:bg-gradient-to-r lg:from-navy-900 lg:via-navy-900/90 lg:to-navy-900/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-navy-100/60 mb-5 sm:mb-6 flex-wrap"
            >
              <Link
                href="/"
                className="flex items-center gap-1.5 hover:text-bone transition-colors"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-navy-100/40" />
              <span className="text-bone font-medium">About</span>
            </nav>

            <span className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-maroon-900/50 backdrop-blur-sm border border-maroon-300/30 text-[11px] sm:text-xs font-semibold tracking-wider uppercase mono text-maroon-100">
              <ShieldCheck className="w-4 h-4 text-maroon-300 shrink-0" />
              Trusted Emergency Medical Service
            </span>

            <h1 className="mt-5 font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] sm:leading-[1] lg:leading-[0.98] drop-shadow-sm">
              About
              <span className="block text-[#851829]">UrgentCare</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-xl text-navy-100/85 max-w-lg leading-relaxed">
              For over a decade, UrgentCare Ambulance has been providing
              reliable emergency medical transportation, ICU ambulance services,
              and patient transfer solutions with trained paramedics and modern
              life-support equipment.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-7 sm:mt-8 items-stretch sm:items-start">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-fit items-center justify-center gap-2 px-6 py-3 bg-maroon-700 hover:bg-maroon-900 rounded-md font-semibold text-base shadow-lg transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+919540767878"
                className="inline-flex w-full sm:w-fit items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur border border-white/20 rounded-md transition-colors hover:bg-white/15"
              >
                <Phone className="w-4 h-4" />
                Call Emergency
              </a>
            </div>

            {/* Stats — shown on mobile/tablet since the glass card is desktop-only */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 max-w-md lg:hidden">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-2xl sm:text-3xl text-maroon-300">
                    {s.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-navy-100/60 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Glass status card — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="relative bg-navy-900/40 backdrop-blur-md border border-bone/10 rounded-2xl p-7 shadow-2xl shadow-navy-900/40">
              <div className="flex items-center gap-2 text-xs text-navy-100/60 mono mb-4">
                <HeartPulse className="h-3.5 w-3.5 text-maroon-300" />
                24/7 EMERGENCY CARE
              </div>

              <h4 className="font-display font-semibold text-2xl">
                Fast response, every time
              </h4>
              <p className="text-sm text-navy-100/75 mt-2 leading-relaxed">
                Trained paramedics and life-support equipment dispatched the
                moment you call — no exceptions, no delays.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-navy-900/60 border border-bone/5 rounded-lg p-4">
                  <p className="text-xs text-navy-100/60">Founded</p>
                  <p className="font-semibold mt-0.5">2014, Noida</p>
                </div>
                <div className="bg-navy-900/60 border border-bone/5 rounded-lg p-4">
                  <p className="text-xs text-navy-100/60">Coverage</p>
                  <p className="font-semibold mt-0.5">Delhi NCR</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <svg
        className="block w-full absolute bottom-0 left-0 z-10"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ height: "24px" }}
        aria-hidden="true"
      >
        <path fill="#F6F5F1" d="M0 60 L1440 0 L1440 60 Z" />
      </svg>
    </section>
  );
}
