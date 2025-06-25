import fg from "fast-glob";
import fs from "fs-extra";
import path from "path";

// Percorsi
const PACKAGES_DIR = "packages/*/package.json"
const SCREENSHOTS_DIR = "screen-capture"
const MONOREPO_DIR = "packages"
const MONOREPO_BASE_URL = "https://raw.githubusercontent.com/Smailen5/Frontend-Mentor-Challenge/refs/heads/main"
const OUTPUT_FILE = path.join(process.cwd(), "public", "projects.json")

type Project = {
  name: string;
  description: string;
  technologies: string[];
  createdAt: string;
  imageUrl: string | null;
  readmeUrl: string | null;
  _v: string;
}

const generateProjects = async ()=>{
  // Recupera i file package.json
  const projectDirs = await fg([`${PACKAGES_DIR}`])

  const projects: Project[] = []

  const existingProjects = await fs.pathExists(OUTPUT_FILE) ? await fs.readJSON(OUTPUT_FILE) : []

  for (const packagePath of projectDirs) {
    try {
      const packageFolder = path.dirname(packagePath)

      const packageJson = await fs.readJSON(packagePath)

      // Recupera il nome della cartella
      const folderName = path.basename(packageFolder)

      // Controlla se il progetto esiste gia in projects.json
      const existingProject = existingProjects.find((p: Project) => p.name === packageJson.name)

      // Recupera la data di creazione o aggiunge la data odierna se non esiste
      const createdAt = packageJson.createdAt || (existingProject ? existingProject.createdAt : new Date().toISOString())

      // Recupera percorso readme e controlla se esiste
      const readmePath = path.join(MONOREPO_DIR, folderName, "README.md").replace(/\\/g, "/")
      const readmeExists = await fs.pathExists(readmePath)
      if (!readmeExists) console.warn(`❌ Readme non trovato per ${folderName}`)

      // Recupera percorso immagine e controlla se esiste
      const imagePath = path.join(SCREENSHOTS_DIR, `${folderName}.webp`).replace(/\\/g, "/")
      const imageExists = await fs.pathExists(imagePath)
      if (!imageExists) console.warn(`❌ Immagine non trovata per ${folderName}`)

      // Crea oggetto progetto
      const project: Project = {
        name: packageJson.name,
        description: packageJson.description || "",
        technologies: packageJson.technologies || [],
        createdAt,
        imageUrl: imageExists ? `${MONOREPO_BASE_URL}/${imagePath}` : null,
        readmeUrl: readmeExists ? `${MONOREPO_BASE_URL}/${MONOREPO_DIR}/${folderName}/README.md` : null,
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
