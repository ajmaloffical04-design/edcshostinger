const fs = require('fs');
const path = require('path');

const generatePage = (title) => `import React from 'react';

export default function Page({ params }: { params?: any }) {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-edcs-navy mb-8">${title}</h1>
      <p className="text-gray-600">This page is currently under construction. Content for this route will be added soon.</p>
    </div>
  );
}
`;

const routes = [
  { p: 'src/app/services/[service]/page.tsx', t: 'Service Details' },
  { p: 'src/app/[country]/page.tsx', t: 'Country Information' },
  { p: 'src/app/[country]/[visa-type]/page.tsx', t: 'Visa Requirements' },
  { p: 'src/app/documentation/[topic]/page.tsx', t: 'Documentation Guide' },
  { p: 'src/app/knowledge-base/page.tsx', t: 'Knowledge Base' },
  { p: 'src/app/blog/page.tsx', t: 'Blog & Updates' },
  { p: 'src/app/locations/page.tsx', t: 'Our Locations' },
  { p: 'src/app/about/page.tsx', t: 'About EDCS' },
  { p: 'src/app/contact/page.tsx', t: 'Contact Us' },
  { p: 'src/app/track-application/page.tsx', t: 'Track Your Application' },
  { p: 'src/app/countries/page.tsx', t: 'All Countries' },
];

routes.forEach(route => {
  const fullPath = path.join(process.cwd(), route.p);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, generatePage(route.t));
});

console.log('Pages generated successfully!');
