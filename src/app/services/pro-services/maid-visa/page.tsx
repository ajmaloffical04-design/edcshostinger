"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function MaidVisaPage() {
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
            src="/maid-visa.png"
            alt="Maid Visa Application"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Maid Visa</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Maid Visa</h1>
          <h2 className="text-2xl font-semibold text-white mb-2">Hassle-Free UAE Maid Visa Services</h2>
          <p className="text-xl text-white/90 max-w-2xl">
            Complete assistance for maid visa applications, renewals, cancellations, and all related government procedures.
          </p>
          <div className="mt-8">
            <Link 
              href="/apply?service=maid-visa" 
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
          <h2 className="text-3xl font-bold text-edcs-navy mb-6">Maid Visa Application</h2>
          <p className="text-gray-700 leading-relaxed">
            Sponsor a domestic worker legally and efficiently with our complete Maid Visa services. We assist UAE residents with the entire process, from document preparation and entry permit applications to medical fitness tests, Emirates ID, residency visa stamping, and renewals, ensuring full compliance with UAE regulations.
          </p>
        </div>
      </section>

      {/* Services List Section (Colored Banner) */}
      <section className="py-8 lg:py-16 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Our Maid Visa Services</h2>
            <p className="text-white/90">
              We provide comprehensive services to handle every aspect of your maid visa application and processing.
            </p>
          </div>

          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl max-w-4xl mx-auto">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "New Maid Visa application",
                "Maid Visa renewal",
                "Entry permit processing",
                "Status change assistance",
                "Medical fitness test coordination",
                "Emirates ID application",
                "Residence visa stamping",
                "Visa cancellation",
                "Domestic worker contract assistance",
                "Document preparation and PRO support"
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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Our Service?</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Complete end-to-end processing",
                "Fast and reliable service",
                "Transparent pricing",
                "Experienced PRO consultants",
                "Assistance with all required government procedures",
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

          {/* Eligibility Support */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Support</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We guide you through the sponsorship requirements, including:
            </p>
            <ul className="space-y-3">
              {[
                "Sponsor eligibility review",
                "Required document checklist",
                "Salary and accommodation guidance (as applicable)",
                "Application compliance verification"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Select Purpose</label>
                <select 
                  value={formData.purpose}
                  onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all bg-white"
                >
                  <option value="">--select purpose--</option>
                  <option value="maid_visa">Maid Visa Application</option>
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
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all resize-none"
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

    </main>
  );
}
