import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function FreeZoneCompanyFormationPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-[#29323c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1920&auto=format&fit=crop"
            alt="UAE Free Zone Company Formation"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">UAE Free Zone Company Formation</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Fast, cost-effective, and investor-friendly setup process in the UAE's leading Free Zones.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-bold text-edcs-navy mb-6">Establish Your Business in the UAE</h2>
          <p className="text-gray-700 leading-relaxed">
            Establish your business in one of the UAE's leading Free Zones with a fast, cost-effective, and investor-friendly setup process. We help entrepreneurs, startups, SMEs, and international companies register and operate their businesses with complete compliance and professional support. Free Zones offer 100% foreign ownership, simplified procedures, and access to world-class business infrastructure.
          </p>
        </div>
      </section>

      {/* Services List Section (Colored Banner) */}
      <section className="py-8 lg:py-16 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Free Zone Services</h2>
            <p className="text-white/90">
              We provide comprehensive services to handle every aspect of your Free Zone company formation and operation.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Free Zone company incorporation",
                "Trade license issuance & renewal",
                "Trade name reservation",
                "Business activity selection",
                "Investor & employee visa processing",
                "Establishment Card assistance",
                "Emirates ID & medical coordination",
                "Office, Flexi Desk & warehouse solutions",
                "Corporate bank account guidance",
                "License amendments & company restructuring",
                "PRO & document clearing services",
                "Company liquidation & deregistration"
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Why Choose a UAE Free Zone */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose a UAE Free Zone?</h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "100% foreign ownership",
                "Fast company registration",
                "Affordable startup packages",
                "Multiple business activities available",
                "Flexible office and Flexi Desk options",
                "Investor and employee visa eligibility",
                "Modern business infrastructure"
              ].map((reason, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-edcs-gold mr-3"></div>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic">
              Ideal for international trading, consulting, e-commerce, technology, logistics, and professional services.
            </p>
          </div>

          <hr className="border-gray-100" />

          {/* Industries We Serve */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Industries We Serve</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Trading & General Trading",
                "E-commerce",
                "IT & Software",
                "Consultancy",
                "Marketing & Media",
                "Logistics & Supply Chain",
                "Manufacturing",
                "Education & Training",
                "Healthcare",
                "Professional Services"
              ].map((industry, index) => (
                <span key={index} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                  {industry}
                </span>
              ))}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed">
              Our experienced PRO specialists provide end-to-end support—from selecting the right Free Zone and business activity to obtaining your trade license, visas, and post-setup compliance. We ensure a smooth, transparent, and hassle-free business setup experience across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl font-bold text-edcs-navy">Start Your UAE Free Zone Company with Confidence</h2>
          <p className="text-lg text-gray-600">
            Fast setup, 100% foreign ownership, visa assistance, licensing, and complete PRO support—all in one place.
          </p>
        </div>
      </section>

    </main>
  );
}
