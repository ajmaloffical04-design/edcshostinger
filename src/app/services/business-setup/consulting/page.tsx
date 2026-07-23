"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ConsultingPage() {
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
      question: "How to Set Up an Office Space in Dubai, UAE?",
      answer: (
        <div className="space-y-4">
          <p>
            To open an office in Dubai, United Arab Emirates, there are numerous legal, financial, and strategic requirements. It is usually advisable to enlist the help of experienced company setup advisors when looking for or establishing an office space in Dubai, United Arab Emirates.
          </p>
          <p>
            While applying for a commercial license, the Dubai government requires you to carry certain important documents;
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Provisional approval from Dubai Emirate&apos;s Licensing Authority</li>
            <li>Passport of the company manager mentioned in the trade license</li>
          </ul>
          <p>
            Following the incorporation of your firm and the submission of all necessary basic corporate paperwork, you should rent an office space for your business. However, it is crucial to start looking for office space as soon as your firm is incorporated in Dubai. This will enable you to think about and reflect on the greatest office rental possibilities in the area.
          </p>
          <p>
            For the smooth running of the business and in the event that there are any legal disputes over the property, the lease agreement must be registered. To register your lease agreement you will need;
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            <li>Copy of License or the initial approval</li>
            <li>Copy of passport/ visa/ Emirates ID of the applicant</li>
            <li>Passport copy or copy of Emirates ID of the local partner</li>
            <li>Proof of payment made towards application processing</li>
          </ul>
        </div>
      )
    },
    {
      question: "The Importance of Setting Up an Office in Dubai",
      answer: (
        <p>
          Setting up an office in Dubai provides a physical presence for your business, adding credibility and trust for your clients and partners. It also fulfills the mandatory regulatory requirements for obtaining and renewing most trade licenses in the UAE.
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
            alt="Consulting for Every Business"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Consulting for Every Business
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
              <span className="text-teal-500">Office Space For Rent</span><br />
              in Dubai, UAE
            </h2>
            <p className="leading-relaxed text-justify">
              One of the top service providers in Dubai, United Arab Emirates, for help finding an office space is EDCS Business Setup. For any business establishment needs customers may have in the UAE, we have experience managing various business types and sizes. Depending on the sort of business, location of business setup, and target market, your requirements change. Finding a suitable office space is therefore essential to the success of your company. You can attain this goal with the support of the EDCS expert team.
            </p>
            <p className="leading-relaxed text-justify">
              Due to its broad expansion and development in all sectors, Dubai is a great place to start a business. Several startups and branches of well-known companies have established themselves in the emirate of Dubai as a result of the city&apos;s welcoming and business-friendly environment.
            </p>
            <p className="leading-relaxed text-justify">
              Are you also planning to <span className="text-teal-500 font-medium cursor-pointer hover:underline">set up a business in Dubai</span>? Find the perfect office space in Dubai, UAE, that suits your business needs.
            </p>
          </div>
          
          <div className="relative mt-8 lg:mt-0 px-6 pt-4">
             {/* Decorative dots background */}
             <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            <div className="relative h-[450px] w-full bg-gray-100 mt-4 ml-4 rounded-lg overflow-hidden">
              <Image
                src="/heroimage.png"
                alt="Office Space"
                fill
                className="object-cover shadow-md"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white py-3 px-6 rounded-lg shadow-lg flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Project Completed</span>
                <span className="text-2xl font-black text-gray-900 leading-none">06</span>
              </div>
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
                  <ChevronUp className="w-5 h-5 text-teal-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal-500" />
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
            href={"/apply?service=consulting"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
