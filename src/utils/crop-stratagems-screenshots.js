const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const inputDirectory = './screenshots';
const outputDirectory = './cropped_images';

if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

fs.readdir(inputDirectory, async (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(inputDirectory, file);
      const outputPath = path.join(outputDirectory, file);

      try {
        const image = await Jimp.read(inputPath);
        // Start at (3119, 984), crop 240x240
        const croppedImage = image.crop(3119, 984, 240, 240);

        await croppedImage.writeAsync(outputPath);
        console.log('Cropped and saved:', outputPath);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }

  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(inputDirectory, file);
      const outputPath = path.join(
        outputDirectory,
        file.replace(/\.(png)$/, '.webp'),
      );

      try {
        const image = await Jimp.read(inputPath);
        // Start at (3119, 984), crop 240x240
        const croppedImage = image.crop(3119, 984, 240, 240);

        // Convert to WebP format with lossless compression
        await croppedImage.writeAsync(outputPath, { quality: 100 });

        console.log('Cropped, converted to WebP, and saved:', outputPath);
      } catch (error) {
        console.error('Error processing image:', error);
      }
    }
  }
});
