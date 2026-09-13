# Dev Stack

Dev Stack is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies, see their details, and add their favorite technologies to their personal stack.

## 🚀 Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Suspense
- JSON
- HTML
- CSS

## ✨ Features

### 1. Explore Technologies
Users can browse different frontend, backend, database, and other development technologies with their details.

### 2. Build Your Stack
Users can add technologies to their own stack and create a personalized development stack.

### 3. Manage Your Stack
Users can remove individual technologies or remove all selected technologies from their stack.

## 📱 Responsive Design

The website is fully responsive and works smoothly on mobile, tablet, and desktop devices.

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to read and write.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage changing data in a component. I used `useState` in `CardSelect` to store the selected technologies in my stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in a React component, such as fetching data. In this project, I did not need `useEffect` because I used `fetch()` with React Suspense and the `use()` hook to load the JSON data.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in the `Sidebar` component:

```tsx
{count === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
