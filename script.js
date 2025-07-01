function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  let taskList = document.getElementById("taskList");

  let li = document.createElement("li");
  li.innerHTML = `
    ${taskValue}
    <button onclick="removeTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = ""; // clear input
}

function removeTask(btn) {
  btn.parentElement.remove();
}
