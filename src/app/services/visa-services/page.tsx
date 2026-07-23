"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle, Landmark, ArrowRight, Brain, Rocket, Tag, Headset, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const visaOptions = [
  {
    id: "tourist",
    title: "Tourist Visa",
    desc: "30, 60, or 90 days single and multiple entry visit visas for tourists and leisure travelers visiting the UAE.",
    tags: ["Single & Multiple Entry", "30/60/90 Days", "Fast 2-3 Days", "Affordable Rates"],
    category: "Visit Visas"
  },
  {
    id: "employment",
    title: "Employment Visa",
    desc: "Complete employment visa processing including labour card, medical fitness test, and Emirates ID issuance.",
    tags: ["Labour Card", "Medical Typing", "Emirates ID", "Company Sponsorship"],
    category: "Employment"
  },
  {
    id: "family",
    title: "Family Visa",
    desc: "Sponsor your spouse, children, and parents with complete family residence visa packages.",
    tags: ["Spouse & Children", "Parent Sponsorship", "Newborn Visa", "Visa Renewal"],
    category: "Residence"
  },
  {
    id: "partner",
    title: "Partner Visa",
    desc: "Residence visa for business partners and shareholders in mainland, free zone, and offshore companies.",
    tags: ["Mainland Partners", "Free Zone", "Shareholder Visa", "2-Year Validity"],
    category: "Investor"
  },
  {
    id: "investor",
    title: "Investor Visa",
    desc: "2, 3, 5, and 10-year investor and golden visa options for property and business investors.",
    tags: ["2/3/5/10 Year", "Property Investors", "Business Investors", "Family Included"],
    category: "Investor"
  },
  {
    id: "golden",
    title: "Golden Visa",
    desc: "UAE Golden Visa for exceptional professionals, investors, entrepreneurs, and specialized talents.",
    tags: ["10-Year Validity", "No Sponsor Needed", "Family Included", "Multiple Entry"],
    category: "Residence"
  }
];

const tabs = ["All Visas", "Visit Visas", "Employment", "Residence", "Investor"];

export default function UaeVisaPage() {
  const [activeTab, setActiveTab] = useState("All Visas");

  const filteredOptions = activeTab === "All Visas" 
    ? visaOptions 
    : visaOptions.filter(opt => opt.category === activeTab);

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />
      
      <section className="pt-40 pb-24 px-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            Comprehensive Visa <span className="font-medium text-gray-400">Processing & Services</span>
          </h1>
          
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-12 bg-white p-2 rounded-full border border-gray-100 shadow-sm mx-auto w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#1E293B] text-white shadow-md"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOptions.map((option) => (
            <div
              key={option.id}
              className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[400px] flex flex-col justify-between cursor-pointer border border-gray-100 bg-white hover:-translate-y-1"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              
              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div>
                  <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                    Details
                  </span>
                  <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                    {option.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                    {option.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-gray-600 transition-colors">
                  <ul className="space-y-3">
                    {option.tags.map((tag, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gray-400 group-hover:text-gray-300 mt-0.5 shrink-0" />
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors leading-tight">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Apply Button Section (After Hero) */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "visa-services"} 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Apply for this service
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-edcs-gold"></div>
              <span className="text-edcs-gold font-semibold text-xs tracking-widest uppercase">Simple Process</span>
              <div className="h-[1px] w-8 bg-edcs-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-edcs-navy mb-6">
              How It <span className="text-edcs-gold">Works</span>
            </h2>
            <p className="text-base text-gray-500">
              From consultation to visa approval — our streamlined 4-step process gets you ready fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[300px] flex flex-col cursor-pointer border border-gray-100 bg-white hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                  Step 01
                </span>
                <div className="mb-4">
                  <MessageCircle className="w-8 h-8 text-edcs-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                  Free Consultation
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Discuss your visa needs and let us guide you on the right type and requirements.
                </p>
              </div>
              <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-0">
                <ArrowRight className="w-5 h-5 text-gray-300 opacity-50" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[300px] flex flex-col cursor-pointer border border-gray-100 bg-white hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                  Step 02
                </span>
                <div className="mb-4">
                  <FileText className="w-8 h-8 text-edcs-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                  Document Preparation
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  We prepare, translate and review all required documents for immigration submission.
                </p>
              </div>
              <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-0">
                <ArrowRight className="w-5 h-5 text-gray-300 opacity-50" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[300px] flex flex-col cursor-pointer border border-gray-100 bg-white hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                  Step 03
                </span>
                <div className="mb-4">
                  <Landmark className="w-8 h-8 text-edcs-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                  Immigration Submission
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Our PRO team handles all government submissions, medical, and biometrics tracking.
                </p>
              </div>
              <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-0">
                <ArrowRight className="w-5 h-5 text-gray-300 opacity-50" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[300px] flex flex-col cursor-pointer border border-gray-100 bg-white hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                  Step 04
                </span>
                <div className="mb-4">
                  <CheckCircle2 className="w-8 h-8 text-edcs-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                  Visa Issued
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Receive your approved visa and Emirates ID ready to use in the UAE.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-edcs-gold"></div>
              <span className="text-edcs-gold font-semibold text-xs tracking-widest uppercase">Why EDCS</span>
              <div className="h-[1px] w-8 bg-edcs-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-edcs-navy mb-6">
              Why Choose Us for <span className="text-edcs-gold">Visa Services</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[300px] flex flex-col cursor-pointer border border-gray-100 bg-white hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                  Expertise
                </span>
                <div className="mb-4">
                  <Brain className="w-8 h-8 text-edcs-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                  Immigration Expertise
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Deep hands-on experience with UAE immigration regulations and government procedures.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[300px] flex flex-col cursor-pointer border border-gray-100 bg-white hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                  Speed
                </span>
                <div className="mb-4">
                  <Rocket className="w-8 h-8 text-edcs-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                  Fast Processing
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Streamlined typing and submissions ensure your visa is approved in record time.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[300px] flex flex-col cursor-pointer border border-gray-100 bg-white hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                  Value
                </span>
                <div className="mb-4">
                  <Tag className="w-8 h-8 text-edcs-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                  Transparent Pricing
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Clear, upfront pricing with no hidden costs or surprise fees at any stage.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative rounded-2xl p-8 transition-all duration-500 min-h-[300px] flex flex-col cursor-pointer border border-gray-100 bg-white hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4A5568] to-[#1A202C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-[#38A169] text-sm font-medium mb-4 block group-hover:text-green-300 transition-colors">
                  Service
                </span>
                <div className="mb-4">
                  <Headset className="w-8 h-8 text-edcs-navy group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-white transition-colors leading-tight">
                  End-to-End Support
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  From initial typing to final stamp — and everything in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    
      {/* Bottom CTA Section */}
      <section className="py-12 lg:py-16 bg-edcs-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">
            Apply now and let our experts handle your service request quickly and efficiently.
          </p>
          <Link 
            href={"/apply?service=" + "visa-services"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>

    </main>
  );
}
