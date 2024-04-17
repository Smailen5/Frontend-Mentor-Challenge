# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot/smartphone.jpeg)
![](./screenshot/smartphone%20error.jpeg)
![](./screenshot/chrome-capture-2024-3-12.jpeg)
![](./screenshot/desktop%20error.jpeg)

### Links

- Solution URL: [Solution](https://github.com/Smailen5/newsletter-sign-up-with-success-message-main)
- Live Site URL: [Live site](https://smailen5.github.io/newsletter-sign-up-with-success-message-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- tailwind

### What I learned

In the past, I had trouble creating custom form validation. Reading the Frontend Mentor article, I found an attribute that disables default validation: `novalidate`.

```html
<form novalidate id="form"></form>
```

For the first time, I used the font provided directly with the exercise instead of retrieving it from external sources. To do this, I used `@font-face`.

```css
@font-face {
    font-family: 'Roboto';
    src: url('../assets/fonts/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
```

Reading the Frontend Mentor article, I discovered that there is a constructor to retrieve data from the form, and it was fantastic because it simplifies the process a lot.

```js
function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  validator(data);
}
```

It was nice to use regular expressions for the first time to validate an email. In the future, it would be nice to try validating a tax code.

```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```


### Useful resources

- [Frontend Mentor article](https://www.frontendmentor.io/learning-paths/javascript-fundamentals-oR7g6-mTZ-/steps/661589482f40450f91f5883b/article/read) - Frontend Mentor article that was very helpful for retrieving data from the form.
- [Regular expression](https://www.udemy.com/course/maestro-javascript/learn/lecture/21066530#overview) - Course where I learned how to use regular expressions to validate forms.


## Author

- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@ Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [Smailen Vargas](https://www.linkedin.com/in/smailen-vargas/)
