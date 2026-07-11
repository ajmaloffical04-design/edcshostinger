"use client";

import { motion } from "framer-motion";
import { FileUp, CheckSquare, Stethoscope, Landmark, ThumbsUp, PlaneTakeoff } from "lucide-react";

const steps = [
  { icon: FileUp, title: "Submit Documents", desc: "Upload or drop off required documents." },
  { icon: CheckSquare, title: "Verification", desc: "Our experts review for compliance." },
  { icon: Stethoscope, title: "Medical & Attestation", desc: "Complete required medical tests." },
  { icon: Landmark, title: "Embassy Processing", desc: "Submission to relevant authorities." },
  { icon: ThumbsUp, title: "Visa Approval", desc: "Final clearance and visa stamping." },
  { icon: PlaneTakeoff, title: "Travel Ready", desc: "You are cleared for travel." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-edcs-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Streamlined Process</h2>
          <p className="text-lg text-gray-300">
            A transparent, international-standard workflow designed to get your visa approved faster.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-edcs-navy border-4 border-edcs-gold flex items-center justify-center mb-6 shadow-lg shadow-edcs-gold/20">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-16 left-1/2 w-0.5 h-12 bg-white/10 -translate-x-1/2"></div>
                )}
                
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">
                  {step.desc}
                </p>
                
                <div className="mt-4 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-edcs-gold text-sm font-bold">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
