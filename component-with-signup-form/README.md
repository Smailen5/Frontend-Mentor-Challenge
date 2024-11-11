# Intro component with sign up form

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size ✔
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![smartphone](./screenshot/smartphone.jpeg)
![desktop](./screenshot/desktop.jpeg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Smailen5/Frontend-Mentor-Challenge/tree/main/component-with-signup-form)
- Live Site URL: [Add live site URL here](https://component-with-sigup-form.netlify.app/)

## My process

### Built with

- HTML5
- Mobile-first workflow
- Tailwind
- Javascript
- React

### What I learned

- I was unable to change the class of the component once it was created, so I decided to pass it as props. I'm not sure if it's correct, but it works.

```js
function Button({
  color = "green",
  roundedSize = "xl",
  uppercase = "lowercase",
}) {
  return (
    <button
      className={`rounded-${roundedSize} bg-${color} ${uppercase}`}
    ></button>
  );
}
```

### Useful resources

- [Risorsa 1](https://legacy.reactjs.org/docs/handling-events.html) It helped me write the code to prevent the submission.

- [Risorsa 2](https://www.freecodecamp.org/italian/news/come-impostare-una-immagine-di-background-in-react-usando-il-css-in-linea/) how to set the backgroundImage in react.

- [Risorsa 3](https://manuarora.in/boxshadows) I found the code for the shadow here, so I didn't have to experiment with it.

## Author

- Website - [Smailen Vargas portfolio](https://smailenvargas.com/)
- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@ Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [Smailen Vargas](https://www.linkedin.com/in/smailen-vargas/)
