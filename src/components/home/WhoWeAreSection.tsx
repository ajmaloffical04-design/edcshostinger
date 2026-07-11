"use client";

import { motion } from "framer-motion";
import { Globe, IdCard, Stethoscope, FileCheck } from "lucide-react";
import Image from "next/image";

export default function WhoWeAreSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Text Block (Spans 2 columns on lg) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col justify-center pr-0 lg:pr-12 mb-8 lg:mb-0"
          >
            <span className="text-gray-500 font-medium text-sm tracking-wider uppercase mb-3 block">Who We Are</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#344054] mb-8 leading-tight">
              We are making <br className="hidden md:block"/> better for everyone
            </h2>
            <div className="flex gap-6">
              <div className="w-1.5 bg-edcs-navy shrink-0 rounded-full"></div>
              <p className="text-gray-500 leading-relaxed text-base">
                Established in 1982, EJAZ Documents Clearing Services has been a trusted leader in document processing and government-related services across the UAE. With over 40 years of expertise, we provide fast, reliable, and professional solutions tailored to individuals and businesses. As a premier business setup and document processing firm, we specialize in company licensing, visa applications, Emirates ID processing, and more. Our deep understanding of UAE regulations ensures a smooth, hassle-free experience, allowing you to focus on what truly matters—your success.
              </p>
            </div>
          </motion.div>

          {/* Top Right Card - Immigration Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl flex flex-col justify-end text-left shadow-lg group hover:-translate-y-1 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden"
          >
            <Image 
              src="/immigrationservice.png"
              alt="Immigration Services"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="relative z-10 w-full backdrop-blur-xl bg-black/30 p-4 sm:p-5 border-t border-white/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-medium text-base">Immigration Services</h3>
            </div>
          </motion.div>

          {/* Bottom Left Card - Golden Visa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl flex flex-col justify-end text-left shadow-lg group hover:-translate-y-1 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
              alt="Golden Visa"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="relative z-10 w-full backdrop-blur-xl bg-black/30 p-4 sm:p-5 border-t border-white/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <IdCard className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-medium text-base">Golden Visa</h3>
            </div>
          </motion.div>

          {/* Bottom Middle Card - Emirates Identity Authority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl flex flex-col justify-end text-left shadow-lg group hover:-translate-y-1 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
              alt="Emirates Identity Authority"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="relative z-10 w-full backdrop-blur-xl bg-black/30 p-4 sm:p-5 border-t border-white/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-medium text-base leading-tight">Emirates Identity Authority</h3>
            </div>
          </motion.div>

          {/* Bottom Right Card - Medical Test Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl flex flex-col justify-end text-left shadow-lg group hover:-translate-y-1 transition-all duration-300 min-h-[220px] h-full relative overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
              alt="Medical Test Applications"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="relative z-10 w-full backdrop-blur-xl bg-black/30 p-4 sm:p-5 border-t border-white/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Stethoscope className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-medium text-base leading-tight">Medical Test Applications</h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
