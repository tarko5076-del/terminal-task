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

### Option 1: Using Docker Compose (Recommended)

Build and run with docker-compose:

```bash
# Build the image
docker-compose build

# Show help
docker-compose run tasks help

# Add a task
docker-compose run tasks add "Learn Docker"

# List all tasks
docker-compose run tasks list

# Edit a task
docker-compose run tasks edit 1 "Learn Docker and Kubernetes"

# Complete a task
docker-compose run tasks complete 1

# Delete a task
docker-compose run tasks delete 1
```

Data is automatically persisted in the `./data` directory on your host machine.

### Option 2: Using Docker directly

Build the Docker image:

```bash
docker build -t task-manager-cli .
```

Show the help menu:

```bash
docker run --rm task-manager-cli help
```

Add a task:

```bash
docker run --rm task-manager-cli add "Learn Docker"
```

List all tasks:

```bash
docker run --rm task-manager-cli list
```

Keep data between containers by mounting the local data directory as a volume:

```bash
# On Linux/Mac
docker run --rm -v $(pwd)/data:/app/data task-manager-cli list

# On Windows (PowerShell)
docker run --rm -v "${PWD}/data:/app/data" task-manager-cli list

# On Windows (Command Prompt)
docker run --rm -v "%CD%/data:/app/data" task-manager-cli list
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

