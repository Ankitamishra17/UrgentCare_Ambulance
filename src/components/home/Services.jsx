"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HeartPulse,
  Activity,
  ShieldAlert,
  Plane,
  CalendarDays,
  Truck,
  ArrowRight,
  RotateCw,
} from "lucide-react";
// import BookPickupModal from "./BookPickupModal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const medicalServices = [
  {
    id: "01",
    icon: Truck,
    title: "Basic Life Support (BLS)",
    desc: "Non-invasive medical monitoring and comfortable transport staffed by certified EMTs for stable patients.",
    price: "2,500",
    unit: "base + ₹50/km",
    // Ambulance exterior, ready for dispatch
    image:
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    icon: HeartPulse,
    title: "Advanced Life Support (ALS)",
    desc: "High-tier emergency response featuring cardiac monitoring, IV therapy, airway management, and paramedic care.",
    price: "5,500",
    unit: "base + ₹80/km",
    // Ambulance crew and vehicle
    image:
      "https://images.pexels.com/photos/11085898/pexels-photo-11085898.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "03",
    icon: ShieldAlert,
    title: "Critical Care Transport (CCT)",
    desc: "ICU-to-ICU transfers utilizing specialized ventilators and state-of-the-art infusion pumps managed by critical care nurses.",
    price: "9,000",
    unit: "base + ₹120/km",
    // Ambulance with lights, critical response
    image:"https://images.unsplash.com/photo-1619025873875-59dfdd2bbbd6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "04",
    icon: Plane,
    title: "Air Ambulance Dispatch",
    desc: "Rapid fixed-wing or helicopter medical evacuation configured for immediate long-distance critical care transfers.",
    price: "85,000",
    unit: "flight hour",
    // Medical helicopter parked beside an ambulance
    image:
      "https://images.unsplash.com/photo-1696243144263-76fbba9f8d18?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "05",
    icon: CalendarDays,
    title: "Event Medical Cover",
    desc: "On-site standby ambulance infrastructure and dedicated first-responder teams deployed for public or private events.",
    price: "12,000",
    unit: "day rate",
    // Standby ambulance on-site
    image:
      "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "06",
    icon: Activity,
    title: "Neonatal Care Transport",
    desc: "Highly specialized mobile incubators engineered specifically for the safe transit of critical infants.",
    price: "11,000",
    unit: "transfer",
    // Infant in a medical incubator
    image:
      "https://images.unsplash.com/photo-1560306580-9e204fe45f3e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function AmbulanceServicesGrid() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" },
        },
      );

      gsap.fromTo(
        gridRef.current.children,
        { y: 50, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: { each: 0.1, grid: "auto", from: "start" },
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBookService = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-bone py-20 sm:py-32 relative overflow-hidden"
        id="medical-dispatch-catalog"
      >
        {/* Decorative Grid Mesh & Ambient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d0e0ee_1px,transparent_1px),linear-gradient(to_bottom,#d0e0ee_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-navy-50/60 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div ref={headerRef} className="max-w-3xl mb-16 sm:mb-24">
            <span className="mono text-[10px] font-bold tracking-[0.3em] text-[#851829] uppercase block mb-3">
              Fleet Operations &amp; Transport
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-navy-900 tracking-tight leading-[1.15]">
              Critical care parameters. <br />
              <span className="text-navy-900">
                Deployed instantly upon emergency protocol.
              </span>
            </h2>
          </div>

          {/* 3D FLIP CARD GRID */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {medicalServices.map((service) => {
              const {
                id,
                icon: Icon,
                title,
                desc,
                price,
                unit,
                image,
              } = service;
              return (
                <div
                  key={title}
                  className="group h-[420px] w-full [perspective:1000px] cursor-pointer"
                  onClick={() => handleBookService(service)}
                >
                  {/* Rotating 3D Container */}
                  <div className="relative h-full w-full rounded-[2.2rem] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md group-hover:shadow-[0_25px_60px_-15px_rgba(11,41,71,0.2)]">
                    {/* ================= FRONT FACE (IMAGE OVERLAY) ================= */}
                    <div className="absolute inset-0 h-full w-full rounded-[2.2rem] overflow-hidden [backface-visibility:hidden] bg-navy-900">
                      <Image
                        src={image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={id === "01" || id === "02"}
                        className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 filter brightness-[0.85] contrast-[1.05]"
                      />

                      {/* Contrast Dark Gradient Layer */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent z-10" />

                      {/* Front Content Stack */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between text-bone z-20">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-bone/10 backdrop-blur-md border border-bone/20 flex items-center justify-center text-bone">
                            <Icon size={22} className="stroke-[2.2]" />
                          </div>
                          <span className="mono text-xs font-black tracking-widest text-bone/50 bg-bone/5 px-2.5 py-1 rounded-md border border-bone/5">
                            DEPT-{id}
                          </span>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 text-xs mono text-maroon-300 font-semibold mb-2">
                            <RotateCw
                              size={12}
                              className="animate-spin"
                              style={{ animationDuration: "6s" }}
                            />
                            <span>HOVER TO INSPECT SYSTEM</span>
                          </div>
                          <h3 className="font-display text-2xl font-black tracking-tight text-bone leading-snug">
                            {title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* ================= BACK FACE (DETAILS & PRICING) ================= */}
                    <div className="absolute inset-0 h-full w-full rounded-[2.2rem] bg-white border border-navy-100 p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-lg z-30">
                      <div>
                        <div className="flex items-center justify-between pb-5 border-b border-navy-50 mb-5">
                          <span className="mono text-[10px] font-black uppercase tracking-widest text-navy-700 bg-navy-50 px-2.5 py-1 rounded-lg">
                            PROTOCOL // SYSTEM-{id}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center text-navy-700/60">
                            <Icon size={16} />
                          </div>
                        </div>

                        <h4 className="font-display text-xl font-black text-navy-900 tracking-tight">
                          {title}
                        </h4>
                        <p className="mt-3 text-xs sm:text-sm text-navy-700/60 leading-relaxed font-medium">
                          {desc}
                        </p>
                      </div>

                      {/* Back Footer Dynamic Dispatch Action Box */}
                      <div className="pt-5 border-t border-navy-50 flex items-center justify-between">
                        <div>
                          <span className="mono text-[9px] font-bold uppercase tracking-widest text-navy-700/40 block">
                            Baseline Fee
                          </span>
                          <div className="flex items-baseline gap-0.5 mt-0.5">
                            <span className="text-xl sm:text-2xl font-black font-display text-navy-900">
                              ₹{price}
                            </span>
                            <span className="text-[10px] font-semibold text-navy-700/40">
                              /{unit}
                            </span>
                          </div>
                        </div>

                        <button className="inline-flex items-center gap-2 rounded-xl bg-navy-700 text-bone px-4 py-3 font-black text-xs uppercase tracking-wider hover:bg-maroon-700 transition-colors shadow-md shadow-navy-900/20 hover:shadow-maroon-700/20">
                          <span>Dispatch</span>
                          <ArrowRight size={13} className="stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Modal Overlay Portal */}
      {isModalOpen && (
        <BookPickupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedService={selectedService}
        />
      )}
    </>
  );
}
