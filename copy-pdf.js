const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'src', 'app', 'coomponents', 'articles', 'CBDTCircular', 'assets', 'cst.pdf');
const destPath = path.join(__dirname, 'public', 'assets', 'cst.pdf');

try {
  fs.copyFileSync(sourcePath, destPath);
  console.log('PDF file copied successfully to public/assets/cst.pdf');
} catch (error) {
  console.error('Error copying file:', error.message);
} 