# Interactive rating component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size ✔
- See hover states for all interactive elements on the page
- Accessible from the keyboard ❌
- Select and submit a number rating ✔
- See the "Thank you" card state after submitting a rating ✔

### Screenshot

![smartphone](./screenshot/smartphone.jpeg)
![desktop](./screenshot/desktop.jpeg)
![desktop](./screenshot/desktop%20message.jpeg)

### Links

- Solution URL: [solution URL here](https://github.com/Smailen5/Frontend-Mentor-Challenge/tree/main/packages/interactive-rating-component-main-main)
- Live Site URL: [live site URL here](https://smailen5.github.io/Frontend-Mentor-Challenge/interactive-rating-component-main-main/)

## My process

### Built with

- HTML5
- CSS
- Mobile-first workflow
- JavaScript

### What I learned

Ho imparato a selezionare un elemento con una determinata classe con il seguente codice:=

```js
review.classList.contains("selected");
```

### Continued development

- correggere lo script per quanto riguarda la selezione, al momento è possibile selezionare piu di una recensione ma, prendo solo il valore dell'ultima selezionata. Voglio correggere il codice per permettere una sola selezione alla volta.

- nonostante

```js
reviewSelect.innerText = ` ${reviewContent} `;
console.log(reviewSelect);
```

dia come risultato:

```html
<span id="rating-here"> 5 </span>
```

non stampa nello span il valore preceduto e seguito dallo spazio. Voglio correggere questo errore in futuro.

- correggere lo spazio tra main e body, non su tutti i dispositivi c'è abbastanza spazio.

## Author

- Website - [Smailen Vargas portfolio](https://smailenvargas.com/)
- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@ Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [Smailen Vargas](https://www.linkedin.com/in/smailen-vargas/)
