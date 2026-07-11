"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function EmiratesIDRenewalPage() {
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
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
            alt="Emirates ID Renewal"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Emirates ID</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Emirates ID</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Emirates ID Renewal in Dubai</h2>
            <p className="text-gray-700 leading-relaxed font-medium mb-4">
              EDCS is a government-approved service center that handles all government issuances, including Emirates ID services. You are eligible to apply for your own Emirates ID card if you are a UAE national, a GCC national residing in the UAE, or another resident living and working in Dubai.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              The Emirates ID must be renewed by all UAE residents, including GCC nationals and citizens, except for those leaving the country before or after their ID card expires. Other than those, everyone living in the UAE must apply for ID renewal.
            </p>
          </div>
        </div>
      </section>

      {/* Issuing Section (Gray Background) */}
      <section className="py-8 lg:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Issuing and renewing the Emirates ID Card</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              To apply for a new Emirates ID or renew an Emirates ID, you need to go to the Federal Authority for Identity and Citizenship's Customer Happiness Center and submit all relevant papers. You can do this quickly and easily with the help of EDCS.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-edcs-navy mb-4">Apply for an Emirates ID through EDCS</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We have a team of specialists in the field of government transactions who have extensive experience dealing with this type of work, so they can complete it quickly and efficiently. With us, you can complete all of the documentation that your firm requires in one spot. Here are some of the advantages you will have from working with us:
          </p>
          <ul className="space-y-3 text-sm md:text-base font-medium text-gray-700 mb-12">
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              Accuracy in work and speed in delivery.
            </li>
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              Dealing with professional and friendly staff.
            </li>
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              Detailed knowledge of the field and staying abreast of the latest laws and government decisions.
            </li>
            <li className="flex items-start">
              <span className="text-edcs-navy mr-3 font-bold mt-1 text-xs">◆</span>
              Experience in dealing with various types of documents.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Frequently Asked Questions:</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">1. How long does Emirates ID processing take?</h4>
              <p className="text-gray-700 text-sm">
                It usually takes between 7 to 10 days to get the Emirates ID after getting your Visa stamped in your passport.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">2. Can I get an Emirates ID without a Visa?</h4>
              <p className="text-gray-700 text-sm">
                In fact, it is necessary to have a resident Visa to get an Emirates ID. ID issuance is the step that comes after stamping your Visa.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">3. How long is an Emirates ID valid for?</h4>
              <p className="text-gray-700 text-sm">
                The validity of the Emirates ID for expatriates is determined by the validity of their residency Visa. However, the Emirates ID has a validity span of 5 or 10 years for UAE nationals and 5 years for GCC nationals residing in the UAE.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">4. How much is the cost of an Emirates ID?</h4>
              <p className="text-gray-700 text-sm">
                The Emirates ID cost depends on the validity it's given. Usually, it's a hundred dirhams per year of validity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
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
                  <option value="emirates-id">Emirates ID Renewal</option>
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
