import React from 'react';

// All known country+visa-type combinations — required for static export (output: 'export')
export function generateStaticParams() {
  const countries = ['uae', 'saudi-arabia', 'qatar', 'kuwait', 'bahrain', 'oman', 'uk', 'usa', 'canada', 'australia'];
  const visaTypes = [
    'employment-visa',
    'family-visa',
    'tourist-visa',
    'student-visa',
    'business-visa',
    'golden-visa',
    'transit-visa',
    'residence-visa',
  ];

  // Generate all combinations
  return countries.flatMap((country) =>
    visaTypes.map((visaType) => ({
      country,
      'visa-type': visaType,
    }))
  );
}

export default function Page({ params }: { params?: any }) {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-edcs-navy mb-8">Visa Requirements</h1>
      <p className="text-gray-600">This page is currently under construction. Content for this route will be added soon.</p>
    </div>
  );
}
