# Frontend Mentor - Planets fact site

![Design preview for the Planets fact site coding challenge](./src/assets/preview.jpg)

## Table of contents

-   [Overview](#overview)
    -   [Intro](#intro)
    -   [The challenge](#the-challenge)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [Features](#features)
-   [Setup](#setup)
-   [Useful resources](#useful-resources)

## Overview

### Intro

Hello! This is my solution to [Planets fact site - Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). This is my second project build with **_React JS_**. This time I had the opportunity to try _styled-components_. It is a very powerful tool, but I believe it takes time to learn good practices and organize the code. Right now, I have the feeling that my styles are chaotic but I'm looking forward to correct it and use styled-components to its full potential. In order not to stick to design, I decided to recreate the animated solar system as the home page. Additionally, I added transitions while the subpage/route change.

⭐**Featured solution in [Vol. 58 of the Frontend Mentor Newsletter](https://mailchi.mp/8323f0e23e37/frontend-mentor-newsletter-vol-58?e=212d9dcf83).**

### The challenge

> Your challenge is to build out this 8-page planets fact site and get it looking as close to the design as possible.
>
> You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
>
> If you choose to use a JS-heavy approach, we provide a local `data.json` file for the planets. This means you'll be able to pull the data from there instead of using the separate `.html` files.
>
> Your users should be able to:
>
> -   View the optimal layout for the app depending on their device's screen size
> -   See hover states for all interactive elements on the page
> -   View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Links

-   [LIVE PREVIEW](https://planets-tediko.netlify.app/) to check my solution.
-   [Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

## My process

### Built with

-   ReactJS
-   Webpack
-   Styled-components
-   Mobile first
-   Semantic HTML5 markup
-   JavaScript
-   Flexbox
-   Grid
-   Framer Motion API

### Features

-   I used **_ReactJS_** library to create an app. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
-   I tried to write a project using **_styled-components_** library. Styled Components are one of the new ways to use CSS in modern JavaScript. It is the meant to be a successor of CSS Modules, a way to write CSS that's scoped to a single component, and not leak to any other element in the page. Also allows you to write plain CSS in your components without worrying about class name collisions.
-   The first time I used **_Prettier_**. Prettier is an opinionated code formatter. It removes all original styling and ensures that all outputted code conforms to a consistent style.
-   To animate the pages transitions and mobile-menu animations I used **_Framer Motion API_**. Framer Motion is an open source, production-ready library that's designed for creating creative animations.
-   Added `counter()` function for my _pseudo-elements_ content in _Tab button_. **CSS counters** let you adjust the appearance of content based on its location in a document. For example, you can use counters to automatically number the headings in a webpage.
-   The **_solar system_** was recreated from this great [Codepen](https://codepen.io/kowlor/pen/ZYYQoy) created by _Malik Dellidj_. It's all based on div rotation with _pseudo-elements_ inside that contains the images of the planets.
-   Implemented **_defer_** to my script tag. The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script is fetched asynchronously, and it’s executed only after the HTML parsing is done.
-   Implemented `prefers-reduced-motion` CSS media feature which is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses. Prevent animations in brief.
-   `:focus-visible` pseudo class. This selector only indicate focus when it is helpful to the user - such as in cases where the user interacts with the page via a keyboard or some other non-pointing device. It isn't supported by Safari yet, but there is simple [workaround](https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press).
-   Tried to create more accessible mobile navigation. Used the `aria-expanded` and `aria-controls` attributes.
-   To create this project I used webpack. More specifically i used `laravel mix` which is a wrapper for webpack and targets the 80% usecase.

## Setup

To run this project, clone it and install it locally using npm:

```
$ git clone git@github.com:tediko/planets-fact.git
$ cd planets-fact
$ npm install
```

Use npm to build and compile assets in a local environment:

```
$ npm run build
```

Watch assets for changes and rebuild your bundle each time you update a file with:

```
$ npm run mix-watch
or
$ npx mix watch
```

## Useful resources

-   [DOCS - ReactJS](https://reactjs.org/)
-   [VIDEO - ReactJS tutorial by The Net Ninja](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
-   [LINK - Styled-components](https://styled-components.com/)
-   [LINK - Prettier](https://prettier.io/)
-   [LINK - Framer Motion API](https://www.framer.com/api/motion/)
-   [VIDEO - CSS Counters](https://youtu.be/0gayskscLY4?t=355)
-   [DOCS - CSS Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)
-   [LINK - Solar system](https://codepen.io/kowlor/pen/ZYYQoy)
-   [LINK - async/defer](https://flaviocopes.com/javascript-async-defer/#the-position-matters)
-   [LINK - webpack](https://laravel-mix.com/docs/6.0/what-is-mix)
