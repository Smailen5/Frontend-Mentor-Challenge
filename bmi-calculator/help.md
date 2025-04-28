### chiedi aiuto su frontend mentor per i seguenti issues:

# src/molecules/ResultCalculator.tsx

la classe `md:rounded-r-full` sembra sovvrascrivere la classe `rounded-xl`
ho provato:
- definire lo stile in linea con `style={{borderRadius: "12px"}}`
- definire ogni angolo con le classi `tailwind md:rounded-r-none md:rounded-br-none md:rounded-bl-full md:rounded-tl-full`
- usare `important` con `!` sulle classi `rounded-xl`


# src/components/templates/LimitationSection.tsx

e stato difficile trovare il modo di eseguire il layout, avevo provato con una griglia ma avendo le cards renderizzate dinamicamente non funzionava. dopo varie ricerce e consultando con l'ia l'unica alternativa che ho trovato e stato di dividere le cards in righe e dargli un margine dinamicamente. ho aggiunto anche altezza e larghezza massima alle cards per evitare che si allungassero o deformassero. dovendo poi posizionare le cards allo stesso livello del titolo ho optato per position absolute, ho quindi preferito dare una altezza minima al contenitore principale per occupare correttamente lo spazio. e stato un cazzo di parto
