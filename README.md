# Task Manager CLI

A simple command-line Task Manager built with Node.js. It allows users to create, view, edit, complete, and delete tasks. Tasks are stored locally in a JSON file, making it a lightweight project for learning Node.js, file handling, and CLI development.

---

## Features

* Add new tasks
* View all tasks
* Edit existing tasks
* Mark tasks as completed
* Delete tasks
* Store data in a JSON file
* Run the application inside Docker

---

## Project Structure

```
task-manager/
│
├── src/
│   ├── index.js      # CLI entry point
│   ├── tasks.js      # Task business logic
│   └── storage.js    # File storage operations
│
├── data/
│   └── tasks.json    # Stored tasks
│
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

---

## Requirements

Before running the project locally, install:

* Node.js 22 or later
* npm
* Docker (optional)

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd task-manager
```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Show the help menu:

```bash
npm start
```

or:

```bash
node src/index.js help
```

---

## Available Commands

### Add a task

```bash
node src/index.js add "Learn Docker"
```

Example output:

```
Added task #1: Learn Docker
```

---

### List all tasks

```bash
node src/index.js list
```

Example output:

```
[ ] #1 Learn Docker
[x] #2 Learn Node.js
```

---

### Edit a task

```bash
node src/index.js edit 1 "Learn Docker and Kubernetes"
```

---

### Complete a task

```bash
node src/index.js complete 1
```

---

### Delete a task

```bash
node src/index.js delete 1
```

---

## Data Storage

Tasks are stored in:

```
data/tasks.json
```

The application automatically creates the data folder and JSON file if they do not exist.

You can override the storage location using the `TASKS_FILE` environment variable.

Example:

```bash
TASKS_FILE=/tmp/tasks.json node src/index.js list
```

---

## Running with Docker

### Build the Docker image

```bash
docker build -t task-manager .
```

### Show the help menu

```bash
docker run --rm task-manager
```

### Add a task

```bash
docker run --rm task-manager add "Learn Docker"
```

### Keep data between containers

Mount the local data directory as a volume:

```bash
docker run --rm -v $(pwd)/data:/app/data task-manager list
```

---

## Technologies Used

* Node.js
* JavaScript
* File System (`fs`) module
* Docker
* JSON

---

## Future Improvements

Possible enhancements:

* Add task priorities
* Add due dates
* Search tasks
* Filter completed and pending tasks
* Add automated tests
* Add a database such as PostgreSQL or MongoDB

---

## License

This project is released under the MIT License.
