// Get the required elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    newTask.addEventListener('click', toggleTaskStatus);
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

// Function to toggle the task status
function toggleTaskStatus() {
  this.classList.toggle('completed');
}

// Event listener for the add button click
addButton.addEventListener('click', addTask);
