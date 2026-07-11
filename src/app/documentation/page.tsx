"use client";

import Link from "next/link";
import { Search, Folder, FileText, ChevronRight } from "lucide-react";

const categories = [
  {
    title: "United Arab Emirates",
    slug: "uae",
    topics: [
      { name: "Employment Visa (Mainland)", slug: "employment-mainland" },
      { name: "Employment Visa (Freezone)", slug: "employment-freezone" },
      { name: "Family Sponsership", slug: "family-sponsorship" },
      { name: "Golden Visa Categories", slug: "golden-visa" }
    ]
  },

  {
    title: "General Attestations",
    slug: "attestations",
    topics: [
      { name: "Degree Certificates", slug: "degree" },
      { name: "Marriage Certificates", slug: "marriage" },
      { name: "Birth Certificates", slug: "birth" },
      { name: "Commercial Documents", slug: "commercial" }
    ]
  }
];

export default function DocumentationCenter() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-edcs-navy pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Documentation Center</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Find the exact requirements, forms, and procedures for your specific visa or document clearance needs.
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for 'Saudi Medical' or 'UAE Family Visa'..."
              className="w-full pl-14 pr-4 py-5 rounded-xl text-lg focus:outline-none focus:ring-4 focus:ring-edcs-gold/50 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {categories.map((category) => (
            <div key={category.slug} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-6 bg-gray-50/50 border-b border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-edcs-navy/10 flex items-center justify-center text-edcs-navy">
                  <Folder className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="p-4">
                <ul className="space-y-2">
                  {category.topics.map((topic) => (
                    <li key={topic.slug}>
                      <Link 
                        href={`/documentation/${category.slug}/${topic.slug}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-edcs-navy transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-gray-400 group-hover:text-edcs-gold" />
                          <span className="font-medium">{topic.name}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-edcs-navy" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 border-t border-gray-50 text-center">
                <Link 
                  href={`/documentation/${category.slug}`}
                  className="text-sm font-bold text-edcs-gold hover:text-edcs-navy transition-colors"
                >
                  View All {category.title} Articles &rarr;
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
