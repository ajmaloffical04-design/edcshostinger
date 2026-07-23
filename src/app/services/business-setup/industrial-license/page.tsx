"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

export default function IndustrialLicensePage() {
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
      question: "Process of Industrial License Renewal in Dubai, UAE",
      answer: (
        <div className="space-y-4">
          <p>
            You can submit an application for an industrial license renewal on the Dubai government authority&apos;s website. The application processes can be completed on your behalf by the professionals at EDCS business setup. AED 500 is the service fee for renewing an industrial license, and an extra AED 100 is charged for each month that the license is not renewed on time. It takes up to 15 working days to finish the process, which is straightforward and simple. The following paperwork is needed to renew your industrial license:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Documents related to factory location</li>
            <li>Copy of industrial license issued by local department (if applicable)</li>
            <li>Copy of passport and residence (for non-citizens), and summary of the registration (for citizens)</li>
            <li>Copy of balance sheet</li>
            <li>National Media Council approval</li>
            <li>Ministry of Health approval</li>
            <li>Partnership contract</li>
            <li>Trade license</li>
            <li>Ministry of Environment and Water approval</li>
            <li>Ministry of Interior approval</li>
          </ul>
        </div>
      )
    },
    {
      question: "Importance of Industrial License",
      answer: (
        <p>
          An industrial license is crucial as it legally authorizes you to manufacture, process, and package goods in the UAE. It allows businesses to rent or purchase industrial land, benefit from subsidized utility rates, and legally distribute products in both the local and international markets.
        </p>
      )
    },
    {
      question: "Industrial License Requirements",
      answer: (
        <p>
          To obtain an industrial license, you will typically require a detailed business plan, factory layout plans, approvals from relevant authorities like the Dubai Municipality, civil defense, and environmental agencies, along with the standard corporate documentation such as the MOA and passport copies of the shareholders.
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
            alt="Industrial License"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Industrial License
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
              <span className="text-teal-500">Industrial License</span><br />
              In Dubai, UAE
            </h2>
            <p className="leading-relaxed text-justify">
              In Dubai, United Arab Emirates, an industrial license is necessary for any business engaged in the production or processing of any goods or commodities in industrial settings and scales. Production activities, such as processing raw materials to create fully or partially finished goods, can be categorized as industrial activities. Both manual and mechanical methods of the procedure fall within the category of industrial licensed activity. In Dubai, United Arab Emirates, the Department of Economic Development issues industrial licenses (DED). Depending on the activities carried out at the firm, approvals and permits from different governmental bodies may occasionally be needed. For the issuing of an industrial license in Dubai, United Arab Emirates, there are many terms and criteria as well as a validity time.
            </p>

            <h3 className="text-xl font-bold text-[#1E293B] mt-8 mb-4">
              Here are the major industrial activities or businesses that require an industrial license in Dubai, UAE.
            </h3>
            
            <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-600">
              <li>Industry for processing oil and petroleum</li>
              <li>Metallurgical engineering</li>
              <li>Steel manufacturing & processing</li>
              <li>Aluminum manufacturing & processing</li>
              <li>Gold production, as well as precious stone and metal processing</li>
              <li>Machinery manufacturing such as motors and vehicles</li>
              <li>Manufacturing of mats and rugs etc.</li>
              <li>Paper manufacturing industry</li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1E293B] mt-10 mb-6">
              How to Apply for an Industrial License in Dubai, UAE?
            </h3>
            <p className="leading-relaxed text-justify mb-6">
              The application process required to obtain an industrial license for a <span className="text-teal-500">Business setup in Dubai, UAE</span> is as follows:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Obtain each initial approval needed to operate your company and carry out manufacturing operations in Dubai.</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Apply for an industrial license at the Department of Economic Development (DED), Dubai.</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">It takes approximately 15 working days for DED to notify applicants of their application approval; the approval of an industrial license may take up to 3 months.</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">You will need the permission of Dubai Municipality for factory construction and setup.</span>
              </li>
            </ul>

            <p className="leading-relaxed text-justify mt-8">
              One of the first steps in starting a manufacturing or processing business in Dubai is getting an industrial license. With our knowledge and years of experience, EDCS Business Setup assists you during the entire procedure.
            </p>
          </div>
          
          <div className="relative mt-8 lg:mt-0 px-6 pt-4">
             {/* Decorative dots background */}
             <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            <div className="relative h-[800px] w-full bg-gray-100 mt-4 ml-4 rounded-lg overflow-hidden">
              <Image
                src="/heroimage.png"
                alt="Industrial Workers"
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
            href={"/apply?service=industrial-license"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
