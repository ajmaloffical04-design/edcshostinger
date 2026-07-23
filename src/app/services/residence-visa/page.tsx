"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ResidenceVisaPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    purpose: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, send this data to an API route
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry!");
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-[#29323c]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop"
            alt="Residence Visa Application"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Residence Visa</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Residence Visa</h1>
          
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "residence-visa"} 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Apply for this service
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-12">
          
          {/* Apply For Section */}
          <div>
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Apply For Dubai Residence Visa</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              EDCS is the terminus to obtain Dubai residence visa. Be it application for a residence visa, Residence visa renewal services or cancellation of residence visa. We deal with all visa related services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Dubai residence visa allows an immigrant the right to permanent residence in the UAE. A citizen is provided with both work and the residence visa with an identification card instead of the passport for general identity proof. Immigrants with the visa must enter the country at least once after every six months to maintain the residence visa's validity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              EDCS deals with end to end visa processing services, from document processing to deliver. We have years of experience in dealing with visa services in Dubai. Our team helps to process visa documents and ensure that all your necessities are met in the most productive way and without any nuisance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sparing your time and resources, all you need to help us with all the necessary documents and sit back. We deliver your Dubai residence visa to your doorstep. We are the most promising visa service providers across the UAE.
            </p>
          </div>

          {/* Who Should Apply Section */}
          <div>
            <h2 className="text-2xl font-bold text-edcs-navy mb-4">Who Should Apply For A Dubai Residence Visa?</h2>
            <p className="text-gray-700 leading-relaxed">
              A residence visa for Dubai requires applicants aged 18 and above. They will undergo a medical test to check their medical fitness. They are obliged to pass a security check and apply for an Emirates ID card. EDCS will get you through with all these requirements under a single roof.
            </p>
          </div>

          {/* Validity Section */}
          <div>
            <h2 className="text-2xl font-bold text-edcs-navy mb-4">What Is The Validity Of The Residence Visa?</h2>
            <p className="text-gray-700 leading-relaxed">
              The validity of residence visa for Dubai varies from 1-3 Years depending upon the type and sponsor. Recent changes which are subjected to certain conditions It can also be issued for 5 and 10 years. Furthermore, to maintain the validity a resident must enter the country at least once after every six months.
            </p>
          </div>
        </div>
        </div></section>

      {/* Benefits Section (Gray Background) */}
      <section className="py-16 lg:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Benefits Of Having A Residence Visa</h2>
          
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl">
            <ol className="list-decimal pl-5 space-y-3 text-sm md:text-base font-medium text-gray-700">
              <li>You can possess a bank account</li>
              <li>The full access to financial facilities</li>
              <li>You can apply for a driving licence in Dubai</li>
              <li>Access to all government health services and health insurance</li>
              <li>You can register your children in government and private schools</li>
              <li>Work and invest easily in any sector</li>
              <li>You can travel visa-free to certain destinations</li>
            </ol>
          </div>
        </div>
        </div></section>

      {/* Form Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           {/* Decorative elements could go here */}
        </div>
        <div className="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-edcs-navy">Get To Know More!</h2>
            <div className="w-8 h-8 rounded-full border-2 border-edcs-navy flex items-center justify-center text-edcs-navy">
              <span className="text-xl font-bold leading-none">&rarr;</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Select Purpose</label>
                <select 
                  value={formData.purpose}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all bg-white"
                >
                  <option value="">--select purpose--</option>
                  <option value="residence_visa">Residence Visa Application</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="px-10 py-3 bg-edcs-navy text-white rounded-md font-bold text-sm tracking-wide hover:bg-gray-800 transition-colors shadow-md"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>

    
      {/* Bottom CTA Section */}
      <section className="py-16 lg:py-24 bg-edcs-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">
            Apply now and let our experts handle your service request quickly and efficiently.
          </p>
          <Link 
            href={"/apply?service=" + "residence-visa"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
