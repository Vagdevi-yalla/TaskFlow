const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
app.use(cors());
const port = 3010;

app.get('/', (req, res) => {
  res.send('Welcome to task-Buddy');
});

//Data Structure

let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 },
];

//adding a new task to list
function addTask(taskId, text, priority, tasks) {
  tasks.push({
    taskId: taskId,
    text: text,
    priority: priority,
  });

  return tasks;
}

app.get('/tasks/add', (req, res) => {
  const taskId = req.query.taskId;
  const text = req.query.text;
  const priority = req.query.priority;

  const results = addTask(taskId, text, priority, tasks);
  res.json({ tasks: results });
});

//get all tasks

app.get('/tasks', (req, res) => {
  res.json({ tasks: tasks });
});

//sorting tasks by priority

function taskSortedByPriority(task1, task2) {
  return task1.priority - task2.priority;
}

app.get('/tasks/sort-by-priority', (req, res) => {
  const taskDetails = tasks.slice();
  taskDetails.sort(taskSortedByPriority);

  res.json({
    tasks: taskDetails,
  });
});

//updating task priority based on id

function updateTaskBypriority(taskList, taskId, priority) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].taskId === taskId) {
      taskList[i].priority = priority;
    }
  }
  return taskList;
}

app.get('/tasks/edit-priority', (req, res) => {
  const taskId = parseInt(req.query.taskId);
  const priority = parseInt(req.query.priority);
  let result = updateTaskBypriority(tasks, taskId, priority);
  res.json({ tasks: result });
});

//updating task priority based on text

function updateTaskByText(taskList, taskId, text) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].taskId === taskId) {
      taskList[i].text = text;
    }
  }
  return taskList;
}

app.get('/tasks/edit-text', (req, res) => {
  const taskId = parseInt(req.query.taskId);
  const text = req.query.text;
  let result = updateTaskByText(tasks, taskId, text);
  res.json({ tasks: result });
});

//delete a task from task list

function deleteTask(taskList, taskId) {
  return taskList.taskId != taskId;
}

app.get('/tasks/delete', (req, res) => {
  const taskId = parseInt(req.query.taskId);
  const result = tasks.filter((task) => deleteTask(task, taskId));

  res.json({
    tasks: result,
  });
});

//filter task by priority

function filterTaskByPriority(taskList, priority) {
  return taskList.priority === priority;
}

app.get('/tasks/filter-by-priority', (req, res) => {
  const priority = parseInt(req.query.priority);
  const result = tasks.filter((task) => filterTaskByPriority(task, priority));

  res.json({
    tasks: result,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
