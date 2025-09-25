import fg from 'fast-glob';
import fs from 'fs-extra';
import path from 'path';

// Percorsi
const PACKAGES_DIR = 'packages/*/package.json';
const OUTPUT_DIR = 'screen-capture/screenshots';

interface PackageJson {
  name: string;
}

const copyProjectScreenshots = async () => {
  try {
    // Recupera tutti i package.json
    const packagePaths = await fg([PACKAGES_DIR]);

    for (const packagePath of packagePaths) {
      try {
        const packageFolder = path.dirname(packagePath);
        const packageJson: PackageJson = await fs.readJSON(packagePath);

        // Percorso della cartella screenshot
        const screenshotDir = path.join(packageFolder, 'screenshot');

        // Verifica se esiste la cartella screenshot
        if (!(await fs.pathExists(screenshotDir))) {
          console.log(
            `⚠️  Nessuna cartella screenshots trovata per ${packageJson.name}`
          );
          continue;
        }

        // Crea la cartella di destinazione
        const projectOutputDir = path.join(OUTPUT_DIR, packageJson.name);
        await fs.ensureDir(projectOutputDir);

        // Leggi le immagini nella cartella screenshot
        const screenshots = await fs.readdir(screenshotDir);
        const imageFiles = screenshots.filter((file) =>
          file.match(/\.(jpg|jpeg|png|webp)$/i)
        );

        if (imageFiles.length === 0) {
          console.log(`⚠️  Nessuna immagine trovata per ${packageJson.name}`);
          continue;
        }

        // Copia le immagini
        for (const imageFile of imageFiles) {
          const sourcePath = path.join(screenshotDir, imageFile);
          const destPath = path.join(projectOutputDir, imageFile);

          await fs.copy(sourcePath, destPath);
          console.log(`✅ Copiato: ${packageJson.name}/${imageFile}`);
        }
      } catch (error) {
        console.log(`❌ Errore con ${packagePath}:`, error);
      }
    }

    console.log('\n🎉 Copia delle immagini completata!');
  } catch (error) {
    console.error('❌ Errore generale:', error);
  }
};

// Esegui lo script
copyProjectScreenshots();
