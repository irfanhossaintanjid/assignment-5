# Dev Stack Builder

Dev Stack Builder is a responsive React and TypeScript website for exploring development technologies and assembling a personal project stack. Technology records are loaded from a local JSON file, so the catalogue stays easy to update.

## Features

- Browse technology cards with icons, badges, categories, difficulty, descriptions, and ratings.
- Filter technologies by category and add unique choices to the Your Stack sidebar.
- Remove individual choices or the complete stack with React Toastify feedback.

## Built With

React, TypeScript, Vite, Tailwind CSS, DaisyUI, React Icons, React Toastify, and JSON.

## Run Locally

```bash
npm install
npm run dev
```

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is HTML-like syntax written inside JavaScript or TypeScript. React uses it to describe component UI clearly.

### 2. What is the difference between props and state?

Props are read-only values passed from a parent. State is changeable data owned by a component that can trigger a re-render.

### 3. What does `useState` do, and where was it used?

`useState` stores changing values in a function component. This project uses it for technologies, the selected stack, filters, loading, and errors.

### 4. What does `useEffect` do, and why was it needed?

`useEffect` runs side effects after rendering. It is used here to fetch `public/data.json` when the technology list loads.

### 5. Why does every `.map()` item need a unique `key`?

A unique key lets React identify list items and update only the items that changed.

### 6. What is conditional rendering?

Conditional rendering displays different UI for different conditions. This project shows an empty-stack message when no technology is selected and stack rows otherwise.

### 7. How do parent and child components share data and actions?

A parent sends data or functions to a child through props. The child calls a function prop to send an event back to the parent. Components in this project are composed through `App` and `MainLayout`, while `TechList` manages the stack interaction.

## Validation

```bash
npm run build
npm run lint
```
