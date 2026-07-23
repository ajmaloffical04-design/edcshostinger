"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { 
      name: "Business Setup", 
      href: "/services/business-setup",
      submenu: [
        { name: "LLC Company Formation", href: "/services/business-setup/llc-company-formation" },
        { name: "Free Zones", href: "/services/free-zone-company-formation" },
        { name: "Professional License", href: "/services/business-setup/professional-license" },
        { name: "Commercial License", href: "/services/business-setup/commercial-license" },
        { name: "Industrial License", href: "/services/business-setup/industrial-license" },
        { name: "Consulting for Every Business", href: "/services/business-setup/consulting" }
      ]
    },
    { 
      name: "Pro Services", 
      href: "/services/pro-services",
      submenu: [
        { name: "Amer Services", href: "/services/pro-services/amer-services" },
        { name: "Tasheel Services", href: "/services/pro-services/tasheel-services" },
        { name: "Golden Visa", href: "/services/pro-services/golden-visa" },
        { name: "DED Services", href: "/services/pro-services/ded-services" },
        { name: "Family Visa", href: "/services/pro-services/family-visa" },
        { name: "Investor Visa", href: "/services/pro-services/investor-visa" },
        { name: "Maid Visa", href: "/services/pro-services/maid-visa" }
      ]
    },
    { name: "Translation Services", href: "/services/legal-translation/" },
    { name: "Certificate Attestation", href: "/services/certificate-attestation" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header 
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300 ${
          scrolled ? "top-4" : "top-8"
        }`}
      >
        <div className="bg-white rounded-full px-6 md:px-8 py-3 flex items-center justify-between shadow-xl">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/edcslogo.png" 
                alt="EDCS Logo" 
                width={100} 
                height={32} 
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-black text-sm font-medium transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.submenu && (
                    <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  )}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-xl overflow-hidden py-2 border border-gray-100 top-full">
                    {link.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/contact"
              className="bg-black text-white hover:bg-gray-800 px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              Enquiry Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden bg-white rounded-2xl shadow-2xl p-6 max-h-[calc(100vh-120px)] overflow-y-auto"
          >
            <div className="space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className="block text-gray-900 font-medium text-lg hover:text-blue-600"
                      onClick={() => !link.submenu && setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className="p-2 text-gray-500 hover:text-blue-600 focus:outline-none"
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openSubmenus[link.name] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                    )}
                  </div>
                  {link.submenu && openSubmenus[link.name] && (
                    <div className="pl-4 border-l-2 border-gray-100 space-y-2 mt-1">
                      {link.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block text-gray-600 hover:text-blue-600 py-1.5"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="w-full text-center bg-black text-white rounded-full font-medium py-3"
                  onClick={() => setIsOpen(false)}
                >
                  Enquiry Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
