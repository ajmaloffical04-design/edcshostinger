"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function VisitVisaPage() {
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
            alt="Visit Visa Application"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Visit Visa</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Visit Visa</h1>
          
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "visit-visa"} 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Apply for this service
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Visit Visa Application in Dubai</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              UAE's visit Visas can be issued for 30 or 60 days for non-residents looking to visit the Emirates. A visit Visa can be issued for single or multiple entries and can be extended for 30 days up to two times.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Applying for a visit Visa to the UAE through EDCS saves you the stress of going through a swirl of papers and documentation and allow you to receive the visa quickly and easily.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our visa application services allow our clients to acquire visit visas in a timely and hassle-free manner at the lowest cost. We strive to deliver the best service possible to our customers by providing clear direction, accurate evaluation, and smooth process management.
            </p>
          </div>
        </div>
        </div></section>

      {/* Apply Section (Gray Background) */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-4">Apply For Visit Visa in Dubai</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            To meet the specific needs of each of our clients, we provide a variety of visas that allow you to travel and stay in Dubai.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Those intending to visit the UAE must first get a visit visa, which allows them to enter the country. EDCS is the best place to apply for a visa to Dubai and receive a quick and hassle-free service.
          </p>
        </div>
        </div></section>

      {/* Validity Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-4">Visit Visa Validity in Dubai</h2>
          <p className="text-gray-700 leading-relaxed">
            A visit Visa is valid for 30 days or 60 days for a single entry and can be extended once for 30 days. Also, once you are inside the country, you can get a new visit visa valid for 30 days or 60 days, which can be renewed twice.
          </p>
        </div>
        </div></section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">1. Can I travel to a different Emirate with a visit Visa?</h4>
              <p className="text-gray-700 text-sm">You certainly can. Visit Visa holders are not restricted from traveling within the UAE.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-2">2. How long does a Visit Visa application take to process?</h4>
              <p className="text-gray-700 text-sm">It usually takes about 3 working days for the visit visa to be issued.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">3. What are the steps to apply for a Visit Visa in Dubai?</h4>
              <p className="text-gray-700 text-sm mb-3">You can easily and efficiently apply for a Visit Visa through EDCS, following these steps:</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  Contact us to let us know the type of Visa you wish to apply for.
                </li>
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  Provide us with the needed documents to process your Visa.
                </li>
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  Sit back and relax while your Visa application is being processed.
                </li>
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  Receive your Visa delivered to your doorstep.
                </li>
              </ul>
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
                  <option value="visit_visa">Visit Visa Application</option>
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
            href={"/apply?service=" + "visit-visa"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
