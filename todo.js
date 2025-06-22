const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const task = taskInput.value.trim();
  if (!task) {
    alert("⚠️ Please enter a task.");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.includes(task)) {
    alert("❌ Task already exists.");
    return;
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  alert("✅ Task saved! Click 'Retrieve' to view.");
}

function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  // Clear the list first
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.style.display = "none";
    return; // ⚠️ DO NOT alert here — removed based on your request
  }

  taskList.style.display = "block";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  
  alert("🗑️ Task deleted successfully!");
  renderTasks(); // Re-render after deletion
}
