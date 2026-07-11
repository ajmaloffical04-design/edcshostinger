"use client";

import { useState } from "react";
import { Search, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TrackApplication() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<null | 'success' | 'notFound'>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setIsSearching(false);
      setResult(trackingNumber.length > 5 ? 'success' : 'notFound');
    }, 1500);
  };

  return (
    <div className="py-24 bg-gray-50 min-h-[80vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-edcs-navy px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-luminosity"></div>
            <h1 className="text-3xl font-bold text-white mb-4 relative z-10">Track Your Application</h1>
            <p className="text-gray-300 relative z-10">Enter your passport number or EDCS tracking ID</p>
          </div>
          
          <div className="p-8 md:p-12">
            <form onSubmit={handleSearch} className="relative mb-12">
              <input
                type="text"
                placeholder="e.g., EDCS-123456789"
                className="w-full pl-6 pr-32 py-5 bg-gray-50 border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-edcs-navy focus:bg-white transition-all uppercase tracking-wide"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-2 top-2 bottom-2 bg-edcs-navy hover:bg-edcs-navy/90 text-white px-8 rounded-lg font-bold flex items-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Search className="w-5 h-5" /> Track
                  </>
                )}
              </button>
            </form>

            {/* Results Section */}
            {result === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-100 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-green-200">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-900">Application Approved</h3>
                    <p className="text-green-700">Your visa has been processed successfully.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 mb-1">Applicant Name</p>
                    <p className="font-semibold text-gray-900">Mohammed Ali</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Destination</p>
                    <p className="font-semibold text-gray-900">United Arab Emirates</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Visa Type</p>
                    <p className="font-semibold text-gray-900">Employment Visa (2 Years)</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Processing Date</p>
                    <p className="font-semibold text-gray-900">Oct 24, 2025</p>
                  </div>
                </div>
              </motion.div>
            )}

            {result === 'notFound' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-100 rounded-2xl p-6 flex items-start gap-4"
              >
                <AlertCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-900 mb-1">Record Not Found</h3>
                  <p className="text-red-700 text-sm">We couldn't find an application matching that tracking number. Please verify the number and try again, or contact support.</p>
                </div>
              </motion.div>
            )}

            {!result && !isSearching && (
              <div className="text-center text-gray-400">
                <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Enter your tracking details above to see the real-time status of your application.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
