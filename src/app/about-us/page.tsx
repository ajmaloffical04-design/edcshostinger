"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Building2, 
  FileText, 
  Contact, 
  Stethoscope, 
  Star, 
  BadgeCheck, 
  Headset, 
  Landmark,
  ShieldCheck,
  Award
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FC] relative overflow-hidden pt-28 pb-20 font-sans">
      
      {/* Background Skyline Image (faded) */}
      <div className="absolute top-0 right-0 w-[120%] md:w-3/4 h-[80%] z-0 pointer-events-none opacity-80 mix-blend-multiply">
        <Image 
          src="/heroimage.png" 
          alt="Dubai Skyline" 
          fill 
          className="object-cover object-bottom" 
          unoptimized
          priority
        />
        {/* Soft gradient to blend the image into the light background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7FC] via-[#F4F7FC]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7FC] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Area: Left Text, Right Graphic */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mb-16">
          
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-[#0066FF] text-xs font-bold tracking-wide uppercase mb-8 border border-gray-100">
                <Users className="w-4 h-4" />
                WHO WE ARE
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2538] leading-[1.15] mb-6 tracking-tight">
                Your Trusted Partner for <br />
                <span className="text-[#0066FF]">Visa Clearance & <br /> Business Solutions</span>
              </h1>
              
              {/* Paragraph */}
              <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
                With over 40 years of experience, EDCS is a leading visa consultancy and business setup company in the UAE. We provide reliable, fast, and compliant services for individuals and businesses—making your journey smooth and hassle-free.
              </p>

              {/* Checkmarks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {[
                  "40+ Years of Experience",
                  "Fast & Reliable Processing",
                  "25,000+ Successful Applications",
                  "Dedicated Relationship Manager",
                  "UAE Government Compliant",
                  "100% Data Security"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-white rounded-xl p-3 shadow-sm">
                    <div className="bg-[#0066FF] rounded-full p-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex justify-center items-center gap-2 bg-[#0066FF] text-white px-8 py-3.5 rounded-xl font-medium text-base hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                >
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex justify-center items-center gap-2 bg-white text-gray-800 px-8 py-3.5 rounded-xl font-medium text-base hover:bg-gray-50 transition-colors shadow-sm border border-gray-100"
                >
                  Learn More <ArrowRight className="w-4 h-4 text-[#0066FF]" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Graphic Area */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md flex items-center justify-center"
            >
              {/* Glassmorphic "End-to-End" Card overlaying the scene */}
              <div className="absolute z-20 left-0 bottom-1/4 bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl p-5 shadow-2xl flex items-center gap-4 max-w-xs transform -translate-x-12">
                <div className="bg-white/50 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold leading-tight">End-to-End</h4>
                  <p className="text-gray-700 text-sm leading-tight">Government & Visa Solutions</p>
                </div>
              </div>

              {/* A highly stylized graphic representing Passports/Visas since we lack the image */}
              <div className="relative w-72 h-96 bg-gradient-to-br from-[#0a192f] to-[#112240] rounded-r-2xl rounded-l-md shadow-2xl border-l-[8px] border-blue-900 transform rotate-12 transition-transform hover:rotate-6 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center opacity-80">
                  <span className="text-white text-xs font-bold tracking-widest">PASSPORT</span>
                  <Globe className="text-[#0066FF] w-6 h-6 opacity-50" />
                </div>
                <div className="flex justify-center">
                  <div className="w-24 h-24 border-2 border-dashed border-[#0066FF]/40 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-12 h-12 text-[#0066FF]/60" />
                  </div>
                </div>
                <div className="text-center opacity-60">
                  <div className="h-1 w-12 bg-white/20 mx-auto rounded-full mb-1"></div>
                  <div className="h-1 w-8 bg-white/20 mx-auto rounded-full"></div>
                </div>
              </div>

              {/* Behind White Card (Visa representation) */}
              <div className="absolute right-0 top-1/4 w-72 h-80 bg-white rounded-xl shadow-xl transform rotate-3 flex flex-col p-6 z-10 border border-gray-100 overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-[#0066FF] font-bold text-lg">VISA</h3>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-400">UNITED ARAB EMIRATES</div>
                    <div className="text-xs font-mono text-gray-800">4892 2314 90</div>
                  </div>
                </div>
                <div className="space-y-3 opacity-60">
                  <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-5/6 bg-gray-100 rounded-full"></div>
                </div>
                <div className="mt-auto">
                   <Image 
                    src="/heroimage.png" 
                    alt="skyline" 
                    width={300} 
                    height={100} 
                    className="opacity-20 object-cover h-24 rounded-lg mix-blend-luminosity"
                  />
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* 6 Services Cards Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8"
        >
          {[
            { title: "Visa Services", desc: "Employment, Family, Golden Visa, Visit Visa & more.", icon: Globe, color: "text-blue-500", bg: "bg-blue-50" },
            { title: "Business Setup", desc: "Mainland, Free Zone, Offshore Company Formation.", icon: Building2, color: "text-indigo-500", bg: "bg-indigo-50" },
            { title: "Document Attestation", desc: "MOFA, Embassy, Certificate Attestation & Translation.", icon: FileText, color: "text-emerald-500", bg: "bg-emerald-50" },
            { title: "Emirates ID Services", desc: "New Registration, Renewal & Status Change.", icon: Contact, color: "text-orange-500", bg: "bg-orange-50" },
            { title: "Medical Services", desc: "Medical Fitness, Insurance & Health Check-up.", icon: Stethoscope, color: "text-rose-500", bg: "bg-rose-50" },
            { title: "PRO Services", desc: "Tawjeeh, Tasheel, Labor, Immigration & more.", icon: Users, color: "text-cyan-500", bg: "bg-cyan-50" }
          ].map((srv, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-50 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 rounded-full ${srv.bg} flex items-center justify-center mb-4`}>
                <srv.icon className={`w-6 h-6 ${srv.color}`} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 text-sm">{srv.title}</h4>
              <p className="text-xs text-gray-500 mb-4 flex-grow">{srv.desc}</p>
              <Link href="/services" className="text-xs font-semibold text-[#0066FF] flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </motion.div>

        {/* Bottom Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 divide-x divide-gray-50">
            
            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 bg-blue-50 text-[#0066FF] rounded-full flex items-center justify-center mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0066FF] mb-1">40+</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Years of Experience</p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">25,000+</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Happy Clients Worldwide</p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-3">
                <BadgeCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">99%</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Success Rate</p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-3">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">24/7</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Customer Support</p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center mb-3">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">15+</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Government Services</p>
            </div>

          </div>
        </motion.div>

      </div>
    </main>
  );
}
