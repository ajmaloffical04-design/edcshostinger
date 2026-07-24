const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src/app');
let fixed = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<Link') && !content.includes('import Link from')) {
    if (content.includes('"use client"') || content.includes("'use client'")) {
      content = content.replace(/("use client"|'use client');?/, '$1;\nimport Link from "next/link";');
    } else {
      content = 'import Link from "next/link";\n' + content;
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed', file);
    fixed++;
  }
});
console.log('Total fixed:', fixed);
