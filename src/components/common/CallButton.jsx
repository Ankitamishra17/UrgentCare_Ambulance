"use client";

import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] group">
      <a
        href="tel:+911234567890"
        aria-label="Call Now"
        className="flex items-center"
      >
        {/* Desktop Hover Label */}
        <div className="hidden md:block mr-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <div className="relative bg-[#851829] text-white px-5 py-3 rounded-lg font-semibold whitespace-nowrap shadow-lg">
            Call Now

            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-[#851829] rotate-45" />
          </div>
        </div>

        {/* Button */}
        <div className="relative">
          {/* Pulse */}
          <span className="absolute inset-0 rounded-full bg-[#851829] animate-ping opacity-30" />

          {/* Outer Circle */}
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full   flex items-center justify-center">
            {/* Inner Circle */}
            <div className="w-11 h-11 md:w-13 md:h-13 lg:w-15 lg:h-15 rounded-full bg-[#851829] flex items-center justify-center">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}