import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");

// Find the worker file from react-pdf's bundled pdfjs-dist
const src = join(
  root,
  "node_modules",
  "react-pdf",
  "node_modules",
  "pdfjs-dist",
  "build",
  "pdf.worker.min.mjs"
);
const dest = join(publicDir, "pdf.worker.min.mjs");

if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

console.log(`Copying PDF.js worker...`);
copyFileSync(src, dest);
console.log(`  ${src}`);
console.log(`  -> ${dest}`);
console.log("Done.");
