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
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
};

const mobileItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
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

  return (
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
        className="absolute top-0 left-0 right-0 h-[2px] bg-maroon-700 origin-left"
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

        <div className="hidden md:flex items-center gap-1 font-medium text-[15px] bg-navy-50/60 border border-navy-100 rounded-full p-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-bone"
                    : "text-navy-900 hover:text-navy-900"
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

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative h-10 w-10 rounded-full bg-navy-50 flex items-center justify-center text-navy-700"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-bone border-t border-navy-100"
          >
            <motion.div
              variants={mobileList}
              initial="hidden"
              animate="show"
              className="flex flex-col px-5 py-4 gap-1.5"
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <motion.div key={link.href} variants={mobileItem}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors ${
                        isActive
                          ? "bg-navy-700/50 text-bone font-semibold"
                          : "text-navy-900 hover:bg-navy-50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.a
                variants={mobileItem}
                href="tel:+911800123456"
                className="dot-pulse mt-3 flex items-center justify-center gap-2 bg-maroon-700 text-bone font-display font-semibold text-lg py-3.5 rounded-xl"
              >
                <Phone className="h-4 w-4 relative z-10" />
                <span className="relative z-10">Call Now: 1800-123-456</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
