"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function CorporateHealthInsurancePage() {
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
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1920&auto=format&fit=crop"
            alt="Corporate Health Insurance"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Corporate Health Insurance</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Corporate Health Insurance</h1>
          
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "corporate-health-insurance"} 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Apply for this service
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Corporate Health Insurance</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              EDCS offers integrated services to support companies in conducting their business smoothly. Our services include offering health insurance for staff, without which the residence Visa in Dubai cannot be completed.
            </p>
          </div>
        </div>
        </div></section>

      {/* Application Section (Gray Background) */}
      <section className="py-16 lg:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Apply for Employee Health Insurance with EDCS</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-medium">
              As a business owner or administrator of a company, it is important to always have health insurance for your employees in compliance with the regulations of Dubai. It is your responsibility to ensure that your employees are entitled to health benefits as required by law.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              At EDCS—we can help you set up your health and medical insurance so that it suits your business needs, and that's through our business relationship with health insurance companies in the UAE.
            </p>
          </div>
        </div>
        </div></section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-4">Corporate Health Insurance with EDCS:</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            EDCS specializes in various government transactions with precise and timely processing. Our expertise in the field and relationships with government institutions benefit our clients with quick processing of corporate health insurance.
          </p>
          <ul className="space-y-3 text-sm md:text-base font-medium text-gray-700 mb-12">
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              A professional team of highly experienced staff
            </li>
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              Skilled in handling various types of government documents and transactions
            </li>
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              Providing efficient services and convenient communication with our friendly helpful personnel
            </li>
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              Up to date with the latest developments in procedures and requirements
            </li>
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              Strong relationships with all Dubai government institutions.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Frequently Asked Questions:</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">1. How can I check my health insurance status in the UAE?</h4>
              <p className="text-gray-700 text-sm">
                By entering your Emirates ID number, you can check details on the health insurance provider's website or download their app.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">2. Is health insurance mandatory in the UAE?</h4>
              <p className="text-gray-700 text-sm">
                Health insurance is mandatory in the UAE when you apply for a resident Visa.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">3. How many types of health insurance are there in the UAE?</h4>
              <p className="text-gray-700 text-sm mb-2">
                There are five different types of health insurance for Dubai government employees: VIP, (A), (B), (C), and (D).
              </p>
              <p className="text-gray-700 text-sm">
                Employee health insurance is classified according to their level of responsibility.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">4. Is it mandatory for employers to provide health insurance in Dubai?</h4>
              <p className="text-gray-700 text-sm">
                The Health Insurance Law passed in 2013 provides for mandatory medical insurance in Dubai. According to this law, all Emiratis and expats in Dubai, along with their dependents, are required to have health insurance.
              </p>
            </div>
          </div>
        </div>
        </div></section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
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
                  className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all bg-white"
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
                  <option value="corporate-health">Corporate Health Insurance</option>
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
                className="w-full border border-gray-300 rounded-md px-6 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all resize-none bg-white"
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
            href={"/apply?service=" + "corporate-health-insurance"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
