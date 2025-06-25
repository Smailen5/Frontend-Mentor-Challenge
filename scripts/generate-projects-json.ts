import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";

// Percorsi
const PACKAGES_DIR = "packages/*/package.json"
const SCREENSHOTS_DIR = "screen-capture"
const IMAGE_BASE_URL = "https://raw.githubusercontent.com/Smailen5/Frontend-Mentor-Challenge/refs/heads/main" // Url raw di github cambiare in futuro con link Netlify
const OUTPUT_FILE = path.join(process.cwd(), "public", "projects.json")

type Project = {
  name: string;
  description: string;
  technologies: string[];
  createdAt: string;
  imageUrl: string;
  readme: string;
  _v: string;
}

const generateProjects = async ()=>{
  // Recupera i file package.json
  const projectDirs = await fg([`${PACKAGES_DIR}`])

  const projects: Project[] = []

  for (const packagePath of projectDirs) {
    try {
      const packageFolder = path.dirname(packagePath)

      const packageJson = await fs.readJSON(packagePath)

      // Recupera il nome della cartella
      const folderName = path.basename(packageFolder)

      // Recupera il readme e controlla se esiste
      let readmeContent = ""
      const readmePath = path.join(packageFolder, "README.md")
      if (await fs.pathExists(readmePath)) {
        readmeContent = await fs.readFile(readmePath, "utf8")
      } else {
        console.warn(`❌ Readme non trovato per ${folderName}`)
      }

      // Controlla se esiste l'immagine
      const imagePath = path.join(SCREENSHOTS_DIR, `${folderName}.webp`).replace(/\\/g, "/")
      if (!fs.existsSync(imagePath)) {
        console.warn(`❌ Immagine non trovata per ${folderName}`)
      }

      // Crea oggetto progetto
      const project: Project = {
        name: packageJson.name,
        description: packageJson.description || "",
        technologies: packageJson.technologies || [],
        createdAt: packageJson.createdAt || new Date().toISOString(),
        imageUrl: `${IMAGE_BASE_URL}/${imagePath}`,
        readme: readmeContent,
        _v: packageJson.version,
      }

      projects.push(project)
    } catch (err) {
      console.warn(`❌ Errore nel file: ${packagePath}`, err)
    }
  }

  // Ordina i progetti dalla data più recente
  projects.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  // Salva il file
  await fs.outputJson(OUTPUT_FILE, projects, { spaces: 2 })
  console.log(`✅ projects.json generato con ${projects.length} progetti`)
}

generateProjects()
