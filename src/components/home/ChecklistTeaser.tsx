"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, FileCheck, ArrowRight, BookOpen } from "lucide-react";

export default function ChecklistTeaser() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-edcs-emerald/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-edcs-gold/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-edcs-navy/5 text-edcs-navy font-semibold text-sm mb-6">
                <BookOpen className="w-4 h-4" />
                Knowledge Architecture
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Clear & Structured <br/>
                <span className="text-edcs-navy">Document Requirements</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stop guessing what documents you need. Our intelligent documentation center provides exact, up-to-date requirements for every visa type, nationality, and destination.
              </p>

              <div className="relative mb-8 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search e.g., UAE Employment Visa Requirements..."
                  className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-edcs-navy focus:border-transparent shadow-sm"
                  readOnly
                />
                <div className="absolute inset-y-0 right-2 flex items-center">
                  <button className="bg-edcs-navy hover:bg-edcs-navy/90 text-white p-2 rounded-full transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 shadow-sm border border-gray-100 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-edcs-emerald" /> Saudi Family Visa
                </span>
                <span className="px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 shadow-sm border border-gray-100 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-edcs-emerald" /> PCC Kerala Process
                </span>
                <span className="px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 shadow-sm border border-gray-100 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-edcs-emerald" /> Medical Test Instructions
                </span>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Mockup UI of Documentation Center */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 text-xs font-medium text-gray-500 flex-1 text-center">edcs-documentation.com</div>
                </div>
                
                <div className="flex h-80">
                  <div className="w-1/3 border-r border-gray-100 bg-gray-50/50 p-4 hidden sm:block">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-edcs-navy/20 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                        <div className="w-5 h-5 mt-0.5 rounded text-blue-500 shrink-0 border border-blue-200 bg-white"></div>
                        <div className="h-4 bg-blue-200 rounded w-full"></div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                        <div className="w-5 h-5 mt-0.5 rounded text-blue-500 shrink-0 border border-blue-200 bg-white"></div>
                        <div className="space-y-2 w-full">
                          <div className="h-4 bg-blue-200 rounded w-full"></div>
                          <div className="h-4 bg-blue-200 rounded w-4/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/documentation"
                className="absolute -bottom-6 -right-6 md:right-8 bg-edcs-gold text-edcs-navy px-6 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition-transform flex items-center gap-2"
              >
                Browse Knowledge Base <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
