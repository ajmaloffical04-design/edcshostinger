"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

export default function ProfessionalLicensePage() {
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
      question: "Eligibility to Apply for a Professional License in Dubai, UAE",
      answer: (
        <div className="space-y-4">
          <p>
            You must possess the talent or ability required by the Dubai government authorities in order to obtain a professional license in Dubai, United Arab Emirates. The following activities in Dubai require a professional trade license:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Artisanship</li>
            <li>Carpentry</li>
            <li>Consultancy services</li>
            <li>Medical services</li>
            <li>Printing and publishing</li>
            <li>Beauty salons</li>
            <li>Graphics design services</li>
            <li>Repair services</li>
            <li>Security services</li>
            <li>Document clearance and related assistance</li>
            <li>Inventive engineering (the engineering design services include electrical, mechanical, manufacturing, chemical, systems, HVAC, civil, structural, architecture designing with simulation, rendering, analysis, testing, and its support)</li>
            <li>Information Technology Services (Web designing, application development, networking, Information security, cybersecurity, server administration, Data storage, Tech support, management, processing, analysis, infrastructure maintenance, API, and Internet of Things)</li>
          </ul>
          <p>
            A professional license permits the foreign investor or entrepreneur to own a sole proprietorship and 100% of the company. Holders of professional trade licenses in Dubai are no longer even required to have a local service agent according to the implementation of new commercial business laws. Professional license applications are accepted by the Department of Economic Development (DED) in Dubai, United Arab Emirates.
          </p>
        </div>
      )
    },
    {
      question: "Professional License Requirements",
      answer: (
        <p>
          Requirements vary based on the specific professional activity chosen. Typically, you will need a copy of your passport, a No Objection Certificate (NOC) if currently employed, and relevant educational certificates depending on the activity. Please contact us for a detailed checklist tailored to your needs.
        </p>
      )
    },
    {
      question: "Procedures for Professional License Renewal",
      answer: (
        <p>
          To renew your professional license, you will need a valid tenancy contract, recent EJARI registration, and to submit the renewal application to the DED along with the prescribed fees. Our experts can assist you with a smooth and hassle-free renewal process.
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
            alt="Professional License"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Professional License
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
              <span className="text-teal-500">Professional License</span><br />
              in Dubai, UAE
            </h2>
            <p className="leading-relaxed text-justify">
              A professional license is required in Dubai, United Arab Emirates, for those who wish to provide professional services or who wish to operate in Dubai based on their aptitude, expertise, or ability. Services including design, consultation, education, tourism, accounting, auditing, and other similar ones typically need for a professional trade license. In Dubai, United Arab Emirates, the Department of Economic Development (DED) is the agency responsible for issuing professional licenses. If you have a professional license, you are legally allowed to offer services to clients in the United Arab Emirates.
            </p>
            <p className="leading-relaxed text-justify">
              A professional trade license can be obtained by a person or a company that provides services based on talent or intellectual ability. If the company has more than one shareholder, it is known as a civil company.
            </p>

            <h3 className="text-2xl font-bold text-[#1E293B] mt-10 mb-6">
              Procedure for Obtaining a Professional License in Dubai, UAE
            </h3>
            <p className="leading-relaxed text-justify mb-6">
              Making a thorough action plan for the service setup you are providing is the first step in getting a professional license. If you have professional assistance, the processes for obtaining a professional license will be simpler. The best option you have in Dubai is EDCS Business Setup services.
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Get all the initial approvals and permits and register the business name.</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Apply for a professional license with all the relevant documents and a prescribed application fee to the DED.</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Obtain an attested tenancy agreement for the leased office space.</span>
              </li>
              <li className="flex items-start">
                <Star className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0 fill-blue-500" />
                <span className="text-gray-600">Collect the application acceptance slip, or payment acknowledgment slip from the DED to provide at later stages if required.</span>
              </li>
            </ul>

            <p className="leading-relaxed text-justify">
              In Dubai, United Arab Emirates, a fresh professional license runs about AED 15,400. The cost of obtaining a professional license, service agent costs, trade name registration, rent-based market fees, administration service fees, government cultural fees, etc. are all included in this fee.
            </p>
          </div>
          
          <div className="relative mt-8 lg:mt-0 px-6 pt-4">
             {/* Decorative dots background */}
             <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            <div className="relative h-[700px] w-full bg-gray-100 mt-4 ml-4">
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
            href={"/apply?service=professional-license"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
