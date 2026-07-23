import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function EmiratesIdPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-[#29323c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
            alt="Emirates ID Services"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - ID Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Emirates ID</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">Emirates ID Services</h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Get your UAE Emirates ID services completed quickly and efficiently with our professional assistance.
          </p>
          <div className="mt-8">
            <Link 
              href="/apply?service=emirates-id" 
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
            Get your UAE Emirates ID services completed quickly and efficiently with our professional assistance. We provide complete support for new applications, renewals, replacements, and updates while ensuring a smooth and hassle-free process.
          </p>
        </div>
      </section>

      {/* Services List Section (Colored Banner) */}
      <section className="py-8 lg:py-16 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Emirates ID Services</h2>
            <p className="text-white/90">
              We cover all your Emirates ID application and amendment needs.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "New Emirates ID Application",
                "Emirates ID Renewal",
                "Emirates ID Replacement (Lost/Damaged)",
                "Emirates ID Status Check",
                "Emirates ID Data Update",
                "Emirates ID Printing Assistance",
                "Emirates ID for New Visa Holders",
                "Family & Dependent Emirates ID Services",
                "Employee Emirates ID Services",
                "Emirates ID Support for Visa Amendments"
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
                "Fast and reliable service",
                "Complete document assistance",
                "Professional PRO support",
                "Accurate application processing",
                "Guidance throughout the process",
                "Support across all UAE emirates"
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
            <h3 className="text-xl font-bold text-edcs-navy mb-2">Your Trusted Emirates ID Service Partner</h3>
            <p className="text-gray-600">
              Fast, reliable, and hassle-free Emirates ID solutions for applications, renewals, replacements, and updates across the UAE.
            </p>
          </div>
          
        </div>
      </section>
    </main>
  );
}
