# Dev Stack Builder

Dev Stack Builder is a responsive React and TypeScript website built for exploring development technologies and assembling a personal project stack. Technology records are loaded from a local JSON file, making the catalog easy to update.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Toastify
* JSON

## Features

* Browse various development technologies with icons, categories, and descriptions.
* Select preferred technologies to build a customized project stack.
* Dynamically add or remove selected technologies from the sidebar.

---

## React Questions

### 1. What is JSX, and why is it used in React?
**Ans:** JSX is an HTML-like syntax written inside JavaScript or TypeScript. React uses it to clearly describe how the UI of a component should look.

### 2. What is the difference between props and state?
**Ans:** Props are read-only data passed from a parent component to a child component. State is mutable data managed within the component, and changing it triggers a re-render of the UI.

### 3. What does the useState hook do, and where did you use it in this project?
**Ans:** `useState` is a React Hook that holds stateful data in functional components. In this project, it is used to manage the technology list, selected stack, filters, and loading states.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Ans:** `useEffect` handles side effects after a component renders. It is used here to fetch the technology list from the `public/data.json` file when the page loads.

### 5. Why does every item in a .map() list need a unique key prop?
**Ans:** A unique key helps React identify each list item individually. When items change, are added, or removed, React updates only the specific item instead of re-rendering the whole list.

### 6. What is conditional rendering?
**Ans:** Conditional rendering means displaying different UI components based on specific conditions. In this project, an empty stack message is shown when no technology is selected, and the stack items are displayed when selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Ans:** A parent component passes data or functions to a child component using props. When an action occurs (like a button click), the child component calls the function prop to communicate back to the parent.
