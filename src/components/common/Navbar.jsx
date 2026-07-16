"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Phone, Menu, X, Home, Info, Ambulance, Mail } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/services", label: "Services", icon: Ambulance },
  { href: "/contact", label: "Contact", icon: Mail },
];

const mobileList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const mobileItem = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 12);
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{
          boxShadow: scrolled
            ? "0 12px 30px -14px rgba(11,41,71,0.22)"
            : "0 0px 0px rgba(11,41,71,0)",
        }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-40 bg-bone/90 backdrop-blur-md border-b border-navy-100"
      >
        {/* Scroll progress accent */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute top-0 left-0 right-0 h-[2px] bg-maroon-700 origin-left z-50"
        />

        <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.06, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <Image
                src="/logo.png"
                alt="UrgentCare Ambulance"
                width={106}
                height={46}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 font-medium text-[15px] bg-navy-50/60 border border-navy-100 rounded-full p-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 rounded-full transition-colors duration-200 ${
                    isActive ? "text-bone" : "text-navy-900 hover:text-navy-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      className="absolute inset-0 bg-navy-700 rounded-full shadow-sm -z-10"
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex flex-col items-end leading-tight mr-1">
              <span className="text-[11px] text-navy-700/50 mono uppercase tracking-wider">
                24/7 Dispatch
              </span>
              <span className="text-sm font-semibold text-navy-900">
                Always answering
              </span>
            </div>
            <motion.a
              href="tel:+919540767878"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 10px 24px -8px rgba(133,24,41,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              className="dot-pulse flex items-center gap-2 bg-maroon-700 text-bone font-display font-semibold text-lg tracking-wide px-5 py-2.5 rounded-full transition-colors"
            >
              <Phone className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden relative h-10 w-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-700 border border-navy-100"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      {/* Right-to-Left Side Drawer Component */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 md:hidden pointer-events-none">
            
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm pointer-events-auto"
              transition={{ duration: 0.4 }}
            />

            {/* Side Drawer Panel Sheet */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              /* Slower, premium easing transition curve instead of snappy spring */
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-0 right-0 bottom-0 w-[300px] bg-bone shadow-2xl border-l border-navy-100 flex flex-col pointer-events-auto"
            >
              {/* Drawer Top Branding Header with Logo & Close Button */}
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-navy-100/80">
                <Image
                  src="/logo.png"
                  alt="UrgentCare Ambulance"
                  width={96}
                  height={42}
                  priority
                />
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-full bg-navy-50 flex items-center justify-center text-navy-700 border border-navy-100"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Dynamic Responsive Menu Navigation Grid Sheet */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <motion.div
                  variants={mobileList}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-2 bg-navy-50/60 border border-navy-100 rounded-3xl p-2"
                >
                  {links.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <motion.div key={link.href} variants={mobileItem}>
                        <Link
                          href={link.href}
                          className={`relative flex items-center gap-4 py-3 px-4 rounded-2xl transition-colors duration-200 text-[15px] font-medium w-full z-10 ${
                            isActive ? "text-bone font-semibold" : "text-navy-900"
                          }`}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="mobileNavPill"
                              transition={{ type: "spring", stiffness: 400, damping: 34 }}
                              className="absolute inset-0 bg-navy-700 rounded-2xl shadow-sm -z-10"
                            />
                          )}
                          <Icon className="h-4 w-4 shrink-0" />
                          <span>{link.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Mobile Sidebar Call Now Action Button */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-8"
                >
                  <a
                    href="tel:+919540767878"
                    className="dot-pulse flex items-center justify-center gap-2 bg-maroon-700 text-bone font-display font-semibold text-base py-4 rounded-2xl shadow-md shadow-maroon-700/20 w-full"
                  >
                    <Phone className="h-4 w-4 relative z-10" />
                    <span className="relative z-10">Call Now: +91 9540767878</span>
                  </a>
                </motion.div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}