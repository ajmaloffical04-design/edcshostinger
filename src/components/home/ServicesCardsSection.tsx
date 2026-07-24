"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const cards = [
  {
    title: "Golden Visa",
    desc: "This visa allows its holders to work and study in the United Arab Emirates without the need for a sponsor.",
    image: "/golden-visa.jpeg",
    href: "/services/pro-services/golden-visa/"
  },
  {
    title: "Amer Services",
    desc: "Complete your UAE immigration and residency procedures quickly and efficiently with our professional Amer Services. We provide end-to-end assistance for individuals, families, and businesses.",
    image: "/amer.png",
    href: "/services/pro-services/amer-services/"
  },
  {
    title: "Tasheel Services",
    desc: "Simplify your labor and employment procedures with our comprehensive Tasheel services. We provide fast, reliable, and government-compliant assistance for employers.",
    image: "/tasheel.png",
    href: "/services/pro-services/tasheel-services/"
  },
  {
    title: "DED Services",
    desc: "Comprehensive Dubai Department of Economy and Tourism (DET/DED) services for businesses at every stage. We simplify licensing, approvals, and compliance with fast, reliable support.",
    image: "/dubai-economy-and-tourism.png",
    href: "/services/pro-services/ded-services/"
  },
  {
    title: "UAE Free Zone Company Formation",
    desc: "Establish your business in a UAE Free Zone with a fast, cost-effective setup process. We provide expert support for seamless registration and 100% foreign ownership.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    href: "/services/free-zone-company-formation"
  },
  {
    title: "Family Visa",
    desc: "If you have a valid UAE resident visa, you can sponsor first-degree family members to come and live with you in the UAE.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    href: "/services/pro-services/family-visa/"
  },
  {
    title: "Investor Visa",
    desc: "Investors visa in Dubai is an excellent choice for foreign citizens who want to start a business or invest in an existing firm in Dubai.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    href: "/services/pro-services/investor-visa/"
  },
  {
    title: "Maid Visa",
    desc: "Sponsoring a maid in Dubai is not an easy task. You need to get acquainted with all the standards and regulations which are involved in the process.",
    image: "/maid-visa.png",
    href: "/services/pro-services/maid-visa/"
  }
];

export default function ServicesCardsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 text-lg leading-relaxed">
            We specialize in a full range of Visa processing services, including Visa applications, Visa renewals, and Visa cancellations in Dubai.
          </p>
        </div>

        {/* Carousel Area Wrapper */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button 
            onClick={scrollLeft} 
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-gray-600 hidden md:flex items-center justify-center shrink-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={scrollRight} 
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-gray-600 hidden md:flex items-center justify-center shrink-0"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col hover:shadow-lg transition-shadow shrink-0 snap-start w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm mb-6">{card.desc}</p>
                </div>
                
                <div className="flex flex-col mt-auto">
                  <div className="h-40 w-full rounded-xl overflow-hidden mb-6 relative bg-gray-50/10 shrink-0">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <Link href={card.href} className="text-edcs-navy font-medium inline-flex items-center group w-fit hover:text-edcs-gold transition-colors">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-2 md:hidden">
            <button 
              onClick={scrollLeft} 
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-gray-600 flex items-center justify-center shrink-0"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight} 
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-gray-600 flex items-center justify-center shrink-0"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* CSS to hide scrollbar for webkit browsers */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
}
