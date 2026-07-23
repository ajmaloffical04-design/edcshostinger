import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function MedicalFitnessPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-[#29323c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop"
            alt="Medical Fitness Services"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Medical</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Medical Fitness</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">Medical Fitness Services</h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Complete your UAE medical fitness requirements quickly and efficiently with our professional assistance.
          </p>
          <div className="mt-8">
            <Link 
              href="/apply?service=medical-fitness" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-edcs-gold hover:bg-yellow-500 rounded-md transition-colors shadow-sm"
            >
              Apply for this service
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            Complete your UAE medical fitness requirements quickly and efficiently with our professional assistance. We help individuals and businesses manage the medical fitness process required for residence visas, employment visas, family visas, and other immigration procedures.
          </p>
        </div>
      </section>

      {/* Services List Section (Colored Banner) */}
      <section className="py-8 lg:py-16 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Medical Fitness Services</h2>
            <p className="text-white/90">
              We coordinate medical test bookings and results for a smooth visa process.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Medical Fitness Test Booking",
                "Employment Visa Medical",
                "Family Visa Medical",
                "Investor Visa Medical",
                "Golden Visa Medical",
                "VIP & Express Medical Services",
                "Medical Test Status Assistance",
                "Medical Report Collection",
                "Visa Medical Renewal",
                "Medical Coordination with Emirates ID & Visa Processing"
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
          
          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Fast appointment scheduling",
                "Express and VIP options available",
                "Professional PRO support",
                "Smooth and hassle-free processing",
                "Transparent pricing",
                "Assistance across all UAE emirates"
              ].map((reason, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-edcs-gold mr-3"></div>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Tagline */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-edcs-navy mb-2">Fast & Hassle-Free UAE Medical Fitness Services</h3>
            <p className="text-gray-600">
              Quick medical test booking, expert assistance, and seamless coordination for your UAE visa and residency requirements.
            </p>
          </div>
          
        </div>
      </section>
    </main>
  );
}
