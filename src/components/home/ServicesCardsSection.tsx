"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Golden Visa",
    desc: "This visa allows its holders to work and study in the United Arab Emirates without the need for a sponsor.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
    href: "/services/golden-visa"
  },
  {
    title: "Amer Services",
    desc: "Complete your UAE immigration and residency procedures quickly and efficiently with our professional Amer Services. We provide end-to-end assistance for individuals, families, and businesses.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    href: "/services/amer-services"
  },
  {
    title: "Tasheel Services",
    desc: "Simplify your labor and employment procedures with our comprehensive Tasheel services. We provide fast, reliable, and government-compliant assistance for employers.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    href: "/services/tasheel-services"
  },
  {
    title: "DED Services",
    desc: "Comprehensive Dubai Department of Economy and Tourism (DET/DED) services for businesses at every stage. We simplify licensing, approvals, and compliance with fast, reliable support.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    href: "/services/ded-services"
  },
  {
    title: "UAE Free Zone Company Formation",
    desc: "Establish your business in one of the UAE's leading Free Zones with a fast, cost-effective, and investor-friendly setup process. We help entrepreneurs, startups, SMEs, and international companies register and operate their businesses with complete compliance and professional support. Free Zones offer 100% foreign ownership, simplified procedures, and access to world-class business infrastructure.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    href: "/services/free-zone-company-formation"
  },
  {
    title: "Family Visa",
    desc: "If you have a valid UAE resident visa, you can sponsor first-degree family members to come and live with you in the UAE.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    href: "/services/family-visa"
  },
  {
    title: "Investor Visa",
    desc: "Investors visa in Dubai is an excellent choice for foreign citizens who want to start a business or invest in an existing firm in Dubai.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "/services/investor-visa"
  },
  {
    title: "Maid Visa",
    desc: "Sponsoring a maid in Dubai is not an easy task. You need to get acquainted with all the standards and regulations which are involved in the process.",
    image: "https://images.unsplash.com/photo-1584427457788-297eb0ea7fdb?q=80&w=800&auto=format&fit=crop",
    href: "/services/maid-visa"
  }
];

export default function ServicesCardsSection() {
  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            We specialize in a full range of Visa processing services, including Visa applications, Visa renewals, and Visa cancellations in Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col h-full hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">{card.desc}</p>
              
              <div className="h-40 w-full rounded-xl overflow-hidden mb-6 relative">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="mt-auto">
                <Link href={card.href} className="text-edcs-navy font-medium inline-flex items-center group w-fit hover:text-edcs-gold transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
