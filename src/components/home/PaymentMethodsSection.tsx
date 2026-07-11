"use client";

import { motion } from "framer-motion";
import { Check, CreditCard, Wallet, Smartphone, ShieldCheck } from "lucide-react";

export default function PaymentMethodsSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-edcs-navy mb-3 text-left">
            We Accept The Following <span className="text-edcs-navy">Payment Methods</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base text-left">
            Complete payment solutions for your convenience, ensuring a smooth and secure checkout experience.
          </p>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 max-w-7xl mx-auto pb-6 snap-x snap-mandatory hide-scrollbar">
          
          {/* Card 1 - English Tamara */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="snap-start min-w-[260px] md:min-w-0 bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow shrink-0"
          >
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-5">
              <Wallet className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Split it up to 4 payments</h3>
            <p className="text-gray-500 text-xs mb-6 leading-relaxed">
              Make your first payment now, and the rest according to your payment plan. No hidden fees, no interest!
            </p>
            <div className="mt-auto bg-[#F9FAFB] rounded-xl p-3 border border-gray-50">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-[#E3F5E9] text-[#28A745] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs font-medium text-gray-700">Tamara: split it up to 4 payments, interest-free</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Tamara Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="snap-start min-w-[260px] md:min-w-0 bg-[#1E293B] rounded-3xl p-5 md:p-6 shadow-md border border-[#1E293B] flex flex-col h-full text-white relative overflow-hidden shrink-0"
          >
            <div className="absolute -top-10 -right-10 p-6 opacity-10 pointer-events-none">
              <CreditCard className="w-40 h-40 transform rotate-12" />
            </div>
            <div className="relative z-10 flex-grow">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-medium mb-4 backdrop-blur-sm border border-white/10">
                Smart Choice
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">Shop & split your payments</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Make the smart choice, choose Tamara at checkout to manage your payments effectively.
              </p>
            </div>
            
            <div className="mt-6 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 relative z-10 flex justify-between items-center">
               <span className="font-bold text-lg tracking-tighter flex items-center gap-1">
                 <div className="flex -space-x-1">
                   <div className="w-2.5 h-2.5 rounded-full bg-white opacity-90"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-white opacity-50"></div>
                 </div>
                 tamara
               </span>
               <div className="w-5 h-2.5 rounded-full bg-green-400/20 flex items-center p-0.5">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
               </div>
            </div>
          </motion.div>

          {/* Card 3 - Arabic Tamara */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="snap-start min-w-[260px] md:min-w-0 bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow text-right shrink-0" 
            dir="rtl"
          >
            <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-5 mr-auto">
              <Smartphone className="w-5 h-5 text-gray-700" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">قسم فاتورتك حتى 4 دفعات</h3>
            <p className="text-gray-500 text-xs mb-6 leading-relaxed">
              سدد دفعتك الأولى والباقي على حسب خطة الدفع. بدون فوائد ورسوم خفية!
            </p>
            <div className="mt-auto bg-[#F9FAFB] rounded-xl p-3 border border-gray-50">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-[#E3F5E9] text-[#28A745] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-xs font-medium text-gray-700">تمارا: قسم فاتورتك حتى 4 دفعات بدون فوائد</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Logos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="snap-start min-w-[260px] md:min-w-0 bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-md transition-shadow shrink-0"
          >
            <div className="text-left w-full mb-4">
              <div className="w-10 h-10 bg-edcs-navy/5 text-edcs-navy rounded-xl flex items-center justify-center mb-5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-500 text-[11px] leading-relaxed">
                We accept all bank cards and major payments for your convenience.
              </p>
            </div>
            
            <div className="w-full grid grid-cols-2 gap-2 mt-auto">
              <div className="bg-[#F8F9FA] rounded-lg h-10 flex items-center justify-center border border-gray-100">
                <span className="font-bold text-[#1434CB] text-[11px] tracking-wider">VISA</span>
              </div>
              <div className="bg-[#F8F9FA] rounded-lg h-10 flex items-center justify-center border border-gray-100">
                <div className="flex items-center justify-center w-full transform scale-[0.65]">
                  <div className="w-6 h-6 rounded-full bg-[#EB001B]"></div>
                  <div className="w-6 h-6 rounded-full bg-[#F79E1B] -ml-2 opacity-90"></div>
                </div>
              </div>
              <div className="bg-[#F8F9FA] rounded-lg h-10 flex items-center justify-center border border-gray-100">
                <span className="font-bold text-black text-[11px] flex items-center"> Pay</span>
              </div>
              <div className="bg-[#F8F9FA] rounded-lg h-10 flex items-center justify-center border border-gray-100">
                <span className="font-medium text-gray-700 flex items-center gap-1 text-[9px]">
                  <span className="text-[#4285F4] font-bold text-[11px]">G</span>
                  Pay
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
