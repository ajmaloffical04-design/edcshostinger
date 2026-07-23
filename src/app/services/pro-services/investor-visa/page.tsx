"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function InvestorVisaPage() {
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
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
            alt="Investor Visa Application"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 w-full pt-16">
          <Link href="/services" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
          </Link>
          <p className="text-sm text-edcs-gold mb-2 font-medium tracking-wider uppercase">EDCS - Investor Visa Application</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Investor Visa Application</h1>
          
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "investor-visa"} 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Apply for this service
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-12">
          
          <div>
            <h2 className="text-3xl font-bold text-edcs-navy mb-4">Investor Visa Application in Dubai</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Investors Visa in Dubai is an excellent choice for foreign citizens who want to start a business or invest in an existing firm in Dubai. They can also live, work, and sponsor family members in the UAE. The investor Visa has a validity of three years.
            </p>

            <h3 className="text-2xl font-bold text-edcs-navy mb-4">Who Can Apply for an Investor Visa in Dubai?</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Anyone who wants to set up a company and start their own business in the UAE or is a partner with at least 40% to 50% ownership can apply for an investor Visa in Dubai. When applying for an investor Visa, the applicant must meet the requirements of the Federal Authority for Identity and Citizenship, which include passing a health assessment and background check.
            </p>
            <p className="text-gray-700 leading-relaxed">
              There are specific requirements that an investor must fulfill to apply for this sort of Visa. Of contrast, the individual should be a partner or own 40% of the shares in an existing company.
            </p>
          </div>
        </div>
        </div></section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-4">Benefits of an Investor Visa in Dubai</h2>
          <p className="text-gray-700 leading-relaxed">
            The investor visa allows its holder to reside in Dubai for an extended period of time (three years as a minimum) and also allows them to begin their desired project in Dubai.
          </p>
        </div>
        </div></section>

      {/* How to Apply Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-4">How to apply for an investor visa in Dubai</h2>
          <p className="text-gray-700 leading-relaxed">
            When you apply for an investor visa in Dubai with EDCS, you can rest assured that the process will be swift and smooth. We are a specialized service center with contacts with major departments and bodies in Dubai, and we have been acknowledged by Dubai authorities for offering excellent visa services.
          </p>
        </div>
        </div></section>

      {/* Required Documents (Navy Background) */}
      <section className="py-16 lg:py-24 bg-edcs-navy border-y border-edcs-gold/20 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Documents Required For Dubai Investor Visa Application</h2>
          
          <div className="bg-white text-gray-900 rounded-xl p-8 shadow-xl">
            <ol className="list-decimal pl-5 space-y-3 text-sm md:text-base font-medium text-gray-700">
              <li>The original ID of the person authorized in the establishment card</li>
              <li>A Passport copy.</li>
              <li>A new personal photo with white background.</li>
              <li>Trade license</li>
              <li>Memorandum of Association</li>
              <li>A copy of Establishment card</li>
            </ol>
          </div>
        </div>
        </div></section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-edcs-navy mb-8">Frequently Asked Questions:</h2>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">1 How can I get an Investor Visa in UAE?</h4>
              <p className="text-gray-700 text-sm mb-3">After a person obtains a trade license in the UAE, he can obtain a work visa according to the following requirements:</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  A copy of a valid passport.
                </li>
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  Personal Photos, (passport-size with white background)
                </li>
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  A copy of the trade license + the company's Memorandum.
                </li>
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  A copy of the establishment card.
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-2">2. How long does an Investor Visa take in Dubai?</h4>
              <p className="text-gray-700 text-sm">It takes about 3 working days for the investor visa to be issued.</p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-2">3. What is the cost of an investor/partner visa in Dubai?</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  The cost of the investor/partner's visa in Dubai costs 1127.5 AED inside the country and 477.5 AED outside the country.
                </li>
                <li className="flex items-start">
                  <span className="text-edcs-navy mr-2 font-bold">•</span>
                  The cost of the investor/partner's procedures from issuing an entry permit to stamping the residency ranges from 1890 to 3215 AED.
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
                  <option value="investor_visa">Investor Visa Application</option>
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
            href={"/apply?service=" + "investor-visa"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
