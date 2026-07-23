"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function DHAMedicalFitnessPage() {
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
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop"
            alt="DHA Medical Fitness Test"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - DHA Medical Fitness Test</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">DHA Medical Fitness Test</h1>
          
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "dha-medical-fitness"} 
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
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Medical fitness test for Visa applications</h2>
            <p className="text-gray-700 leading-relaxed font-medium">
              EDCS is one of Dubai's accredited medical fitness application establishments. We help with any type of health-related trading and medical fitness service. EDCS have merged with all medical fitness facilities in Dubai in order to reduce client wait times and ensure smooth execution. You may anticipate a simple transition to medical fitness certification.
            </p>
          </div>
        </div>
        </div></section>

      {/* Application Section (Gray Background) */}
      <section className="py-16 lg:py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-6">EDCS for Medical Fitness Application</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed font-medium mb-4">
              EDCS is approved by the DHA to file your medical fitness applications. Here are some of the reasons why you should work with us:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-sm md:text-base font-medium text-gray-700">
              <li>We have years of experience and in-depth knowledge in this field.</li>
              <li>We offer full guidance and service from our professional staff.</li>
              <li>We provide a delivery service directly to your doorstep.</li>
              <li>We process your medical fitness application in Dubai from start to finish.</li>
            </ol>
          </div>
        </div>
        </div></section>

      {/* Requirements Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Medical Fitness Application Requirements</h2>
          
          <ol className="list-decimal list-inside space-y-3 text-sm md:text-base font-medium text-gray-700 mb-6">
            <li>Your reference number</li>
            <li>A clear copy of your passport or ID card (mandatory)</li>
            <li>A copy of the residence permit</li>
            <li>Active phone number</li>
            <li>The applicant must be present in person, and in case of any change of visa, they have to submit the change status paper</li>
          </ol>
          
          <p className="text-gray-700 font-medium italic mb-12">
            To book your consultation or to ask us more about any of the DHA services, contact us through the form below.
          </p>

          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Frequently Asked Questions:</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">1. What is examined during the Visa medical?</h4>
              <p className="text-gray-700 text-sm">
                The physical examination usually includes checking the eyes, ears, nose, throat, limbs, lymph nodes, and more. It also includes a chest x-ray and blood test.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">2. How long do UAE medical results take?</h4>
              <p className="text-gray-700 text-sm">
                It takes between 24 to 48 hours, according to the type of application (standard or quick).
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">3. What medical tests are done for a Dubai Visa?</h4>
              <p className="text-gray-700 text-sm">
                A blood test is done to check that a person is free of diseases such as tuberculosis, hepatitis A, hepatitis B, hepatitis C, HIV/AIDS, syphilis, and leprosy.
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
                  <option value="dha-medical">DHA Medical Fitness Test</option>
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
            href={"/apply?service=" + "dha-medical-fitness"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
