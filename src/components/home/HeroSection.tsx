"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HelpCircle, CheckCircle2, FileText, Stethoscope, Pin, Star, X } from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: ""
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormData, setModalFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    purpose: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New Inquiry from Website:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Purpose: ${formData.purpose}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/971586481006?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Sales Inquiry from Website:
Name: ${modalFormData.name}
Address: ${modalFormData.address}
Email: ${modalFormData.email}
Phone: ${modalFormData.phone}
Purpose: ${modalFormData.purpose}`;

    const whatsappUrl = `https://wa.me/971586481006?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-24 pb-24 lg:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image 
          src="/heroimage.png" 
          alt="Dubai Skyline" 
          fill 
          className="object-cover object-bottom opacity-100 hidden md:block" 
          priority
          unoptimized
        />
        {/* Mobile Image */}
        <Image 
          src="/heromobile.png" 
          alt="Dubai Skyline Mobile" 
          fill 
          className="object-cover object-bottom opacity-100 md:hidden" 
          priority
          unoptimized
        />
        {/* Optional light gradient overlay if the image needs text contrast, but the image is very white */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/80 to-white/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 pt-12 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-edcs-navy leading-[1.1] mb-6 tracking-tight">
              Scale Globally<br />
              With Smarter<br />
              <span className="text-[#0066FF]">Visa Clearance</span>
            </h1>
            
            <p className="text-base md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              EDCS helps businesses of all sizes secure employment visas, automate documentation, and manage employee onboarding with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="https://wa.me/971586481006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-[#0066FF] text-white px-6 py-3 rounded-xl font-medium text-base hover:bg-blue-700 transition-colors duration-300 shadow-md shadow-blue-900/20"
              >
                Enquiry Now <ArrowRight className="w-4 h-4" />
              </Link>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex justify-center items-center gap-2 bg-transparent border-2 border-[#0066FF] text-[#0066FF] px-6 py-3 rounded-xl font-medium text-base hover:bg-blue-50 transition-colors duration-300"
              >
                Talk to Sales <HelpCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500 font-medium">Trusted by 10,000+ businesses worldwide</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="User" />
                  <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=4" alt="User" />
                </div>
                <div className="flex items-center gap-1 text-[#FBBF24]">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-gray-800 text-sm font-bold ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Solid White Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative z-20">
              
              <div className="mb-6">
                <h3 className="text-edcs-navy text-2xl font-bold">Get To Know More!</h3>
                <p className="text-gray-500 text-sm mt-1">Fill out the form below and we'll be in touch.</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm" />
                </div>
                <div>
                  <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm" />
                </div>
                <div className="relative">
                  <select required value={formData.purpose} onChange={(e) => setFormData({...formData, purpose: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm appearance-none cursor-pointer">
                    <option value="" className="text-gray-500">--select purpose--</option>
                    <option value="Golden Visa">Golden Visa</option>
                    <option value="Investors Visa">Investors Visa</option>
                    <option value="Visit Visa">Visit Visa</option>
                    <option value="Residence Visa">Residence Visa</option>
                    <option value="Maid Visa">Maid Visa</option>
                    <option value="Family Visa">Family Visa</option>
                    <option value="Visa Renewal / Cancellation">Visa Renewal / Cancellation</option>
                    <option value="Work Permit">Work Permit</option>
                    <option value="Legal Translation">Legal Translation</option>
                    <option value="Corporate Health Insurance">Corporate Health Insurance</option>
                    <option value="DHA Medical Fitness Test">DHA Medical Fitness Test</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                <div>
                  <textarea placeholder="Message" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors shadow-md mt-2">
                  SUBMIT
                </button>
              </form>

            </div>
          </motion.div>
        </div>

      </div>

      {/* Pop-up Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl w-full max-w-md relative"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h3 className="text-edcs-navy text-2xl font-bold">Talk to Sales</h3>
              <p className="text-gray-500 text-sm mt-1">Please provide your details below.</p>
            </div>

            <form className="space-y-4" onSubmit={handleModalSubmit}>
              <div>
                <input type="text" placeholder="Full Name" required value={modalFormData.name} onChange={(e) => setModalFormData({...modalFormData, name: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm" />
              </div>
              <div>
                <input type="text" placeholder="Address" required value={modalFormData.address} onChange={(e) => setModalFormData({...modalFormData, address: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm" />
              </div>
              <div>
                <input type="email" placeholder="Email" required value={modalFormData.email} onChange={(e) => setModalFormData({...modalFormData, email: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm" />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" required value={modalFormData.phone} onChange={(e) => setModalFormData({...modalFormData, phone: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm" />
              </div>
              <div className="relative">
                <select required value={modalFormData.purpose} onChange={(e) => setModalFormData({...modalFormData, purpose: e.target.value})} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all text-sm appearance-none cursor-pointer">
                  <option value="" className="text-gray-500">--What for enquiry--</option>
                  <option value="Golden Visa">Golden Visa</option>
                  <option value="Investors Visa">Investors Visa</option>
                  <option value="Visit Visa">Visit Visa</option>
                  <option value="Residence Visa">Residence Visa</option>
                  <option value="Maid Visa">Maid Visa</option>
                  <option value="Family Visa">Family Visa</option>
                  <option value="Visa Renewal / Cancellation">Visa Renewal / Cancellation</option>
                  <option value="Work Permit">Work Permit</option>
                  <option value="Legal Translation">Legal Translation</option>
                  <option value="Corporate Health Insurance">Corporate Health Insurance</option>
                  <option value="DHA Medical Fitness Test">DHA Medical Fitness Test</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              
              <button type="submit" className="w-full bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors shadow-md mt-4">
                SUBMIT
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
