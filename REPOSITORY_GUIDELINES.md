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

## 📝 Aggiornamento README progetto

Segui le linee guida di Frontend Mentor per aggiornare il file `README.md` del progetto, utilizza il file `README-template.md`

⚠ Nella sezione `Build with` fare attenzione ad aggiungere massimo 10 tecnologie tra le piu importanti.
I filtri disponibili al momento sono:

- CSS[2]
- JavaScript[2]
- TypeScript[2]
- Tailwind
- React

## 📷 Screenshot repository principale

Questi screenshot servono al sito <a href='smailenvargas.com'>smailenvargas.com</a> per mostrare l'anteprima dei progetti, e richiesto che le immagini vengano salvate in `webp` per una migliore performance nel recupero, se le immagini non vengono salvate in `webp` il sito mostrera un placeholder indicante immagine mancante.

- Dimensioni consigliate: 1280x800
- Formato: Webp
- Dove salvarli: `/screen-capture/`
- Come nominarli: `nome-progetto.webp`[1]

⚠ `screen capture` e deprecato, utilizzare ora `screen-capture` per salvare gli screenshot. La cartella `screen capture` verra rimossa in aggiornamenti futuri.

## 📝 Aggiornamento README principale

1. Aggiungere il nuovo progetto all'inizio
2. Formato da utilizzare:

   ```markdown
   #### Nome Progetto [Repository](link-al-repo) - [Live site](link-al-sito)

   ![Preview](./screen-capture/nome-progetto.webp)

   <!-- Breve descrizione del progetto da aggiungere in futuro -->
   ```

## 🔍 Checklist Prima del Commit

- [ ] <a href='#screenshot-dei-progetti'>Screenshot progetto</a> aggiunto
- [ ] <a href='#aggiornamento-readme-progetto'>README progetto</a> aggiornato
- [ ] <a href='#screenshot-repository-principale'>Screenshot repository principale</a>
- [ ] <a href='#aggiornamento-readme-principale'>README principale</a> aggiornato
- [ ] ...

[1] Attenzione a nominare correttamente il file con lo stesso nome della cartella di root del progetto in questione, il sito associa lo screenshot leggendo il nome del progetto dalla cartella.
[2] ⚠ Fare attenzione a `JavaScript` e `TypeScript`, vanno scritti in camel case o il sito non li filtrera correttamente, stessa cosa vale per `CSS`, tutto maiuscolo.
