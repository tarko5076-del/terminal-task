const fs = require('fs');
const path = require('path');

// Tasks are persisted here. Overridable via TASKS_FILE env var
// (useful for tests or pointing at a mounted volume in Docker).
const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = process.env.TASKS_FILE || path.join(DATA_DIR, 'tasks.json');

function ensureDataFile() {
  if (!fs.existsSync(path.dirname(DATA_FILE))) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}
function loadTasks() {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    throw new Error(`Failed to parse ${DATA_FILE}: ${err.message}`);
  }
}

function saveTasks(tasks) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

module.exports = { loadTasks, saveTasks, DATA_FILE };
