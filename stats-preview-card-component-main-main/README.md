# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Gli utenti dovrebbero essere in grado di:

- Visualizza il layout ottimale in base alle dimensioni dello schermo del dispositivo


### Screenshot

![Desktop](/images/Desktop.jpeg)
![Phone](/images/Phone.jpeg)


### Links

- Solution URL: [Solution URL here](https://github.com/Smailen5/stats-preview-card-component-main)
- Live Site URL: [Live site URL here](https://smailen5.github.io/stats-preview-card-component-main/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox


### What I learned

Purtroppo non ricordo dove avevo visto questo metodo per gestire parti di un paragrafo, di solito usavo div innestati. Cosi invece mi sembra molto più pulito e più facile
da gestire

```html
<p class="data">
        <span><span>10k+</span> companies</span>
        <span><span>314</span> templates</span>
        <span><span>12M+</span> queries</span>
      </p>
```
Questo selettore mi è piaciuto molto, di solito usavo :nth-child ma, cosi è molto piu pulito e elegante

```css
p span span {
    text-transform: none;
    font-weight: bold;
    font-size: 1.2rem;
    color: hsl(0, 0%, 100%);
    font-family: 'Inter', sans-serif;
}
```

Non sono sicuro del colore filtro in quanto i miei monitor non riescono a riprodurre bene i colori

```css
.filter {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    background: hsla(277, 64%, 61%, 0.5);
    border-radius: 0 5px 5px 0;
}
```


### Continued development

Sicuramente è da ottimizare meglio per il responsive design, tornerò in futuro.


## Author

- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [@smailen](https://www.twitter.com/yourusername)