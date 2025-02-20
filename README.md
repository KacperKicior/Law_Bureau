# Law Bureau
LawBureau is a dynamic, responsive single-page website built with React, Tailwind CSS, and Fullpage.js. It features smooth full-page scrolling, an animated title that transitions from the center of the screen into a navigation element, dark mode support, and a language toggle. The site is designed to offer a modern, engaging user experience across desktop and mobile devices.

**Preview deployed via Github Pages https://kacperkicior.github.io/Law_Bureau/**

## Features
### Full Page Scrolling:
Seamless transitions between sections using Fullpage.js.

### Responsive & Adaptive Design:
Optimized layouts for mobile, tablet, and desktop screens with Tailwind CSS.

### Animated Title Card:
The main title is centered on the page and animates into the navbar when scrolling.

### Dark Mode & Language Toggle:
Users can switch between dark/light themes and toggle the site language (e.g., English/Polish).

### Modular Components:
Structured into reusable React components (e.g., Titlecard, Content, Team, Contact, Footer).

## Technologies
- React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.
- Fullpage.js: Library for creating full-screen scrolling websites.
- React Icons: Icon library for React applications.
- Local Storage: Persists user preferences for theme and language.

## Getting Started
Prerequisites
- Node.js (Latest LTS recommended)
- npm or Yarn package manager
  
## Installation
**1. Clone the repository:**
```
git clone https://github.com/yourusername/lawbureau.git
cd lawbureau
```
**2. Install dependencies:**
Using npm:
```
npm install
```
Or using Yarn:
```
yarn install
```
**3. Running the Project Locally**
Start the development server:
```
npm start
```
or
```
yarn start
```
This will launch the app in development mode. Open http://localhost:3000 in your browser. The page will automatically reload if you make any edits.

**4. Building for Production**
To create an optimized production build, run:
```
npm run build
```
or
```
yarn build
```
This will generate the production-ready files in the build directory.

### Styling & Theme:
The site uses Tailwind CSS. Customize the design by modifying the Tailwind configuration (tailwind.config.js) and your component classes.

### Animations:
Adjust the transition and animation effects in the components (e.g., the title animation in Titlecard.js and navbar behavior in App.js).

### User Preferences:
Dark mode and language toggling are handled with React state and localStorage. Modify these behaviors in App.js as needed.

### Deployment
Deploy LawBureau using your favorite hosting provider. Services such as Vercel, Netlify, or GitHub Pages work well with React applications. Follow the respective provider's instructions to deploy the production build.
