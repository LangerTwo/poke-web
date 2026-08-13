const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Eliminar import React from 'react';
  content = content.replace(/import\s+React\s+from\s+['"]react['"];?\r?\n?/g, '');
  
  // Reemplazar import React, { useState } con import { useState }
  content = content.replace(/import\s+React\s*,\s*\{/g, 'import {');

  fs.writeFileSync(file, content, 'utf8');
});
console.log('React imports removed successfully');
