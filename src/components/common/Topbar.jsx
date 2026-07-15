"use client";

import { Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-navy-900 text-bone text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-maroon-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-maroon-300" />
          </span>
          <span className="font-medium tracking-wide hidden sm:inline">
            24/7 Emergency Response &mdash; Delhi NCR
          </span>
          <span className="font-medium tracking-wide sm:hidden">24/7 Emergency</span>
        </div>
        <a
          href="tel:+919540767878"
          className="flex items-center gap-1.5 font-semibold text-bone hover:text-maroon-100 transition-colors"
        >
          <Phone className="h-4 w-4" />
          +91 9540767878
        </a>
      </div>
    </div>
  );
}