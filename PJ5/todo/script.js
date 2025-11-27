//initialization of tasks array
let tasks = [];

//fetching of previously stored tasks if any from local storage
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

//DOM selection helper function;

const sel = (id) => document.getElementById(id);

//DOM elements

const taskInput = sel("taskInput");
const addBtn = sel("addBtn");
const taskList = sel("taskList");

const progressFill = sel("progressFill");
const progressText = sel("progressText");

//helpers

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const updateProgress = () => {
  if (tasks.length === 0) {
    progressFill.style.width = "0%";
    progressText.textContent = "0% Completed";
    return;
  }

  const completed = tasks.filter((t) => t.completed).length;
  const percent = Math.round((completed / tasks.length) * 100);

  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${percent}% Completed`;
};

const renderTasks = () => {
  taskList.innerHTML = ``;

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("task"); //premade css class;
    if (task.completed) li.classList.add("complete");

    const left = document.createElement("div");
    left.classList.add("left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      tasks[index].completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const text = document.createElement("span");
    text.textContent = task.text;

    left.appendChild(checkbox);
    left.appendChild(text);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    // Assemble
    li.appendChild(left);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });

  updateProgress();
};

addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;

  tasks.push({ text, completed: false });
  taskInput.value = "";
  setRandomPlaceholder();
  saveTasks();
  renderTasks();
});

//add tasks on pressing enter button
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

//initial render for saved tasks
renderTasks();

const placeholders = [
  "What’s next?",
  "Add another task...",
  "You're on fire 🔥",
  "Keep going!",
  "What else you got?",
  "Stay productive 💪",
  "Another one?",
  "Type something awesome...",
  "What do we need to do?",
];

const setRandomPlaceholder =  () => {
    const random = Math.floor(Math.random() * placeholders.length);
    taskInput.placeholder = placeholders[random];
}