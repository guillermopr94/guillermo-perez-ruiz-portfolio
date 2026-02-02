import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assets = [
  {
    url: 'https://picsum.photos/id/10/800/600',
    name: 'adventure-forge.webp',
    dir: 'public/assets/projects',
  },
  {
    url: 'https://picsum.photos/id/235/800/600',
    name: 'galactic-conquest.webp',
    dir: 'public/assets/projects',
  },
  {
    url: 'https://picsum.photos/id/312/800/600',
    name: 'crearesarte.webp',
    dir: 'public/assets/projects',
  },
  {
    url: 'https://grainy-gradients.vercel.app/noise.svg',
    name: 'noise.svg', // SVG doesn't need webp conversion usually, but we'll serve it locally
    dir: 'public/assets/bg',
  },
];

async function optimize() {
  for (const asset of assets) {
    const dirPath = path.resolve(asset.dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    console.log(`Fetching ${asset.url}...`);
    const response = await fetch(asset.url);
    const buffer = await response.arrayBuffer();
    const inputBuffer = Buffer.from(buffer);

    const outputPath = path.join(dirPath, asset.name);

    if (asset.name.endsWith('.webp')) {
      console.log(`Converting to WebP: ${outputPath}`);
      await sharp(inputBuffer).webp({ quality: 80 }).toFile(outputPath);
    } else {
      console.log(`Saving asset: ${outputPath}`);
      fs.writeFileSync(outputPath, inputBuffer);
    }
  }
  console.log('Optimization complete!');
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
