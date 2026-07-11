"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const countries = [
  { name: "United Arab Emirates", code: "ae", slug: "uae", desc: "Dubai, Abu Dhabi, Sharjah & more" },
  { name: "Saudi Arabia", code: "sa", slug: "saudi-arabia", desc: "Riyadh, Jeddah, Dammam & more" },
  { name: "Qatar", code: "qa", slug: "qatar", desc: "Doha & surrounding regions" },
  { name: "Kuwait", code: "kw", slug: "kuwait", desc: "Kuwait City & all regions" },
  { name: "Oman", code: "om", slug: "oman", desc: "Muscat, Salalah & more" },
  { name: "Bahrain", code: "bh", slug: "bahrain", desc: "Manama & surrounding areas" },
];

export default function CountriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-edcs-navy mb-4">GCC Coverage</h2>
            <p className="text-lg text-gray-600">
              Authorized visa processing and document clearance across all major Gulf Cooperation Council nations.
            </p>
          </div>
          <Link href="/countries" className="text-edcs-navy font-semibold hover:text-edcs-gold transition-colors whitespace-nowrap">
            View All Regions &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link href={`/${country.slug}`} className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-edcs-navy/90 via-edcs-navy/40 to-transparent z-10 transition-opacity duration-300 group-hover:from-edcs-navy"></div>
                {/* Fallback pattern if we don't have actual flag images, using unsplash as a placeholder for country vibes */}
                <div className="relative h-64 w-full bg-gray-200">
                  <Image 
                    src={`https://flagcdn.com/w1280/${country.code}.jpg`}
                    alt={`${country.name} Flag`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-edcs-gold transition-colors">{country.name}</h3>
                  <p className="text-gray-200 text-sm opacity-90">{country.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
