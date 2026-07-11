"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Users, 
  Plane, 
  Stethoscope, 
  Landmark, 
  FileText, 
  Globe2, 
  Ticket, 
  Stamp, 
  Languages, 
  Building 
} from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Briefcase, title: "Employment Visa", href: "/services/employment-visa", desc: "Fast-tracked processing for corporate and individual work visas." },
  { icon: Users, title: "Family Visa", href: "/services/family-visa", desc: "Seamless sponsorship processing for your loved ones." },
  { icon: Plane, title: "Tourist Visa", href: "/services/tourist-visa", desc: "Hassle-free visit visas for multiple GCC destinations." },
  { icon: Stethoscope, title: "Medical Processing", href: "/services/medical-processing", desc: "Streamlined medical typing and appointments." },
  { icon: Landmark, title: "Embassy Attestation", href: "/services/embassy-attestation", desc: "Official document legalization from all major embassies." },
  { icon: FileText, title: "PCC Services", href: "/services/pcc", desc: "Police Clearance Certificate acquisition and processing." },
  { icon: Globe2, title: "Emigration", href: "/services/emigration", desc: "Complete emigration clearance assistance." },
  { icon: Ticket, title: "Air Ticketing", href: "/services/ticketing", desc: "Corporate and individual travel arrangements." },
  { icon: Stamp, title: "Certificate Attestation", href: "/services/certificate-attestation", desc: "Educational and personal document attestation." },
  { icon: Languages, title: "Document Translation", href: "/services/translation", desc: "Legal translation services in multiple languages." },
  { icon: Building, title: "MOFA Services", href: "/services/mofa", desc: "Ministry of Foreign Affairs document clearance." },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edcs-navy mb-4">Core Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive immigration and document clearance solutions tailored for individuals and corporations across the GCC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-xl hover:border-edcs-gold/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-edcs-navy/5 text-edcs-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-edcs-navy group-hover:text-edcs-gold transition-colors duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-edcs-navy transition-colors">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
