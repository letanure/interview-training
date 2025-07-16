#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Alias mapping: old pattern -> new pattern
const ALIAS_MAPPINGS = {
  '@/components/': '@components/',
  '@/pages/': '@pages/',
  '@/hooks/': '@hooks/',
  '@/utils/': '@utils/',
  '@/types/': '@types/',
  '@/routes/': '@routes/',
  '@/styles/': '@styles/',
};

function updateImportsInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let hasChanges = false;

  // Update import statements
  for (const [oldPattern, newPattern] of Object.entries(ALIAS_MAPPINGS)) {
    const importRegex = new RegExp(`from ["']${oldPattern.replace('/', '\\/')}`, 'g');
    const beforeUpdate = updatedContent;
    updatedContent = updatedContent.replace(importRegex, `from "${newPattern}`);
    if (beforeUpdate !== updatedContent) {
      hasChanges = true;
    }
  }

  // Save file if changes were made
  if (hasChanges) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`✅ Updated: ${filePath}`);
    return true;
  }

  return false;
}

function findTsxTsFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', 'dist', 'build', '.git'].includes(entry.name)) {
        files.push(...findTsxTsFiles(fullPath));
      }
    } else if (entry.isFile() && /\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function main() {
  console.log('🔄 Migrating import paths to semantic aliases...\n');

  const srcDir = path.join(__dirname, '../src');
  const files = findTsxTsFiles(srcDir);

  let updatedCount = 0;
  const updatedFiles = [];

  for (const file of files) {
    if (updateImportsInFile(file)) {
      updatedCount++;
      updatedFiles.push(file);
    }
  }

  console.log(`\n📊 Migration Summary:`);
  console.log(`- Files scanned: ${files.length}`);
  console.log(`- Files updated: ${updatedCount}`);
  
  if (updatedFiles.length > 0) {
    console.log(`\n📝 Updated files:`);
    updatedFiles.forEach(file => {
      console.log(`   ${file.replace(process.cwd(), '.')}`);
    });
  }

  if (updatedCount > 0) {
    console.log('\n🎉 Import migration completed successfully!');
    console.log('💡 You may need to restart your dev server for changes to take effect.');
  } else {
    console.log('\n✨ No imports needed to be updated.');
  }
}

main();