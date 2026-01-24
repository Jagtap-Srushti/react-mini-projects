# useEffect — React Hook Notes
📌 What is useEffect?

## useEffect is a React Hook that lets you run side effects in function components.

A side effect means anything that happens outside the normal UI rendering, for example:

- Fetching data from API
- Updating document.title
- Setting intervals/timeouts
- Logging to console
- Manually modifying DOM
- Syncing data to localStorage, etc.

## 🧩 Basic Syntax
```jsx
useEffect(() => {
  // side effect logic
});
```

➡️ The function inside runs after the component renders.

## 🎯 Dependency Array Behavior

useEffect has 3 usage patterns based on dependency array:

### 1. useEffect without dependencies
```jsx 
useEffect(() => {
  // runs after every render
});

```
➡️ Runs on initial render + every update
⚠️ Use only when necessary (can cause performance issues)

### 2. useEffect with empty dependency array
```jsx
useEffect(() => {
  // runs only once (on mount)
}, []);
```

➡️ Runs only on first render → good for:

Initial API calls
Event listeners
Subscriptions

### 3. useEffect with dependencies
```jsx
useEffect(() => {
  // runs when `a` changes
}, [a]);

```
➡️ Runs when any value in the array changes.

Example:
```jsx
useEffect(() => {
  console.log("Value of a changed:", a);
}, [a]);
```

### 🛑 Cleanup Function

Some effects require cleanup (unsubscribe/remove event/etc.)

Example with interval cleanup:
```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log('Running...');
  }, 1000);

  return () => {
    clearInterval(id); // cleanup
  };
}, []);

```
Cleanup runs when:

Component unmounts

Dependency changes (before executing next effect)

### 📌 Multiple Dependencies
```jsx
useEffect(() => {
  console.log("a or b changed");
}, [a, b]);
```
➡️ Triggers when either a or b changes