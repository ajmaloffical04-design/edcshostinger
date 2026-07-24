const fs = require('fs');
const path = require('path');

const dir = 'src/app/services';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Increase padding for better visual balance
  content = content.replace(/py-8 lg:py-16/g, 'py-16 lg:py-24');
  content = content.replace(/py-12 lg:py-16/g, 'py-16 lg:py-24');

  // 2. Fix alignment of top-level section divs that have max-w-4xl mx-auto or max-w-3xl mx-auto
  // Pattern: <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 ...">
  const regex = /<section([^>]*)>\s*<div className="max-w-(4xl|3xl) mx-auto px-6 sm:px-6 lg:px-8([^"]*)">/g;
  
  content = content.replace(regex, (match, sectionAttrs, maxW, divAttrs) => {
    return `<section${sectionAttrs}>\n        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">\n          <div className="max-w-${maxW === '3xl' ? '3xl' : '4xl'}${divAttrs}">`;
  });

  // Now we must close the new div before </section> for only those sections we modified
  // A simple way is to replace `</div>\s*</section>` with `</div>\n        </div>\n      </section>`
  // But ONLY for sections we actually opened a new div.
  // We can do this more robustly: we only replace </div></section> if the file had matches
  if (content !== originalContent) {
     // Wait, it's safer to just split by <section and </section> and process each block
  }

  // Let's do a safer block-by-block replacement
  let newContent = '';
  const sections = originalContent.split('</section>');
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    if (i < sections.length - 1) { // not the last chunk
      if (section.match(/<section[^>]*>\s*<div className="max-w-(4xl|3xl) mx-auto px-6 sm:px-6 lg:px-8/)) {
         section = section.replace(/<section([^>]*)>\s*<div className="max-w-(4xl|3xl) mx-auto px-6 sm:px-6 lg:px-8([^"]*)">/, 
           '<section$1>\n        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">\n          <div className="max-w-$2$3">');
         
         // Replace the last </div> with </div></div>
         section = section.replace(/<\/div>\s*$/, '</div>\n        </div>');
      }
      
      // Also fix inner elements that have max-w-4xl mx-auto inside a max-w-7xl mx-auto container
      // If we see <div className="max-w-4xl mx-auto, and it's NOT the outer px-6 container, we just remove mx-auto
      // e.g. <div className="max-w-4xl mx-auto mb-10 space-y-4"> -> remove mx-auto
      section = section.replace(/className="max-w-(4xl|3xl) mx-auto([^"]*)"/g, (match, size, rest) => {
         if (rest.includes('px-6')) return match; // Handled above or it's top-level
         return `className="max-w-${size}${rest}"`;
      });
      
      // Also fix padding
      section = section.replace(/py-8 lg:py-16/g, 'py-16 lg:py-24');
      section = section.replace(/py-12 lg:py-16/g, 'py-16 lg:py-24');
      section = section.replace(/py-6/g, 'py-10'); // For apply button section
      
      newContent += section + '</section>';
    } else {
      newContent += section;
    }
  }

  content = newContent;

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
    const fullPath = path.join(currentPath, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      traverse(fullPath);
    } else if (item === 'page.tsx') {
      const folderName = path.basename(currentPath);
      // skip main layout/listing pages, only apply to individual service pages
      if (!['services', 'pro-services', 'business-setup', 'visa-services', '[service]', '[visa-type]'].includes(folderName)) {
        processFile(fullPath);
      }
    }
  }
}

traverse(dir);
