"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const cards = [
  {
    title: "Legal Translation Services",
    desc: "Ensure your documents are accurately translated and accepted by UAE government authorities. We provide certified legal translation services for personal, corporate, legal, and official documents with accuracy, confidentiality, and quick turnaround.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    href: "/services/legal-translation"
  },
  {
    title: "Certificate Attestation Services",
    desc: "Get your documents officially authenticated for use in the UAE or abroad. We handle the complete attestation process for personal, educational, and commercial documents, ensuring compliance with the relevant authorities.",
    image: "/certificate-attestation-services.jpeg",
    href: "/services/certificate-attestation"
  },
  {
    title: "Health Insurance Services",
    desc: "Protect yourself, your family, and your employees with comprehensive UAE Health Insurance solutions. We help individuals, families, and businesses find the right insurance plans that meet UAE regulatory requirements while offering reliable medical coverage at competitive prices.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
    href: "/services/health-insurance"
  },
  {
    title: "Emirates ID Services",
    desc: "Get your UAE Emirates ID services completed quickly and efficiently with our professional assistance. We provide complete support for new applications, renewals, replacements, and updates while ensuring a smooth and hassle-free process.",
    image: "/emirates-identity-authority.png",
    href: "/services/emirates-id"
  },
  {
    title: "Medical Fitness Services",
    desc: "Complete your UAE medical fitness requirements quickly and efficiently with our professional assistance. We help individuals and businesses manage the medical fitness process required for residence visas, employment visas, family visas, and other immigration procedures.",
    image: "/dubai-health-authority.png",
    href: "/services/medical-fitness"
  }
];

export default function LegalServicesSection() {
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
    <section className="py-16 bg-[#FAFAFA] border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-left">
              <span className="text-edcs-navy">Legal</span> Services
            </h2>
            <Link href="/services" className="hidden md:inline-flex items-center text-edcs-navy font-medium hover:text-edcs-gold transition-colors group border border-gray-200 rounded-full px-5 py-2 bg-white text-sm">
              View All
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left w-full">
            Having dealt with many clients in our line of work, we are experienced in the line of business services and Visa applications.
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
                className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-gray-50 flex flex-col hover:shadow-lg transition-shadow shrink-0 snap-start w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
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
