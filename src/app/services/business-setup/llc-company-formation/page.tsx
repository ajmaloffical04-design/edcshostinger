"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function LlcCompanyFormationPage() {
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
      question: "What is an LLC?",
      answer: "In an LLC, or limited liability business, the partners who own firm shares will only be subject to limited liabilities based on their proportionate share of the capital amount. For this reason, many business owners chose LLC creation as their preferred method of company formation. An LLC company setup establishes a firm as a distinct legal entity and permits the issuance of a tax identification number (TIN), which the business can use to do business and create a bank account in its name. If you're thinking about forming an LLC in Dubai, United Arab Emirates, seek the assistance of EDCS business setup experts."
    },
    {
      question: "Why Choose LLC Business Setup in Dubai?",
      answer: "Setting up an LLC in Dubai offers 100% foreign ownership in most sectors, access to a thriving local and international market, and the ability to sponsor visas for employees and dependents. It also provides a clear path to corporate bank account opening and zero income tax on personal earnings."
    },
    {
      question: "How to Register an LLC Company?",
      answer: "The registration process involves choosing a trade name, obtaining initial approval from the DED, drafting the Memorandum of Association (MOA), securing a physical office space, and submitting final documents for the issuance of the trade license."
    },
    {
      question: "Documents Required for LLC Company Setup",
      answer: "Typically, you will need passport copies of the shareholders, a No Objection Certificate (NOC) if currently employed in the UAE, the drafted MOA, Ejari (tenancy contract) for the office space, and initial approval receipts."
    },
    {
      question: "The Advantages of Setting up an LLC in Dubai",
      answer: "Key advantages include limited liability protection, no minimum capital requirement in most cases, freedom to trade anywhere in the UAE, and the flexibility to open multiple branches."
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
            alt="LLC Company Formation"
            fill
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            LLC Company Formation
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
              <span className="text-teal-500">LLC Company Formation</span><br />
              in Dubai, UAE
            </h2>
            <p className="leading-relaxed text-justify">
              For many foreign businesspeople and investors, LLC company incorporation in Dubai, United Arab Emirates, is appealing. For many people, Dubai is the best place to launch or grow a business due to the abundance of possibilities and resources accessible there. If you set everything up in accordance with the legislation, LLC business setup in Dubai can prove to be a simple and straightforward operation. The challenging aspect is learning the legislation in-depth and processing applications in accordance with it.
            </p>
            <p className="leading-relaxed text-justify">
              One of the most important phases in launching a business in the UAE is choosing the legal structure or company structure. It may depend on the goods or services you provide, the location where your business will be located, the target market you are looking for, and whether your firm will be operating locally or globally. You can launch a business as a Mainland, Freezone, or Offshore business, each of which is distinct from the others in a number of ways. An LLC company formation in Dubai, United Arab Emirates, is typically observed in the mainland portion of the city. Despite having an LLC corporate structure, Dubai Freezones are more commonly referred to as FZ LLC or Freezone LLC companies.
            </p>
          </div>
          
          <div className="relative mt-8 lg:mt-0 px-6 pt-4">
             {/* Decorative dots background */}
             <div className="absolute top-0 left-0 w-48 h-48 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1E293B 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
            <div className="relative h-[550px] w-full bg-gray-100 mt-4 ml-4">
              <Image
                src="/heroimage.png"
                alt="Dubai Buildings"
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
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
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
            href={"/apply?service=" + "llc-company-formation"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
