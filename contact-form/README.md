# Contact form

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission ✔
- Receive form validation messages if:
  - A required field has been missed ✔
  - The email address is not formatted correctly ✔
- Complete the form only using their keyboard ✔
- Have inputs, error messages, and the success message announced on their screen reader ✔
- View the optimal layout for the interface depending on their device's screen size ✔
- See hover and focus states for all interactive elements on the page ✔

### Screenshot

![smartphone](../screen%20capture/contact-form-smartphone.jpeg)
![desktop](../screen%20capture/contact-form-desktop.jpeg)
![ligthouse score](./src/assets/screenshot/litgthouse-result.PNG)


### Links

- Solution URL: [Solution](https://github.com/Smailen5/Frontend-Mentor-Challenge/tree/main/contact-form)
- Live Site URL: [Live site](https://deft-taiyaki-8b9fbf.netlify.app/)

## My process

### Built with

- HTML5
- Mobile-first workflow
- Tailwind
- TypeScript
- SVGR
- Formik
- Yup
- React


### What I learned

I learned how to create components following the logic of Shadcn. By using Shadcn, my code becomes consistent across the project.

I also practice accessibility for forms and discovered new attributes.


### Continued development

I'm looking for a way to simplify the `form.tsx` file, for me, it's too large and I would like to break it into smaller files.

```jsx
// Update Formik field value directly
onClick={() => setFieldValue("queryType", "general")}
// Retrive Formik value to update background class
className={`${values.queryType === "general" && "bg-background"}`}
```

```jsx
// Hide element from layout but keep it visible to screen reader
className="sr-only"
```


### Useful resources

- [Shadcn ui](https://ui.shadcn.com/) - Shadcn Ui docs
- [Formik](https://formik.org/docs/tutorial) - Formik docs.


## Author

- Website - [Smailen Vargas portfolio](https://smailenvargas.com/)
- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@ Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [Smailen Vargas](https://www.linkedin.com/in/smailen-vargas/)


## Acknowledgments

...
