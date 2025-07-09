# Pod request access landing page

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size ❌
- See hover states for interactive elements ❌
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email" ✔
  - The email is not formatted correctly should show "Oops! Please check your email" ✔

### Screenshot

![smartphone](./screenshot/smartphone.jpeg)
![desktop](./screenshot/desktop.jpeg)
![desktop](./screenshot/desktop%20error.jpeg)

### Links

- Solution URL: [Soluzione](https://github.com/Smailen5/Frontend-Mentor-Challenge/tree/main/packages/pod-request-access-landing-page-main)
- Live Site URL: [Sito live](https://smailen5.github.io/Frontend-Mentor-Challenge/pod-request-access-landing-page-main/)

## My process

### Built with

- HTML5
- CSS
- Mobile-first workflow
- JavaScript

### What I learned

Ho imparato a inserire un validatore di email:

```js
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  return true;
} else {
  return false;
}
```

Ho usato l'operatore ternario per semplificare la lettura del codice:

```js
if (!isEmailValid ? emailInvalid() : emailValid());
```

Ho usato un div per inserire l'immagine di background da css per poterla modificare nelle media query:

```html
<div class="background-img"></div>
```

### Continued development

Aggiungere i colori e i `font-size` come variabili

### Useful resources

- [Validatore email](https://howto.webarea.it/JavaScript/come-validare-un-indirizzo-email-in-javascript_124) - Mi ha aiutato per creare il codice per il validatore di email.

## Author

- Website - [Smailen Vargas portfolio](https://smailenvargas.com/)
- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@ Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [Smailen Vargas](https://www.linkedin.com/in/smailen-vargas/)
