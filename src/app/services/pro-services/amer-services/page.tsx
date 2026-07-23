import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function AmerServicesPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-[#29323c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1920&auto=format&fit=crop"
            alt="Amer Services in UAE"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Amer Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Amer Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Complete your UAE immigration and residency procedures quickly and efficiently with our professional assistance.
          </p>
          
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "amer-services"} 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Apply for this service
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold text-edcs-navy mb-6">Professional Amer Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Complete your UAE immigration and residency procedures quickly and efficiently with our professional Amer Services. We provide end-to-end assistance for individuals, families, and businesses, ensuring a smooth process with the relevant government authorities.
          </p>
        </div>
        </div></section>

      {/* Services List Section (Colored Banner) */}
      <section className="py-16 lg:py-24 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-10 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Amer Services</h2>
            <p className="text-white/90">
              We handle all types of immigration, residency, and typing services to save you time and hassle.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "New Residence Visa",
                "Residence Visa Renewal",
                "Visa Cancellation",
                "Status Change",
                "Entry Permit Services",
                "Family Visa",
                "Golden Visa Assistance",
                "Emirates ID Coordination",
                "Overstay Fine Assistance",
                "Travel Report & Immigration Services",
                "Residency Amendment Services",
                "Dependent Sponsorship",
                "Lost Visa & Entry Permit Services",
                "GDRFA Application Support",
                "Document Printing & Typing Services"
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-12">
          
          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Fast and reliable processing",
                "Experienced PRO consultants",
                "Transparent pricing",
                "Accurate documentation",
                "Personalized customer support",
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

          {/* Who Can Benefit */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Who Can Benefit?</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "UAE Residents",
                "Families",
                "Investors",
                "Employees",
                "Business Owners",
                "Visitors"
              ].map((beneficiary, index) => (
                <span key={index} className="px-6 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                  {beneficiary}
                </span>
              ))}
            </div>
          </div>
          
        </div>
        </div></section>

    
      {/* Bottom CTA Section */}
      <section className="py-16 lg:py-24 bg-edcs-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">
            Apply now and let our experts handle your service request quickly and efficiently.
          </p>
          <Link 
            href={"/apply?service=" + "amer-services"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
