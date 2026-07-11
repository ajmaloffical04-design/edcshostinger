import HeroSection from "@/components/home/HeroSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";

import ServicesCardsSection from "@/components/home/ServicesCardsSection";
import LegalServicesSection from "@/components/home/LegalServicesSection";
import PaymentMethodsSection from "@/components/home/PaymentMethodsSection";



import TestimonialsSection from "@/components/home/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />

      <ServicesCardsSection />
      <LegalServicesSection />
      <PaymentMethodsSection />
      
      {/* Trusted By / Certifications */}
      <section className="py-10 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Authorized Processing Partner For
          </p>
          <div className="flex justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos would go here, placeholders for now */}
            <div className="font-bold text-xl md:text-2xl text-gray-800">Ministry of Foreign Affairs</div>
            <div className="font-bold text-xl md:text-2xl text-gray-800">GCC Embassies</div>
            <div className="font-bold text-xl md:text-2xl text-gray-800">Ministry of Health</div>
          </div>
        </div>
      </section>




      <TestimonialsSection />
    </>
  );
}
