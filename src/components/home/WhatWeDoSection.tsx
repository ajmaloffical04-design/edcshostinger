"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhatWeDoSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Title and Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="shrink-0">
            <div className="inline-flex items-center rounded-full border border-gray-200 px-6 py-2 text-sm font-medium text-gray-800 bg-white shadow-sm">
              Our Services
            </div>
          </div>
          <div className="max-w-[700px]">
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed">
              What Can We Help You With? At Ejaz Docs, we don&apos;t just process applications — we deliver peace of mind. Since our inception, we&apos;ve been a trusted partner for all your corporate and personal document needs.
            </h2>
          </div>
        </div>

        {/* Bottom Row: 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          
          {/* Card 1: Apply for Visa (Dark Mode) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0b1120] rounded-[2rem] p-8 flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-8">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-300 text-xl leading-relaxed mb-6">
                <span className="text-white font-medium">Apply for Visa</span> <br/>
                Start your UAE visa application quickly with expert guidance and end-to-end processing support.
              </p>
            </div>
            
            <Link href="/services/visa" className="inline-flex items-center gap-3 bg-[#1e293b] hover:bg-edcs-navy text-white rounded-full p-2 pr-6 w-fit transition-colors group-hover:bg-edcs-gold">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#0b1120]" />
              </div>
              <span className="text-sm font-medium">Get Started</span>
            </Link>
          </motion.div>

          {/* Card 2: Business Setup (Image Background) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-[2rem] overflow-hidden group cursor-pointer flex items-center justify-center min-h-[350px] md:min-h-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop")' }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            
            <div className="relative z-10 flex flex-col items-center">
              <Link href="/services/business-setup">
                <div className="backdrop-blur-md bg-white/30 border border-white/40 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/40 transition-colors flex flex-col items-center gap-2">
                  <span>Business Setup</span>
                  <span className="text-xs font-normal opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 max-w-[200px] text-center">
                    Launch your UAE company with complete mainland and free zone setup support.
                  </span>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Track Application (White Stats Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col justify-between cursor-default hover:shadow-lg transition-shadow"
          >
            <div>
              <h3 className="text-5xl font-light text-gray-900 mb-2 tracking-tight">24/7</h3>
              <p className="text-lg font-medium text-gray-800 mb-4">Track Application</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Monitor your visa and business application status in real-time with live updates and alerts.
              </p>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Submitted</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= 10 ? 'bg-blue-500' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Processing</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= 6 ? 'bg-blue-500' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Approved</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i <= 2 ? 'bg-blue-500' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/track" className="mt-8 block text-center py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Check Status
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
