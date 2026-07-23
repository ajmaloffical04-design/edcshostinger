"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

export default function CommercialLicensePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: "Commercial License Requirements in UAE",
      answer: (
        <div className="space-y-4">
          <p>
            To apply for one, you must fulfill specific conditions for a commercial license. To do that, you must first decide which company categories you want your operations to be included under. Officially register and incorporate your business in Dubai. Apply for a commercial license from the Federal Ministry of Economy in the UAE and the Department of Economic Development in Dubai after registration and approval.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Office space lease agreement as evidence of the company's registered office</li>
            <li>Permission to use the space for commercial or business purposes from the building department of the Dubai Municipality.</li>
            <li>Proof of payment made towards trade license application</li>
          </ul>
        </div>
      )
    },
    {
      question: "Procedures for Commercial License Renewal",
      answer: (
        <p>
          To renew your commercial license, you need to ensure your office tenancy contract (Ejari) is valid. Submit the renewal application to the DED along with the required documents and pay the renewal fees. Our team can manage the entire renewal process to ensure no delays or penalties.
        </p>
      )
    },
    {
      question: "Benefits of Having a Commercial License in Dubai, UAE",
      answer: (
        <p>
          A commercial license allows you to trade freely within the UAE and internationally. It provides access to a large market, allows you to apply for residence visas for employees and dependents, and enables you to open corporate bank accounts with ease.
        </p>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/heroimage.png"
            alt="Commercial License"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Commercial License
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            The Best Business Consulting Firm you can Count on.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-gray-600">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-8 leading-tight">
              <span className="text-teal-500">Commercial License</span><br />
              in Dubai, UAE
            </h2>
            <p className="leading-relaxed text-justify">
              While submitting an application for a commercial license in Dubai, United Arab Emirates, there are a lot of steps to do and considerations to make. A commercial license, often referred to as a trading license, is a permit that is given to companies in the United Arab Emirates in order for them to legally engage in trade activities there. The ability to engage in the trading of goods, commodities, and services is granted by a commercial license.
            </p>
            <p className="leading-relaxed text-justify">
              Only general trade licenses are necessary for businesses involved in real estate, construction, and the retail industry. For companies operating in the transportation, logistics, and allied industries, a commercial trade license is necessary.
            </p>

            <h3 className="text-2xl font-bold text-[#1E293B] mt-10 mb-6">
              How to Apply for a Commercial License in Dubai, UAE?
            </h3>
            <p className="leading-relaxed text-justify mb-6">
              A firm in Dubai can only be granted a commercial license after being formally incorporated there. The steps to apply for a commercial license in Dubai, United Arab Emirates, are as follows:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Choose your business&apos;s incorporation type and the activity category that will fall under the commercial licensing requirement.</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Draft your company&apos;s Memorandum of Association (MOA) and Article of Association (AOA).</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Register the company with DED, Dubai, to obtain a VAT number</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Remit the payments for applications and registration.</span>
              </li>
            </ul>
          </div>
          
          <div className="relative mt-8 lg:mt-0 px-6 pt-4">
             {/* Decorative dots background */}
             <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            <div className="relative h-[600px] w-full bg-gray-100 mt-4 ml-4">
              <Image
                src="/heroimage.png"
                alt="Business Meeting"
                fill
                className="object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="pb-24 px-6 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border transition-all duration-300 ${openFaq === index ? 'border-gray-300 bg-white' : 'border-transparent bg-[#F4F7FA] hover:bg-gray-100'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className={`font-semibold text-lg ${openFaq === index ? 'text-[#1E293B]' : 'text-[#1E293B]'}`}>
                  {faq.question}
                </h3>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-500 leading-relaxed text-justify">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    
      {/* Bottom CTA Section */}
      <section className="py-16 lg:py-24 bg-edcs-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">
            Apply now and let our experts handle your service request quickly and efficiently.
          </p>
          <Link 
            href={"/apply?service=commercial-license"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
