const fs = require('fs');
const path = require('path');

const dir = 'src/app/services';
const subdirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory() && f !== '[service]');

for (const subdir of subdirs) {
  const filePath = path.join(dir, subdir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Look for the href="/contact" that is specifically tied to the "Apply for this service" button
    // It should be within the div we previously inserted.
    const searchString = `href="/contact" \n              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-edcs-gold hover:bg-yellow-500 rounded-md transition-colors shadow-sm"\n            >\n              Apply for this service`;
    
    const replacement = `href="/apply?service=${subdir}" \n              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-edcs-gold hover:bg-yellow-500 rounded-md transition-colors shadow-sm"\n            >\n              Apply for this service`;

    if (content.includes(searchString)) {
      content = content.replace(searchString, replacement);
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + filePath);
    } else {
       // Maybe the whitespace is slightly different, let's use regex
       const regex = /href="\/contact"([\s\S]*?>\s*Apply for this service)/;
       if (regex.test(content)) {
          content = content.replace(regex, `href="/apply?service=${subdir}"$1`);
          fs.writeFileSync(filePath, content);
          console.log('Updated with regex ' + filePath);
       } else {
          console.log('Button not found in ' + filePath);
       }
    }
  }
}
