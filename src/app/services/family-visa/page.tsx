"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function FamilyVisaPage() {
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
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1920&auto=format&fit=crop"
            alt="Family Visa Application"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Family Visa and Dependent Visa</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Family Visa and Dependent Visa</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-8 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Dependent Visa Application */}
          <div>
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Dependent Visa Application</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have a valid UAE resident Visa, you can sponsor first-degree family members to come and live with you in the UAE. After receiving your residence Visa, you can begin the procedures for obtaining a spouse and children visa, provided you earn at least 4000 AED per month.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can apply for visas for your family members with EDCS—is one-stop shop for visa services. We provide a variety of services related to the issuance, renewal, or cancellation of a dependent visa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              When applying for a residence permit for a member of your family, whether your wife, children, or parents, you will receive the best possible service from our trained team of visa experts at EDCS.
            </p>

            {/* Apply With EDCS */}
            <h3 className="text-2xl font-bold text-edcs-navy mb-4">Apply For Dependent Visa with EDCS</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team handles all aspects of Visa applications, from start to finish. When you seek the services of EDCS, you won't have to worry about any of the stages involved in the issuance of the dependent Visa you're filing for a family member, from the moment the paperwork is received until your Visas are approved and delivered to you.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Because of our many years of expertise, we can handle all sorts of visa services in Dubai. For a hassle-free and comfortable experience, our team processes documents and ensures that all requirements are completed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You will save time, effort, and money through EDCS for Visa services.
            </p>
          </div>
        </div>
      </section>

      {/* Required Documents Section (Gray Background) */}
      <section className="py-8 lg:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-edcs-navy mb-6">Documents Required to Apply for dependent Visa</h2>
          
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl">
            <ol className="list-decimal pl-5 space-y-3 text-sm md:text-base font-medium text-gray-700">
              <li>The original ID of the sponsor</li>
              <li>A copy of the sponsor's passport</li>
              <li>A copy of the sponsor's residence visa</li>
              <li>The sponsor's employment contract for the private sector or salary certificate for governmental or semi-governmental entities.</li>
              <li>A copy of the trade license, in addition to the Memorandum of Association if the sponsor is a partner or investor.</li>
              <li>A copy of the birth certificate, attested by the UAE Ministry of Foreign Affairs, for the children.</li>
              <li>A copy of the marriage contract attested by the UAE Ministry of Foreign Affairs for the spouse</li>
              <li>A copy of the sponsored passport</li>
              <li>A new personal photo with a white background</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Validity & FAQ Section */}
      <section className="py-8 lg:py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Validity */}
          <div>
            <h2 className="text-2xl font-bold text-edcs-navy mb-4">How long is the validity of the dependant visa?</h2>
            <p className="text-gray-700 leading-relaxed">
              The dependent Visa's validity period varies depending on the sponsor and the sponsored. It could be for 1, 2, or 3 years from the date of issuance. It can be renewed for similar periods after meeting the same requirements as when the Visa was first issued.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-edcs-navy mb-6">Frequently Asked Questions:</h2>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">1. Can I travel to a different Emirate with a dependent Visa?</h4>
                <p className="text-gray-700 text-sm">You certainly can. Dependent Visa holders are not restricted from traveling within the UAE.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">2. How long does a Dependent Visa application take to process?</h4>
                <p className="text-gray-700 text-sm">It usually takes between 10 to 15 days for the dependent Visa to be issued.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">3. What are the steps to apply for a Dependent Visa in Dubai?</h4>
                <p className="text-gray-700 text-sm mb-3">You can easily and efficiently apply for a Dependent Visa through EDCS, following these steps:</p>
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
                  <option value="family_visa">Family/Dependent Visa</option>
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
