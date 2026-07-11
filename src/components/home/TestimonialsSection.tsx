"use client";

import { motion } from "framer-motion";
import { Play, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mohammed Al-Fayed",
    role: "Corporate HR Manager, UAE",
    content: "EDCS has completely transformed how we handle employment visas for our staff. Their documentation structure is flawless.",
    rating: 5,
    video: true
  },
  {
    name: "Sarah John",
    role: "Nurse, Saudi Arabia",
    content: "The medical processing and embassy attestation for my Saudi work visa was handled so professionally. Highly recommended.",
    rating: 5,
    video: false
  },
  {
    name: "Abdul Rahman",
    role: "Business Owner, Qatar",
    content: "We rely entirely on EDCS for our family and business visas. The application tracking dashboard is a game changer.",
    rating: 5,
    video: false
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-edcs-navy mb-4">Trusted by Thousands</h2>
          <p className="text-lg text-gray-600">
            Hear from Gulf workers, families, and corporate partners about their experience with our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-edcs-gold/20" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-edcs-gold text-edcs-gold" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-edcs-navy/10 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                  {testimonial.video ? (
                    <>
                      <div className="absolute inset-0 bg-edcs-navy/80 flex items-center justify-center transition-opacity">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                    </>
                  ) : (
                    <span className="text-xl font-bold text-edcs-navy">{testimonial.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
