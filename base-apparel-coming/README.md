# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Laptop](../screen%20capture//base-apparel-laptop.jpeg)
![Desktop](../screen%20capture//base-apparel-desktop.jpeg)


### Links

- Solution URL: [Add solution URL here](https://github.com/Smailen5/Frontend-Mentor-Challenge/tree/main/base-apparel-coming)
- Live Site URL: [Add live site URL here](https://66b50fe73bacca6322bb5a2a--iridescent-entremet-637a7d.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
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

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

A big thank you to:

- Frontend Mentor: For providing the challenge and valuable feedback.
- The React Community: For their ongoing support and resources.
- Tailwind CSS Team: For the amazing utility-first CSS framework ❤.