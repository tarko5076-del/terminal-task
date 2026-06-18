#!/usr/bin/env node

const { addTask, listTasks, editTask, completeTask, deleteTask } = require('./tasks');

const HELP = `
Task Manager - simple CLI task tracker

Usage:
  node src/index.js add "<description>"   Add a new task
  node src/index.js list                  List all tasks
  node src/index.js edit <id> "<new desc>" Edit a task's description
  node src/index.js complete <id>          Mark a task as done
  node src/index.js delete <id>            Delete a task
  node src/index.js help                   Show this help message
`;

function printTaskLine(task) {
  const status = task.done ? '[x]' : '[ ]';
  console.log(`${status} #${task.id} ${task.description}`);
}

function main() {
  const [, , command, ...args] = process.argv;

  try {
    switch (command) {
      case 'add': {
        const description = args.join(' ');
        const task = addTask(description);
        console.log(`Added task #${task.id}: ${task.description}`);
        break;
      }

      case 'list': {
        const tasks = listTasks();
        if (tasks.length === 0) {
          console.log('No tasks yet. Add one with: add "<description>"');
        } else {
          tasks.forEach(printTaskLine);
        }
        break;
      }

      case 'edit': {
        const id = parseInt(args[0], 10);
        if (Number.isNaN(id)) {
          throw new Error('Please provide a valid numeric task id.');
        }
        const newDescription = args.slice(1).join(' ');
        const task = editTask(id, newDescription);
        console.log(`Updated task #${task.id}: ${task.description}`);
        break;
      }

      case 'complete': {
        const id = parseInt(args[0], 10);
        if (Number.isNaN(id)) {
          throw new Error('Please provide a valid numeric task id.');
        }
        const task = completeTask(id);
        console.log(`Marked task #${task.id} as done.`);
        break;
      }

      case 'delete': {
        const id = parseInt(args[0], 10);
        if (Number.isNaN(id)) {
          throw new Error('Please provide a valid numeric task id.');
        }
        const task = deleteTask(id);
        console.log(`Deleted task #${task.id}: ${task.description}`);
        break;
      }

      case 'help':
      case undefined:
        console.log(HELP);
        break;

      default:
        console.log(`Unknown command: ${command}`);
        console.log(HELP);
        process.exitCode = 1;
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exitCode = 1;
  }
}

main();
