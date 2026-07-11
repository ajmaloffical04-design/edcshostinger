"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const phoneNumber = "971501234567"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hello, I need assistance with visa clearance services.");

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#1ebd5b] hover:-translate-y-1 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      {/* Optional: Add a pulse animation behind the button for higher visibility */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50"></span>
    </motion.a>
  );
}
