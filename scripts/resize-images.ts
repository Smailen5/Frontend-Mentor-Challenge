import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Percorsi
const INPUT_DIR = path.join(__dirname, "../screen-capture")
const OUTPUT_DIR = path.join(__dirname, "../screen-capture/preview") // cambialo in "../screen-capture/preview" in futuro

const resizeImage = async (file: string) =>{
  const inputPath = path.join(INPUT_DIR, file)
  const outputPath = path.join(OUTPUT_DIR, file)

  const image = sharp(inputPath)
  const metadata = await image.metadata()

  // Ridimensiona solo se e' piu' grande di 480x300
  if ((metadata.width ?? 0) > 480 || (metadata.height ?? 0) > 300) {
    await image.resize(480, 300).toFile(outputPath)
    console.log("✅ Ridimensionato: ", file)
  } else {
    console.log("❌ Non ridimensionato: ", file)
  }
}

fs.readdirSync(INPUT_DIR).filter(file => file.endsWith('.webp')).forEach(file => resizeImage(file))
