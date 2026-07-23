"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-edcs-navy pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our visa experts. We are here to help you navigate your international transition seamlessly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Dubai Head Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-edcs-navy/10 flex items-center justify-center text-edcs-navy shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm mt-1">Gold Souk Gate Number 3, Metro Building, ground Floor, Deira, Dubai-U.A.E</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-edcs-navy/10 flex items-center justify-center text-edcs-navy shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600 text-sm mt-1">+971 4 22 64 321</p>
                    <p className="text-gray-600 text-sm">+971 58 648 1006</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-edcs-navy/10 flex items-center justify-center text-edcs-navy shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm mt-1">ejazdoc30@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-edcs-navy/10 flex items-center justify-center text-edcs-navy shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Working Hours</p>
                    <p className="text-gray-600 text-sm mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 overflow-hidden h-[300px]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.98427635504!2d55.29398838685144!3d25.27111437112372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432f9d8696c7%3A0x777e3e666cffe1e1!2sEjaz%20Documents%20Clearing%20Services!5e0!3m2!1sen!2sin!4v1784809925874!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.75rem' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-edcs-navy focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-edcs-navy focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-edcs-navy focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-edcs-navy focus:border-transparent outline-none transition-all" placeholder="+971 50 123 4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-edcs-navy focus:border-transparent outline-none transition-all bg-white">
                    <option>Employment Visa Processing</option>
                    <option>Family Sponsorship</option>
                    <option>Certificate Attestation</option>
                    <option>Medical Processing</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-edcs-navy focus:border-transparent outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full bg-edcs-navy hover:bg-edcs-navy/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
