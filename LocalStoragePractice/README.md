# 📦 Local Storage in JavaScript (React Learning Notes)

This repository contains a simple React example demonstrating how to use the **Local Storage API**.  
The goal is to document what each method does for easy revision later.

---

## 🧠 What is Local Storage?

Local Storage is a browser feature that allows storing data **permanently** (until manually deleted) in **key → value** format.

- Data stays even after refreshing the page
- Cannot store complex data directly (only strings)
- Useful for saving small and persistent data

---

## 🛠 Local Storage Methods

### 1️⃣ **`localStorage.setItem(key, value)`**
Stores data into Local Storage.

```js
localStorage.setItem('User', 'XYZ');
If storing an object, convert it into a string using JSON:

localStorage.setItem('user', JSON.stringify({ name: 'ABC' }));
```
### 2️⃣ **`localStorage.getItem(key)`**

Retrieves data stored under the given key.
```js
const user = localStorage.getItem('User');
````
If the data was stored as an object, convert it back:
```js
const userObj = JSON.parse(localStorage.getItem('user'));
````
### 3️⃣ **`localStorage.removeItem(key)`**

Removes a specific item.
```js
localStorage.removeItem('User');
```
### 4️⃣ **localStorage.clear()**

Clears all local storage data.
```js
localStorage.clear();
```
Use carefully — it deletes everything stored in localStorage.
