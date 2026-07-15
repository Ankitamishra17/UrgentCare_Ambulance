// "use client";

// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Rahul Sharma",
//     location: "Noida",
//     review:
//       "The ambulance arrived within 10 minutes during a medical emergency. The staff was professional and handled everything perfectly.",
//   },
//   {
//     name: "Priya Verma",
//     location: "Ghaziabad",
//     review:
//       "Excellent ICU ambulance service. The paramedics were highly trained and ensured my father's safety throughout the journey.",
//   },
//   {
//     name: "Amit Singh",
//     location: "Delhi",
//     review:
//       "Very reliable and affordable service. The team coordinated directly with the hospital and made the process stress-free.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-slate-50">
//       <div className="max-w-7xl mx-auto px-5 sm:px-8">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <span className="inline-flex items-center rounded-full bg-red-100 text-[#851829] px-4 py-1 text-sm font-medium">
//             Testimonials
//           </span>

//           <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
//             Trusted By Families Across Delhi NCR
//           </h2>

//           <p className="mt-4 text-slate-600 text-lg">
//             Real experiences from patients and families who relied on our
//             emergency ambulance services.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.15,
//               }}
//               whileHover={{
//                 y: -8,
//               }}
//               className="relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
//             >
//               {/* Quote Icon */}
//               <div className="absolute top-6 right-6">
//                 <Quote className="h-10 w-10 text-red-100" />
//               </div>

//               {/* Stars */}
//               <div className="flex gap-1 mb-5">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={18}
//                     className="fill-yellow-400 text-yellow-400"
//                   />
//                 ))}
//               </div>

//               {/* Review */}
//               <p className="text-slate-600 leading-relaxed mb-6">
//                 "{item.review}"
//               </p>

//               {/* User */}
//               <div className="flex items-center gap-4">
//                 <div className="h-12 w-12 rounded-full bg-[#851829] text-white flex items-center justify-center font-bold">
//                   {item.name.charAt(0)}
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-slate-900">
//                     {item.name}
//                   </h4>
//                   <p className="text-sm text-slate-500">
//                     {item.location}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

        
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Noida",
    review:
      "The ambulance arrived within 10 minutes during a medical emergency. The staff was professional and handled everything perfectly.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    location: "Ghaziabad",
    review:
      "Excellent ICU ambulance service. The paramedics were highly trained and ensured my father's safety throughout the journey.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    location: "Delhi",
    review:
      "Very reliable and affordable service. The team coordinated directly with the hospital and made the process stress-free.",
    rating: 5,
  },
];

const AUTO_ADVANCE_MS = 6000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const timer = setInterval(next, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [next]);

  const active = testimonials[index];

  return (
    <section className="py-20 md:py-28 bg-bone overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 text-maroon-700 font-semibold tracking-widest uppercase text-xs mono">
            <span className="h-1.5 w-1.5 rounded-full bg-maroon-700 animate-pulse" />
            Testimonials
          </span>
          <h2 className="mt-3 font-display font-bold text-4xl md:text-5xl text-navy-900">
            Trusted by families across Delhi NCR
          </h2>
          <p className="mt-4 text-navy-700/70 text-lg leading-relaxed">
            Real experiences from patients and families who relied on our
            emergency ambulance services.
          </p>
        </motion.div>

        {/* Spotlight panel: stats + rotating testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 grid lg:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/10"
        >
          {/* Left: stats panel */}
          <div className="lg:col-span-2 bg-navy-900 text-bone p-9 sm:p-12 flex flex-col justify-between relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative">
              <p className="font-display font-black text-4xl sm:text-5xl leading-none">
                4.9
                <span className="text-2xl font-semibold text-navy-100/50">
                  /5
                </span>
              </p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-maroon-300 text-maroon-300"
                  />
                ))}
              </div>
              <p className="text-navy-100/70 text-sm mt-2">
                Based on 2,400+ verified reviews
              </p>
            </div>

            <div className="relative mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display font-bold text-3xl">98.4%</p>
                <p className="text-xs text-navy-100/60 mt-1">
                  On-time arrival
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl">12+</p>
                <p className="text-xs text-navy-100/60 mt-1">
                  Years of trust
                </p>
              </div>
            </div>

            {/* Navigation controls */}
            <div className="relative flex items-center gap-3 mt-10">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="h-10 w-10 rounded-full border border-bone/20 hover:bg-bone/10 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="h-10 w-10 rounded-full border border-bone/20 hover:bg-bone/10 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="flex gap-1.5 ml-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="p-1.5"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-6 bg-maroon-300"
                          : "w-1.5 bg-bone/25"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: rotating testimonial card */}
          <div className="lg:col-span-3 bg-white relative p-9 sm:p-12 flex items-center min-h-[380px]">
            <Quote className="absolute top-8 right-8 h-16 w-16 text-navy-50" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-maroon-700 text-maroon-700"
                    />
                  ))}
                </div>

                <p className="font-display text-2xl sm:text-3xl text-navy-900 leading-snug">
                  &ldquo;{active.review}&rdquo;
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <div className="h-12 w-12 rounded-full bg-maroon-700 text-bone flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                    {active.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-navy-900">
                      {active.name}
                    </h4>
                    <p className="text-sm text-navy-700/60">
                      {active.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}