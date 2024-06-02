# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![desktop](../screen%20capture/component-with-signup-form-desktop.jpeg)
![mobile](../screen%20capture/component-with-signup-form-mobile.jpeg)


### Links

- Solution URL: [Add solution URL here](https://component-with-sigup-form.netlify.app/)
- Live Site URL: [Add live site URL here](https://github.com/Smailen5/Frontend-Mentor-Challenge/tree/main/componenet-with-signup-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

- I was unable to change the class of the component once it was created, so I decided to pass it as props. I'm not sure if it's correct, but it works.
```js
function Button({
  color = "green",
  roundedSize = "xl",
  uppercase = "lowercase",
}) {
  return (
    <button className={`rounded-${roundedSize} bg-${color} ${uppercase}`}>
    </button>
```


### Useful resources

- [Risorsa 1](https://legacy.reactjs.org/docs/handling-events.html) It helped me write the code to prevent the submission.

- [Risorsa 2](https://www.freecodecamp.org/italian/news/come-impostare-una-immagine-di-background-in-react-usando-il-css-in-linea/) how to set the backgroundImage in react.

- [Risorsa 3](https://manuarora.in/boxshadows) I found the code for the shadow here, so I didn't have to experiment with it.


## Author

- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@ Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [Smailen Vargas](https://www.linkedin.com/in/smailen-vargas/)