"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, FileCheck, Stethoscope, FileText, Landmark, Book, Briefcase, Calculator, HeartPulse, Home, Plane, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Business Setup",
    desc: "Business License, Trade License, Mainland & Free Zone Setup.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    icon: Building2,
    href: "/services/business-setup"
  },
  {
    title: "Visa Services",
    desc: "Employment, Family, Tourist, Golden, Investor & Residence Visas.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    icon: FileCheck,
    href: "/services/visa-services"
  },
  {
    title: "Medical & Emirates ID",
    desc: "Medical Fitness Test, Emirates ID Registration & Biometrics.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    icon: Stethoscope,
    href: "/services/medical-emirates-id"
  },
  {
    title: "Document Services",
    desc: "Certificate, MOFA & Embassy Attestation, Legal Translation.",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0eb3faf?q=80&w=800&auto=format&fit=crop",
    icon: FileText,
    href: "/services/document-services"
  },
  {
    title: "Government Services",
    desc: "Tawjeeh, Tasheel, Amer & Immigration Services.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    icon: Landmark,
    href: "/services/government-services"
  },
  {
    title: "Passport Services",
    desc: "Passport Renewal, Application Assistance & Corrections.",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop",
    icon: Book,
    href: "/services/passport-services"
  },
  {
    title: "Labour & Immigration",
    desc: "Labour Card, Contracts, Work Permit Processing.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    icon: Briefcase,
    href: "/services/labour-immigration"
  },
  {
    title: "Corporate Compliance",
    desc: "VAT Registration, Corporate Tax, Accounting & Bookkeeping.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    icon: Calculator,
    href: "/services/corporate-compliance"
  },
  {
    title: "Health & Insurance",
    desc: "Mandatory Health, Employee & Family Medical Insurance.",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d786a2b?q=80&w=800&auto=format&fit=crop",
    icon: HeartPulse,
    href: "/services/health-insurance"
  },
  {
    title: "Property & Legal",
    desc: "Ejari, Power of Attorney & Legal Documentation.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    icon: Home,
    href: "/services/property-legal"
  },
  {
    title: "Travel Services",
    desc: "Air Ticket Booking, Travel Insurance & Airport Assistance.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    icon: Plane,
    href: "/services/travel-services"
  },
  {
    title: "PRO Services",
    desc: "Government Liaison, Document Delivery & PRO Support.",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
    icon: Users,
    href: "/services/pro-services"
  }
];

export default function PremiumServicesSection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600 bg-white shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            Our Premium Services
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
            Reliable Government & Visa Solutions for Individuals and Businesses
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            From business setup and employment visas to document attestation, Emirates ID, and corporate compliance, EDCS provides end-to-end government and immigration solutions across the UAE. Our experienced consultants ensure every application is processed accurately, efficiently, and in full compliance with UAE regulations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto">
              Get Free Consultation
            </Link>
            <Link href="/apply" className="px-8 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-sm">
              Apply for a Service
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link href={service.href} key={service.title} className="group h-[380px] block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white rounded-3xl p-6 h-full flex flex-col relative overflow-hidden transition-colors duration-300 group-hover:bg-gray-900 shadow-[0_2px_10px_rgb(0,0,0,0.04)] border border-gray-100 group-hover:border-gray-800"
              >
                {/* Top arrow icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center bg-white z-10 transition-colors duration-300 group-hover:bg-gray-800 group-hover:border-gray-700">
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </div>

                <div className="relative z-10 flex-grow pr-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Bottom Image with overlay icon */}
                <div className="h-44 w-full rounded-2xl overflow-hidden mt-6 relative z-0">
                  <Image 
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Bottom Left Icon */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transition-colors duration-300 group-hover:bg-gray-800">
                    <service.icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
