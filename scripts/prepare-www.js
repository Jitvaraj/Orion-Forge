import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const targetDirs = [path.join(rootDir, 'docs'), path.join(rootDir, 'www')];

for (const targetDir of targetDirs) {
  if (fs.existsSync(targetDir)) {
    fs.rmSync(targetDir, { recursive: true, force: true });
  }
  fs.mkdirSync(targetDir, { recursive: true });

  const filesToCopy = [
    'index.html',
    'manifest.json',
    'sw.js',
    'version.json',
    'icon.svg',
    'apple-touch-icon.png',
    'pwa-192x192.png',
    'pwa-512x512.png',
    'pwa-maskable-512x512.png'
  ];

  for (const file of filesToCopy) {
    const src = path.join(rootDir, file);
    const dest = path.join(targetDir, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  }

  const dirsToCopy = ['vendor', 'src'];

  for (const dir of dirsToCopy) {
    const src = path.join(rootDir, dir);
    const dest = path.join(targetDir, dir);
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true });
    }
  }
}

console.log('[Orion Build] Successfully prepared clean "docs" and "www" directories for Capacitor and GitHub Pages.');
