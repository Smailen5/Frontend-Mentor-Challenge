# Base Apparel coming soon page

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size ✔
- See hover states for all interactive elements on the page ✔
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty ✔
  - The email address is not formatted correctly ✔

### Screenshot

![smartphone](./screenshot/smartphone.jpeg)
![Desktop](./screenshot/desktop.jpeg)
![Desktop](./screenshot/desktop%20error.jpeg)

### Links

- Solution URL: [Solution](https://github.com/Smailen5/Frontend-Mentor-Challenge/tree/main/packages/base-apparel-coming)
- Live Site URL: [Live site](https://66b50fe73bacca6322bb5a2a--iridescent-entremet-637a7d.netlify.app/)

## My process

### Built with

- HTML5
- Tailwind
- JavaScript
- React

### What I learned

During this project, I focused on improving my skills in:

- Responsive Design: Ensuring the layout adapts well to different screen sizes using Tailwind CSS.
- Form Validation: Handling form validation using Formik and Yup for better user feedback.
- Component Reusability: Creating reusable React components and integrating them with Tailwind UI components.

Code Snippets I'm Proud Of:

```js
<!-- HTML for the form -->
<Form onSubmit={handleSubmit} noValidate>
  <label htmlFor="email" className="sr-only">Email Address</label>
  <div className="relative">
    <Field type="email" name="email" placeholder="Email Address" className="peer relative h-12 w-full rounded-full border border-primary-transparent bg-transparent py-3 pl-6 pr-28 text-neutral outline-none placeholder:text-primary placeholder:opacity-50 invalid:border-secondary focus:invalid:border-2" />
    <button type="submit" className="absolute bottom-0 right-0 flex h-full w-16 items-center justify-center rounded-full bg-gradient-secondary text-2xl text-white shadow-md peer-invalid:cursor-not-allowed">
      <img src={iconArrow} alt="icon arrow" />
    </button>
  </div>
</Form>
```

```css
/* Custom Tailwind CSS utility */
.text-primary {
  color: var(--clr-desaturated-red);
}
```

### Continued development

In future projects, I plan to:

- Deepen my knowledge of TypeScript to improve code quality and reduce bugs.
- Explore advanced React patterns like context and hooks for better state management.
- Enhance form validation by integrating more complex validation rules and user feedback.

### Useful resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation) - Essential for understanding utility-first styling.
- [Formik Documentation](https://formik.org/docs) - Great for managing forms and validation in React.
- [React Documentation](https://react.dev/) - For React component and state management best practices.

## Author

- Website - [Smailen Vargas portfolio](https://smailenvargas.com/)
- Github - [Smailen5](https://github.com/Smailen5)
- Frontend Mentor - [@ Smailen5](https://www.frontendmentor.io/profile/Smailen5)
- Linkedin - [Smailen Vargas](https://www.linkedin.com/in/smailen-vargas/)

## Acknowledgments

A big thank you to:

- A big thank you to [Rupali](https://www.frontendmentor.io/profile/rupali317) for the valuable feedback.
- Frontend Mentor: For providing the challenge and valuable feedback.
- The React Community: For their ongoing support and resources.
- Tailwind CSS Team: For the amazing utility-first CSS framework ❤.
