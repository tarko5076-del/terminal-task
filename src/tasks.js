const { loadTasks, saveTasks } = require('./storage');

function nextId(tasks) {
  return tasks.reduce((max, t) => Math.max(max, t.id), 0) + 1;
}

function addTask(description) {
  if (!description || !description.trim()) {
    throw new Error('Task description cannot be empty.');
  }
  const tasks = loadTasks();
  const task = {
    id: nextId(tasks),
    description: description.trim(),
    done: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  saveTasks(tasks);
  return task;
}

function listTasks() {
  return loadTasks();
}

function editTask(id, newDescription) {
  if (!newDescription || !newDescription.trim()) {
    throw new Error('New task description cannot be empty.');
  }
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    throw new Error(`No task found with id ${id}.`);
  }
  task.description = newDescription.trim();
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  return task;
}

function completeTask(id) {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    throw new Error(`No task found with id ${id}.`);
  }
  task.done = true;
  task.completedAt = new Date().toISOString();
  saveTasks(tasks);
  return task;
}

function deleteTask(id) {
  const tasks = loadTasks();
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) {
    throw new Error(`No task found with id ${id}.`);
  }
  const [removed] = tasks.splice(index, 1);
  saveTasks(tasks);
  return removed;
}

module.exports = { addTask, listTasks, editTask, completeTask, deleteTask };
