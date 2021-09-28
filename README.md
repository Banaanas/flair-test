<br/>
<!-- PROJECT LOGO -->
<br/>
<p align="center">
      <a href="https://flair-test.vercel.app/">
        <img src="./public/flair-icon.png" alt="Flair's Logo" width="300">
    </a>
</p>

<h1 align="center">Flair HR - Pricing Plans</h1>
<h3 align="center">TypeScript - React - Next.js</h3>

<p align="center">
    From Figma to Code<br/><br/>
    <a href="https://flair-test.vercel.app/">Live Demo</a><br/><br/>
</p>


<!-- PRINCIPAL FEATURES -->

#### Principal Features



    1. Tech stack : Next.js / TypeScript / Semantic HTML / CSS
For the slide animation between the monthly and yearly plans, I used a library, Framer Motion, which allows to animate between the unmounting of two components (impossible in normal CSS). It's also the only way to build an animation based on physics (spring effect). This could have been done perfectly well with normal CSS, except that Framer Motion allows us to lighten the DOM by unmounting components we don’t use.

    2. React
The components of the application have been designed to be reusable. For example, for Cards or Lists components. Moreover, I extracted the SVG icons from the Figma template and converted them into modular components.


    3. React - Custom hook
When a Details Bubble is open, the custom hook allows you to close it when you click outside the bubble.

    4. Interactive and smooth app

◦ mounting/unmounting animation for Monthly and Yearly Plans.
◦ click on Information Icon to display List Item Details Bubble
◦ transition and hovering effects


    5. Fully responsive app
You can use the app on smartphone as well as on computer.

    6. Stick to Figma Template
I wanted to stick to the Figma template. All colors, font, dimension (padding, margin, etc.), shadows are those of the template.
I used the dimensions of the template (1440 * 940px). That's why, on computer, it is possible that a scrollbar appears in height.

    7. Design
It seems that the template does not use any Grid System for the spaces (margin, padding). That's why you'll encounter some precise and arbitrary dimensions (like 389px or different left and right margins for one same element).
I personally use the 8pt grid, which allows me to have a harmonized layout for the spaces (space must be divisible by 8 or 4px).

In addition, the Figma elements do not appear to have been organized into groups (or are grouped inconsistently), which made defining the spaces difficult.

Also, since the Figma model does not use the Figma’s autolayout function. Figma's autolayout feature is very useful to the developer (and designer) as it automates and harmonizes spaces.

    8. Design System
While sticking to the Figma model, I tried to build a Design System through my code. This is what React and Emotion.js allow us to do.
I used an Emotion theme, within which I integrated reusable properties (colors, dimensions, etc.) throughout the application. This way, the maintainability and scalability of the application gets a lot easier.
The colors referenced in the Emotion theme refer to CSS variables. This allows to benefit from the performance of pure CSS, but also from TypeScript autocompletion (with the Theme object).

    9. Browser Support
The application has been designed to support most browsers. Some modern CSS properties have not been used because they are not sufficiently supported (eg. Flex gap).
