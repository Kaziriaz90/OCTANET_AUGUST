document.addEventListener("DOMContentLoaded", () => {
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            createTask(taskText);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", (e) => {
        const target = e.target;
        if (target.tagName === "BUTTON") {
            const taskItem = target.parentElement;
            if (target.classList.contains("edit-btn")) {
                const newTaskText = prompt("Update Task:", taskItem.firstChild.textContent);
                if (newTaskText) {
                    taskItem.firstChild.textContent = newTaskText;
                }
            } else if (target.classList.contains("delete-btn")) {
                taskList.removeChild(taskItem);
            } else {
                taskItem.classList.toggle("completed");
            }
        }
    });

    function createTask(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});

