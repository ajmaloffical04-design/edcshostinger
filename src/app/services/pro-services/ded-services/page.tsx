"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function DEDServicesPage() {
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
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1920&auto=format&fit=crop"
            alt="DED Services"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - DED Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">DED Services</h1>
          
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "ded-services"} 
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
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Comprehensive DED Services in Dubai</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6 font-medium">
              Comprehensive Dubai Department of Economy and Tourism (DET/DED) services for businesses at every stage. We simplify licensing, approvals, and compliance with fast, reliable support.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide end-to-end DED services for company formation, trade license renewals, amendments, approvals, and business compliance. Experience fast processing, transparent pricing, and expert support across Dubai.
            </p>
          </div>
        </div>
        </div></section>

      {/* Services Included Section (Gray Background) */}
      <section className="py-16 lg:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Our DED Services Include</h2>
          
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base font-medium text-gray-700">
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                New Trade License Registration
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Trade License Renewal
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                License Amendment
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Business Activity Addition & Removal
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Trade Name Reservation
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Initial Approval
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Memorandum of Association (MOA) Amendments
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Local Service Agent & Partner Changes
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Branch Registration
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                License Cancellation
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                Company Information Updates
              </li>
              <li className="flex items-start">
                <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
                DED Approvals & NOC Assistance
              </li>
            </ul>
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
                  <option value="ded">DED Service</option>
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
            href={"/apply?service=" + "ded-services"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
