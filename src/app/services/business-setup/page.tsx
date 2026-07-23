"use client";

import { useState } from "react";
import { FileText, CheckCircle2, MessageCircle, Landmark, ArrowRight, Brain, Rocket, Tag, Headset } from "lucide-react";
import Header from "@/components/layout/Header";
import Link from "next/link";

const setupOptions = [
  {
    id: "llc-company-formation",
    title: "LLC Company Formation",
    desc: "Set up your Limited Liability Company in the UAE mainland with 100% foreign ownership options.",
    tags: ["Mainland LLC", "100% Ownership", "Trade License", "Sponsor Services"],
    category: "Formation"
  },
  {
    id: "free-zones",
    title: "Free Zones",
    desc: "Company formation in all major UAE free zones with zero corporate tax and easy setup processes.",
    tags: ["100% Foreign Ownership", "Tax Benefits", "No Customs Duty", "Fast Setup"],
    category: "Formation"
  },
  {
    id: "professional-license",
    title: "Professional License",
    desc: "Ideal for service providers, artisans, and professionals wanting 100% ownership in the mainland.",
    tags: ["Service Providers", "Consultants", "100% Ownership", "Local Service Agent"],
    category: "Licensing"
  },
  {
    id: "commercial-license",
    title: "Commercial License",
    desc: "Trade locally and internationally with a commercial license for general trading and specific goods.",
    tags: ["General Trading", "Import & Export", "Mainland Trading", "Retail"],
    category: "Licensing"
  },
  {
    id: "industrial-license",
    title: "Industrial License",
    desc: "For manufacturing and industrial operations with warehouse and factory setup assistance.",
    tags: ["Manufacturing", "Warehousing", "Factory Setup", "Industrial Activities"],
    category: "Licensing"
  },
  {
    id: "consulting",
    title: "Consulting for Every Business",
    desc: "Expert advisory services tailored to your specific industry and business model in the UAE.",
    tags: ["Business Advisory", "Market Research", "Legal Compliance", "Strategic Planning"],
    category: "Consulting"
  }
];

const tabs = ["All", "Formation", "Licensing", "Consulting"];

export default function BusinessSetupPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredOptions = activeTab === "All" 
    ? setupOptions 
    : setupOptions.filter(opt => opt.category === activeTab);

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Header />
      
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Comprehensive Setup <span className="font-medium text-gray-400">Impacts Your Business Growth</span>
          </h1>
          <div className="mt-6">
            <Link 
              href="/apply?service=business-setup" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-edcs-gold hover:bg-yellow-500 rounded-md transition-colors shadow-sm"
            >
              Apply for this service
            </Link>
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10 bg-white p-2 rounded-full border border-gray-100 shadow-sm mx-auto w-fit">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOptions.map((option, index) => (
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

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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
              From consultation to license — our streamlined 4-step process gets your business running fast.
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
                  Discuss your business goals and choose the right structure and jurisdiction
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
                  We prepare and review all required documents for submission
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
                  Government Submission
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Our PRO team handles all government submissions and approvals
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
                  License Issued
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Receive your trade license and start operating your business
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-edcs-gold"></div>
              <span className="text-edcs-gold font-semibold text-xs tracking-widest uppercase">Why EDCS</span>
              <div className="h-[1px] w-8 bg-edcs-gold"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-edcs-navy mb-6">
              Why Choose Us for <span className="text-edcs-gold">Business Setup</span>
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
                  UAE Market Expertise
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-sm">
                  Deep hands-on experience with UAE business regulations and government procedures.
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
                  Fast Documentation
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-[15px]">
                  Streamlined processes ensure your company is ready to operate in record time.
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
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-white transition-colors leading-tight">
                  Transparent Pricing
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-[15px]">
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
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-white transition-colors leading-tight">
                  End-to-End Support
                </h3>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-200 transition-colors text-[15px]">
                  From initial consultation to final license — and everything in between.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
