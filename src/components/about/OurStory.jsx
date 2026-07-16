"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeartPulse, Ambulance, Clock3, Quote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IMAGE =
  "https://images.pexels.com/photos/11085898/pexels-photo-11085898.jpeg";

const features = [
  {
    icon: HeartPulse,
    title: "Advanced Medical Support",
    desc: "Equipped with modern life-saving medical equipment.",
  },
  {
    icon: Ambulance,
    title: "Modern Ambulance Fleet",
    desc: "ICU, ventilator, cardiac, and patient transfer ambulances.",
  },
  {
    icon: Clock3,
    title: "24/7 Emergency Availability",
    desc: "Ready to respond anytime, day or night.",
  },
];

export default function OurStory() {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);
  const floatCardRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const featuresRef = useRef(null);

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
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );

      gsap.fromTo(
        floatCardRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(1.6)",
          delay: 0.4,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.7 },
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });

      tl.fromTo(badgeRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1 })
        .fromTo(
          headingRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1 },
          "-=0.4",
        )
        .fromTo(
          paraRef.current.children,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.12 },
          "-=0.35",
        )
        .fromTo(
          featuresRef.current.children,
          { x: 24, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.15 },
          "-=0.2",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-bone overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div
              ref={imageWrapRef}
              className="relative overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/15 border border-navy-100"
            >
              <img
                src={IMAGE}
                alt="RapidCare ambulance service"
                className="w-full h-[460px] md:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div
              ref={floatCardRef}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-navy-900 text-bone rounded-2xl p-6 shadow-2xl shadow-navy-900/30 border border-navy-700 max-w-[220px]"
            >
              <Quote className="h-5 w-5 text-maroon-300" />
              <p className="text-sm text-navy-100/85 leading-relaxed mt-2">
                Every minute matters &mdash; our mission since day one.
              </p>
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-bone/10">
                <span className="font-display font-bold text-2xl">10+</span>
                <span className="text-xs text-navy-100/60">
                  years of emergency care
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 text-maroon-700 font-semibold uppercase tracking-widest text-xs mono"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-maroon-700 animate-pulse" />
              Our Story
            </span>

            <h2
              ref={headingRef}
              className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy-900 leading-tight"
            >
              Delivering care when every second counts
            </h2>

            <div ref={paraRef}>
              <p className="mt-6 text-navy-700/70 leading-relaxed">
                RapidCare Ambulance was founded with a simple mission: providing
                fast, reliable, and professional emergency medical
                transportation. We understand that during emergencies, every
                minute matters, which is why our team is available 24/7 to serve
                patients and families.
              </p>
              <p className="mt-4 text-navy-700/70 leading-relaxed">
                With a fleet of advanced ambulances, trained paramedics, and
                state-of-the-art life support equipment, we ensure safe and
                timely transportation to hospitals and healthcare facilities.
              </p>
            </div>

            {/* Features */}
            <div ref={featuresRef} className="mt-8 space-y-5">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 bg-white border border-navy-100 rounded-2xl p-5 hover:border-navy-700 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-maroon-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-maroon-700" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-navy-900">
                      {title}
                    </h3>
                    <p className="text-navy-700/70 text-sm mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
