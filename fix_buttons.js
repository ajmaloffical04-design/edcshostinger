const fs = require('fs');
const path = require('path');

const dir = 'src/app/services';

function processFile(filePath, serviceId) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Find the button and remove it from inside the hero section, then add it immediately after the hero section.
  const buttonRegex = /<div className="mt-8">\s*<Link[\s\S]*?href="\/apply\?service=[^"]+"[\s\S]*?className="[^"]*bg-edcs-gold[^"]*"[\s\S]*?>\s*Apply for this service\s*<\/Link>\s*<\/div>/g;
  
  const heroSectionMatch = content.match(/<section[^>]*>[\s\S]*?<h1[\s\S]*?<\/section>/i);
  
  if (heroSectionMatch) {
    let heroBlock = heroSectionMatch[0];
    
    if (buttonRegex.test(heroBlock)) {
      // Remove button from hero block
      const newHeroBlock = heroBlock.replace(buttonRegex, '');
      
      const mobileButtonSection = `
      {/* Apply Button Section (After Hero) */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <Link 
            href={"/apply?service=" + "${serviceId}"} 
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-[#d4af37] hover:bg-yellow-500 rounded-md transition-colors shadow-sm w-full md:w-auto"
          >
            Apply for this service
          </Link>
        </div>
      </section>`;
      
      content = content.replace(heroBlock, newHeroBlock + mobileButtonSection);
    }
  }

  // Double check padding issues for hero texts to ensure it is flush correctly.
  // The user wants padding issue fixed. px-6 is applied, but maybe we should ensure it looks like the screenshot.
  // In the screenshot, the gold button is left aligned and touches the edges... wait.
  // Actually, standardizing the padding to px-6 sm:px-8 is standard.

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log('Moved button in', filePath);
  }
}

function traverse(currentPath) {
  const items = fs.readdirSync(currentPath);
  for (const item of items) {
    const fullPath = path.join(currentPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverse(fullPath);
    } else if (item === 'page.tsx') {
      const folderName = path.basename(currentPath);
      if (!['services', 'pro-services', 'business-setup', '[service]', '[visa-type]'].includes(folderName)) {
        processFile(fullPath, folderName);
      }
    }
  }
}

traverse(dir);
