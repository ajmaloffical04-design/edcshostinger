const fs = require('fs');
const path = require('path');

const dir = 'src/app/services';

function processFile(filePath, serviceId) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Fix padding: replace px-4 with px-6 across the file to give more breathing room on mobile
  content = content.replace(/px-4/g, 'px-6');

  // 2. Add Bottom CTA Section before </main>
  const bottomCTA = `
      {/* Bottom CTA Section */}
      <section className="py-12 lg:py-16 bg-edcs-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/80 mb-8">
            Apply now and let our experts handle your service request quickly and efficiently.
          </p>
          <Link 
            href={"/apply?service=" + "${serviceId}"} 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-[#0d2040] bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Apply for this service
          </Link>
        </div>
      </section>
`;
  if (!content.includes("Bottom CTA Section")) {
    content = content.replace(/<\/main>/, bottomCTA + '\n    </main>');
  }

  // 3. Move the "Apply for this service" button out of the Hero Section.
  // Many pages have the button inside the hero section text flow.
  // First, we find the hero section's closing </section>
  const heroSectionMatch = content.match(/<section[^>]*hero[^>]*>[\s\S]*?<\/section>/i) || content.match(/<section[^>]*>[\s\S]*?<h1[\s\S]*?<\/section>/i);
  
  if (heroSectionMatch) {
    let heroBlock = heroSectionMatch[0];
    
    // Check if hero block has the button
    const buttonRegex = /<div className="mt-8">\s*<Link\s+href="\/apply\?service=[^"]+"\s+className="[^"]*bg-edcs-gold[^"]*">\s*Apply for this service\s*<\/Link>\s*<\/div>/;
    const buttonMatch = heroBlock.match(buttonRegex);
    
    if (buttonMatch) {
      // Remove button from hero block
      const newHeroBlock = heroBlock.replace(buttonRegex, '');
      content = content.replace(heroBlock, newHeroBlock);
      
      // Add the button right after the hero block
      const mobileButtonSection = `
      {/* Apply Button Section (After Hero) */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "${serviceId}"} 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-edcs-gold hover:bg-yellow-500 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Apply for this service
          </Link>
        </div>
      </section>
`;
      content = content.replace(newHeroBlock, newHeroBlock + mobileButtonSection);
    }
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Updated', filePath);
  } else {
    console.log('No changes needed for', filePath);
  }
}

function traverse(currentPath) {
  const items = fs.readdirSync(currentPath);
  for (const item of items) {
    if (item === '[service]' || item === 'business-setup' && currentPath === dir) {
       // skip dynamic route and parent business-setup page (as it's a listing page)
       // wait, business-setup/page.tsx is a listing. business-setup/[category] is not.
       // actually let's skip business-setup/page.tsx but not its subdirs
    }
    
    const fullPath = path.join(currentPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverse(fullPath);
    } else if (item === 'page.tsx') {
      const folderName = path.basename(currentPath);
      // skip layout/listing pages that don't represent a specific service
      if (!['services', 'pro-services', 'business-setup', '[service]', '[visa-type]'].includes(folderName)) {
        processFile(fullPath, folderName);
      }
    }
  }
}

traverse(dir);
