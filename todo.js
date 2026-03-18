let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  tasks.push(input.value);
  input.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
