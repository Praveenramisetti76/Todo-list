document.getElementById("addTaskBtn").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

document.getElementById("clearCompleted").addEventListener("click", function () {
    let completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(task => task.remove());
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let li = document.createElement("li");
        let createdTime = new Date().toLocaleTimeString();
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <span>${taskText} <span class="text-muted small">(Created: ${createdTime})</span></span>
        `;

        li.addEventListener("click", function () {
            if (!this.classList.contains("completed")) {
                let completedTime = new Date().toLocaleTimeString();
                this.innerHTML = `
                    <span>${taskText} <span class="text-muted small">(Created: ${createdTime} | Completed: ${completedTime})</span></span>
                `;
            }
            this.classList.toggle("completed");
            this.classList.toggle("list-group-item-secondary");
            this.classList.toggle("text-decoration-line-through");
            this.classList.toggle("text-muted");
        });

        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
}
