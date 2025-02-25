const { optimize } = require('svgo');
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'src/icons');
const outputDir = path.join(__dirname, 'dist');

// Process all SVGs
fs.readdirSync(iconsDir).forEach(file => {
  const content = fs.readFileSync(path.join(iconsDir, file));
  const result = optimize(content, {
    plugins: [
      'preset-default',
      { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }
    ]
  });
  fs.writeFileSync(path.join(outputDir, file), result.data);
});