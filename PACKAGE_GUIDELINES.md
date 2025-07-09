# Linee guida per aggiornare i package.json dei progetti

## Aggiornare il nome del progetto

Questo è il nome del progetto che verrà recuperato dal server e utilizzato per mostrare il progetto sul sito portfolio.

```json
"name": "nome-progetto",
```

## Aggiornare la descrizione del progetto

Questa è la descrizione del progetto, serve come breve descrizione di anteprima del progetto, massimo 140 caratteri se possibile.

```json
"description": "descrizione progetto breve",
```

## Aggiornare le tecnologie utilizzate

Queste sono le tecnologie utilizzate nel progetto, aggiungerne massimo 10 per evitare di avere un campo troppo lungo.

```json
"technologies": [
    "tech 1",
    "tech 2",
    "tech 3"
]
```

## Aggiornare l'autore del progetto

Questo è il nome dell'autore del progetto.

```json
"author": "Smailen Vargas",
```

## Aggiornare la data di creazione del progetto

Questa è la data di creazione del progetto, utilizza il formato ISO 8601.

```json
"createdAt": "2024-03-20T00:00:00.000Z"
```

## Aggiornare la versione del progetto

Questa è la versione del progetto, utilizza il formato semantico versioning.

```json
"version": "1.0.0",
```

## Rendere il package.json privato

Questo è un progetto privato, per evitare pubblicazioni accidentali aggiungere `"private": true`.

```json
"private": true,
```

## Placeholder da copiare e incollare

```json
{
  "name": "nome-progetto",
  "private": true,
  "version": "1.0.0",
  "description": "descrizione progetto breve",
  "technologies": ["tech 1", "tech 2", "tech 3"],
  "author": "Smailen Vargas",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```
