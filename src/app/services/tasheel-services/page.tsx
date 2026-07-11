"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function TasheelServicesPage() {
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
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1920&auto=format&fit=crop"
            alt="Tasheel Services"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Tasheel Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Tasheel Services</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div>
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Professional Tasheel Services in the UAE</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6 font-medium">
              Complete Tasheel services for employers and employees across the UAE. We assist with labor-related applications quickly and efficiently, ensuring compliance with UAE labor regulations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide professional Tasheel services for work permits, labor contracts, company labor files, and employee-related applications. Experience fast processing, transparent pricing, and dedicated support across all UAE emirates through our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Services Included Section (Gray Background) */}
      <section className="py-8 lg:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Our Tasheel Services Include</h2>
          
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base font-medium text-gray-700">
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                New Work Permit Processing
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Employment Visa Applications
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Labor Contract Registration & Renewal
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Work Permit Renewal
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Work Permit Cancellation
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Company Labor File Services
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Quota Applications & Modifications
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Labour Card Services
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Employee Status Updates
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Fine Payment & Compliance Assistance
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
           {/* Decorative elements could go here */}
        </div>
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
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all bg-white"
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
                  <option value="tasheel">Tasheel Service</option>
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
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-edcs-navy focus:border-edcs-navy outline-none transition-all resize-none bg-white"
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
