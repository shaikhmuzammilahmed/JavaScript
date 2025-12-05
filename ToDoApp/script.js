// 1️⃣ Get DOM elements
let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// 2️⃣ Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 3️⃣ Display all tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <div class="task">
                <span style="text-decoration:${task.done ? 'line-through' : 'none'}">
                    ${task.text}
                </span>
                <div>
                    <button onclick="toggleTask(${index})">Done</button>
                    <button onclick="deleteTask(${index})">Delete</button>
                </div>
            </div>`;
    });
}

// 4️⃣ Add task
addBtn.addEventListener("click", () => {
    let text = taskInput.value.trim();

    if (text === "") {
        alert("Enter a task!");
        return;
    }

    tasks.push({ text: text, done: false });
    taskInput.value = "";

    saveTasks();
    displayTasks();
});

// 5️⃣ Mark task as done
function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    displayTasks();
}

// 6️⃣ Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

// 7️⃣ Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks when page opens
displayTasks();
