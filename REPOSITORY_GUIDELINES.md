# Guida alla aggiunta dei nuovi progetti

## 📷 Screenshot dei progetti

Questi sono gli screenshot dei progetti da mostrare nel file `README.md` di ogni singolo progetto

### 💻 Desktop
- Dimensioni consigliate: 1280x800
- Formato: Jpeg
- Dove salvarli: `/nome-progetto/screenshots/`
- Come nominarli: `desktop.jpeg`

### 📱 Smartphone
- Dimensioni consigliate: 360x640
- Formato: Jpeg
- Dove salvarli: `/nome-progetto/screenshots/`
- Come nominarli: `smartphone.jpeg`

## 📷 Screenshot repository principale

Questi screenshot servono al sito `smailenvargas.com` per mostrare l'anteprima dei progetti, e richiesto che le immagini vengano salvate in `webp` per una migliore performance nel recupero, se le immagini non vengono salvate in `webp` il sito mostrera un placeholder indicante immagine mancante.

- Dimensioni consigliate: 1280x800
- Formato: Webp
- Dove salvarli: `/screen-capture/`
- Come nominarli: `nome-progetto.webp`[1]

⚠ `screen capture` e deprecato, utilizzare ora `screen-capture` per salvare gli screenshot. La cartella `screen capture` verra rimossa in aggiornamenti futuri.

## 📝 Aggiornamento README principale
1. Aggiungere il nuovo progetto nella sezione appropriata
2. Formato da utilizzare:
   ```markdown
   ### [Nome Progetto](link-al-repo)
   ![Preview](path-to-screenshot)
   Breve descrizione del progetto
   ```

## 🗂️ Struttura Repository
- Come organizzare i file
- Convenzioni di naming
- ...

## 🔍 Checklist Prima del Commit
- [ ] Screenshot aggiunto
- [ ] README principale aggiornato
- [ ] ...


[1] Attenzione a nominare correttamente il file con lo stesso nome della cartella di root del progetto in questione, il sito associa lo screenshot leggendo il nome del progetto dalla cartella.