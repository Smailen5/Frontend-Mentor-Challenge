# Guida alla aggiunta dei nuovi progetti

## Prima di iniziare

- Crea un nuovo ramo partendo da `main` e chiamalo `nome-progetto`
- Nella cartella `packages` creare una nuova cartella con il nome del progetto
- Copia il progetto in questa cartella

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

⚠ ~~Nella sezione `Build with` fare attenzione ad aggiungere massimo 10 tecnologie tra le piu importanti.~~
I filtri disponibili al momento sono:

- CSS[2]
- JavaScript[2]
- TypeScript[2]
- Tailwind
- React

## 📝 Aggiornamento Package.json

Aggiorna il file `package.json` aggiungendo:

```json
{
  "name": "nome-progetto",
  "technologies": ["tech 1", "tech 2", "tech 3"],
  "description": "breve descrizione del progetto",
  "createdAt": "2025-05-21 00:00:00.000 +00:00"
}
```

Se non vengono aggiunti questi dati o manca il file `package.json` il server estrarra il nome del progetto dal nome della cartella e imposterà come data di creazione la data in cui viene aggiunto il progetto al db, tecnologie e descrizione saranno impostate a array vuoto e stringa vuota.

## 📷 Screenshot repository principale

Questi screenshot servono al sito <a href='https://www.smailenvargas.com'>smailenvargas.com</a> per mostrare l'anteprima dei progetti, e richiesto che le immagini vengano salvate in `webp` per una migliore performance nel recupero, se le immagini non vengono salvate in `webp` il sito mostrera un placeholder indicante immagine mancante.

- Dimensioni consigliate: 1280x800
- Formato: Webp
- Dove salvarli: `/screen-capture/`
- Come nominarli: `nome-progetto.webp`[1]

⚠ `screen capture` e deprecato, utilizzare ora `screen-capture` per salvare gli screenshot. ~~La cartella `screen capture` verra rimossa in aggiornamenti futuri.~~[3]

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
- [ ] Merge progetto nel ramo principale
- [ ] <a href='#screenshot-repository-principale'>Screenshot repository principale</a>
- [ ] <a href='#aggiornamento-readme-principale'>README principale</a> aggiornato
- [ ] Forza aggiornamento del <a href='https://github.com/Smailen5/server-portfolio'>server portfolio<a>
- [ ] ...

[1] Attenzione a nominare correttamente il file con lo stesso nome della cartella di root del progetto in questione, il sito associa lo screenshot leggendo il nome del progetto dalla cartella.

[2] ⚠ Fare attenzione a `JavaScript` e `TypeScript`, vanno scritti in camel case o il sito non li filtrera correttamente, stessa cosa vale per `CSS`, tutto maiuscolo.

[3] Cartella rimossa.
