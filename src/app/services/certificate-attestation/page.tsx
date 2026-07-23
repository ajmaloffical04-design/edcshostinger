import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CertificateAttestationPage() {
  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-[#29323c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1628151015968-3a4429e9efee?q=80&w=1920&auto=format&fit=crop"
            alt="Certificate Attestation Services"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Attestation</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Certificate Attestation</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">Certificate Attestation Services</h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Get your documents officially authenticated for use in the UAE or abroad.
          </p>
          <div className="mt-8">
            <Link 
              href="/apply?service=certificate-attestation" 
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
            Get your documents officially authenticated for use in the UAE or abroad. We handle the complete attestation process for personal, educational, and commercial documents, ensuring compliance with the relevant authorities.
          </p>
        </div>
      </section>

      {/* Services List Section (Colored Banner) */}
      <section className="py-8 lg:py-16 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Certificate Attestation Services</h2>
            <p className="text-white/90">
              We process a wide variety of documents efficiently.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Educational Certificate Attestation",
                "Degree & Diploma Attestation",
                "Birth Certificate Attestation",
                "Marriage Certificate Attestation",
                "Police Clearance Certificate (PCC) Attestation",
                "Experience Certificate Attestation",
                "Medical Certificate Attestation",
                "Commercial Document Attestation",
                "Power of Attorney (POA) Attestation",
                "Memorandum of Association (MOA) Attestation",
                "Ministry & Embassy Attestation",
                "MOFA Attestation",
                "UAE Embassy Attestation",
                "Document Verification Services"
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
                "End-to-end document handling",
                "Fast and secure processing",
                "Transparent pricing",
                "Expert guidance throughout the process",
                "Reliable support for individuals and businesses",
                "Service available across all UAE emirates"
              ].map((reason, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-edcs-gold mr-3"></div>
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
