import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function GoldenVisaPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-[#29323c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop"
            alt="Golden Visa Signing"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">UAE Golden Visa</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Secure long-term residency in the UAE with our end-to-end Golden Visa services.
          </p>
          
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "golden-visa"} 
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
          <h2 className="text-3xl font-bold text-edcs-navy mb-6">UAE Golden Visa Application</h2>
          <p className="text-gray-700 leading-relaxed">
            Secure long-term residency in the UAE with our end-to-end Golden Visa services. Whether you qualify as a property investor, entrepreneur, skilled professional, exceptional talent, or outstanding student, our experts guide you through every step of the application process for a smooth and hassle-free experience. The UAE Golden Visa offers renewable long-term residency with multiple eligibility categories and benefits.
          </p>
        </div>
        </div></section>

      {/* Services List Section (Colored Banner) */}
      <section className="py-16 lg:py-24 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-10 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Golden Visa Services</h2>
            <p className="text-white/90">
              We provide comprehensive services to handle every aspect of your Golden Visa application.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Property Investor Golden Visa",
                "Professional & Skilled Employee Golden Visa",
                "Entrepreneur & Business Owner Golden Visa",
                "Outstanding Student & Graduate Golden Visa",
                "Scientists, Researchers & Exceptional Talent",
                "Document verification & eligibility assessment",
                "Application submission & approval assistance",
                "Emirates ID & medical test coordination",
                "Family sponsorship assistance",
                "Visa renewal support"
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
          
          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Benefits of a UAE Golden Visa</h2>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Long-term renewable residency (5 or 10 years, depending on eligibility)",
                "No local sponsor required",
                "Sponsor your spouse, children, and eligible family members",
                "Freedom to live, work, and study in the UAE",
                "Multiple-entry permit for eligible new applicants",
                "Greater flexibility to remain outside the UAE while maintaining residency, subject to applicable rules."
              ].map((reason, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-edcs-gold mr-3 mt-2 shrink-0"></div>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-gray-100" />

          {/* Why Choose Us */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed">
              Our experienced PRO consultants provide complete support—from eligibility assessment and document preparation to application submission and post-approval services. We ensure a fast, transparent, and stress-free Golden Visa process tailored to your eligibility category.
            </p>
          </div>
        </div>
        </div></section>

      {/* Tagline Banner */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center space-y-4">
          <h2 className="text-3xl font-bold text-edcs-navy">Your Trusted Partner for UAE Golden Visa Services</h2>
          <p className="text-lg text-gray-600">
            Expert guidance, fast processing, transparent pricing, and complete support for your long-term UAE residency.
          </p>
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
            href={"/apply?service=" + "golden-visa"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
