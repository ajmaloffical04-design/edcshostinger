"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Successful Applications" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "GCC Authorized" },
  { icon: ShieldCheck, value: "24/7", label: "Client Support" },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-edcs-navy text-white border-y border-edcs-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center px-4"
            >
              <stat.icon className="w-10 h-10 text-edcs-gold mb-4" />
              <h4 className="text-4xl font-bold mb-2 tracking-tight">{stat.value}</h4>
              <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
