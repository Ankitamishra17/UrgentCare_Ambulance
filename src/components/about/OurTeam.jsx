"use client";

import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Ambulance, PhoneCall } from "lucide-react";

const teamMembers = [
  {
    id: "RC-014",
    name: "Dr. Rajesh Sharma",
    role: "Medical Director",
    since: "2014",
    icon: Stethoscope,
    image: "https://i.pinimg.com/736x/f1/a6/64/f1a664d4fa036551fd648e8f728cdcc4.jpg",
    tag: "Medical",
  },
  {
    id: "RC-027",
    name: "Ankit Verma",
    role: "Senior Paramedic",
    since: "2017",
    icon: HeartPulse,
    image: "https://i.pinimg.com/1200x/54/0a/82/540a8268115c5c900e6d01301ed057bd.jpg",
    tag: "Paramedic",
  },
  {
    id: "RC-041",
    name: "Rohit Singh",
    role: "Emergency Driver",
    since: "2019",
    icon: Ambulance,
    image:
      "https://i.pinimg.com/736x/71/13/7f/71137f2c52452a173da68caed0533321.jpg",
    tag: "Fleet",
  },
  {
    id: "RC-052",
    name: "Priya Mehta",
    role: "Dispatch Coordinator",
    since: "2020",
    icon: PhoneCall,
    image:
      "https://i.pinimg.com/736x/b5/73/b4/b573b4e261337153d001d410c553c631.jpg",
    tag: "Dispatch",
  },
];

const tagColors = {
  Medical: "bg-navy-700",
  Paramedic: "bg-maroon-700",
  Fleet: "bg-navy-500",
  Dispatch: "bg-maroon-500",
};

export default function MeetOurTeam() {
  return (
    <section className="py-20 md:py-28 bg-bone">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-maroon-700 font-semibold uppercase tracking-widest text-xs mono">
            <span className="h-1.5 w-1.5 rounded-full bg-maroon-700 animate-pulse" />
            Meet Our Team
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-navy-900">
            Dedicated professionals ready to help
          </h2>

          <p className="mt-5 text-navy-700/70 leading-relaxed">
            Our experienced medical staff, paramedics, emergency drivers, and
            support team work together to deliver fast, safe, and compassionate
            emergency care.
          </p>
        </motion.div>

        {/* Team Grid — staff ID badge cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -8, rotate: -1.5 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group relative"
              >
               

                {/* Badge card */}
                <div className="relative bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-lg group-hover:shadow-2xl group-hover:shadow-navy-900/15 transition-shadow duration-300">
                  {/* Department stripe */}
                  <div
                    className={`h-2.5 ${tagColors[member.tag] || "bg-maroon-700"}`}
                  />

                  {/* Photo */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />

                    {/* Role icon badge, overlaps photo/content boundary */}
                    <div
                      className={`absolute -bottom-2 left-6 h-12 w-12 rounded-xl text-bone flex items-center justify-center shadow-lg border-2 border-white ${tagColors[member.tag] || "bg-maroon-700"}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* ID number */}
                    <span className="absolute top-3 right-3 text-[10px] font-semibold tracking-widest mono text-bone/90 bg-navy-900/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      {member.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-8 pb-6 px-6">
                    <h3 className="text-lg font-display font-bold text-navy-900 leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-maroon-700 text-sm font-medium mt-0.5">
                      {member.role}
                    </p>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-navy-50">
                      <span className="text-[11px] font-medium text-navy-700/50 uppercase tracking-wider mono">
                        {member.tag}
                      </span>
                      <span className="text-[11px] text-navy-700/50 mono">
                        Since {member.since}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
