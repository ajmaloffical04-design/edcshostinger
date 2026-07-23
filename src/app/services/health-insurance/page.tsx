import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function HealthInsurancePage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-[#29323c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1920&auto=format&fit=crop"
            alt="Health Insurance Services"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Insurance</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Health Insurance</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">Health Insurance Services</h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Protect yourself, your family, and your employees with comprehensive UAE Health Insurance solutions.
          </p>
          <div className="mt-8">
            <Link 
              href="/apply?service=health-insurance" 
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
            Protect yourself, your family, and your employees with comprehensive UAE Health Insurance solutions. We help individuals, families, and businesses find the right insurance plans that meet UAE regulatory requirements while offering reliable medical coverage at competitive prices.
          </p>
        </div>
      </section>

      {/* Services List Section (Colored Banner) */}
      <section className="py-8 lg:py-16 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Health Insurance Services</h2>
            <p className="text-white/90">
              We offer plans that are tailored for individuals, families, and organizations.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Individual Health Insurance",
                "Family Health Insurance",
                "Employee & Group Medical Insurance",
                "Health Insurance for Visa Processing",
                "Domestic Worker (Maid) Insurance",
                "Visitor & Travel Medical Insurance",
                "Basic & Comprehensive Health Plans",
                "Insurance Renewal",
                "Policy Upgrades & Amendments",
                "Claims & Policy Support"
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
                "Plans from leading UAE insurance providers",
                "Affordable premiums",
                "Fast policy issuance",
                "Expert plan comparison",
                "Transparent pricing",
                "Dedicated customer support",
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
                "Individuals",
                "Families",
                "Employees",
                "Employers",
                "Domestic Worker Sponsors",
                "Visitors & Tourists"
              ].map((beneficiary, index) => (
                <span key={index} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                  {beneficiary}
                </span>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
            <h3 className="text-xl font-bold text-edcs-navy mb-2">Health Insurance Made Simple</h3>
            <p className="text-gray-600">
              Affordable, reliable, and compliant health insurance solutions for individuals, families, employees, and businesses across the UAE.
            </p>
          </div>
          
        </div>
      </section>
    </main>
  );
}
