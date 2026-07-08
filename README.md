# User Insights CLI

## Description

User Insights CLI is a Node.js application that fetches data from the JSONPlaceholder APIs and generates a user insights report in the terminal.

The application combines data from **Users**, **Posts**, and **Todos** to create a summary for each user, including their post count and todo statistics. It also displays summary statistics for all users.

---

## Features

* Fetches data from multiple APIs using **Promise.all()**
* Uses **async/await** for asynchronous operations
* Handles network errors using **try...catch**
* Generates a report for each user containing:

  * Name
  * Email
  * City
  * Post Count
  * Completed Todos
  * Open Todos
* Sorts users by:

  * Highest post count first
  * Alphabetical order by name when post counts are equal
* Displays summary statistics:

  * Total Users
  * Total Posts
  * Average Posts Per User
  * User with the Highest Completed Todos
* Uses JavaScript array methods (`map`, `filter`, `reduce`, and `sort`) without using `for` or `while` loops.

---

## Technologies Used

* Node.js
* JavaScript (ES Modules)
* Fetch API
* JSONPlaceholder API

---

## Project Structure

```text
.
├── index.js
├── users.js
├── post.js
├── todo.js
└── README.md
```

---

## Setup

1. Clone or download the project.
2. Open the project folder in your terminal.
3. Make sure Node.js is installed.

---

## Run the Project

```bash
node index.js
```

---

## Example Output

```text
========== User Insights ==========

Name: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough
Post Count: 10
Completed Todos: 11
Open Todos: 9

========== Summary ==========
Total Users: 10
Total Posts: 100
Average Posts Per User: 10
User with Most Completed Todos: Leanne Graham
```

Project completed for Coding Pixel Week 1 Assignment.
