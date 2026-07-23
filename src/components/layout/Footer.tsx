"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const InstagramIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const LinkedinIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-edcs-navy text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg">
              <Image 
                src="/edcslogo.png" 
                alt="EDCS Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fast & Trusted Visa Clearance Services for GCC Countries. We provide premium document processing and consultancy for a seamless international transition.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-edcs-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-edcs-gold transition-colors">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-edcs-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-edcs-gold transition-colors">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-edcs-gold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> All Services
                </Link>
              </li>
              <li>
                <Link href="/countries" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> GCC Countries
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> Document Center
                </Link>
              </li>
              <li>
                <Link href="/track-application" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> Track Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-edcs-gold">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/employment-visa" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> Employment Visa
                </Link>
              </li>
              <li>
                <Link href="/services/family-visa" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> Family Visa
                </Link>
              </li>
              <li>
                <Link href="/services/embassy-attestation" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> Embassy Attestation
                </Link>
              </li>
              <li>
                <Link href="/services/medical-processing" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> Medical Processing
                </Link>
              </li>
              <li>
                <Link href="/services/mofa-services" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="mr-2">›</span> MOFA Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-edcs-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-edcs-gold mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Gold Souk Gate Number 3, Metro Building, ground Floor, Deira, Dubai-U.A.E
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-edcs-gold mr-3 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:+97142264321" className="text-gray-300 hover:text-white transition-colors text-sm">
                    +971 4 22 64 321
                  </a>
                  <a href="tel:+971586481006" className="text-gray-300 hover:text-white transition-colors text-sm mt-1">
                    +971 58 648 1006
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-edcs-gold mr-3 flex-shrink-0" />
                <a href="mailto:ejazdoc30@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  ejazdoc30@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} EDCS - Ejaz Document Clearance Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
