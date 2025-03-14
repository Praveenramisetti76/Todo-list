document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let li = document.createElement("li");
        let createdTime = new Date().toLocaleTimeString();
        li.innerHTML = `${taskText} <span class="timestamp">(Created: ${createdTime})</span>`;
        
        li.addEventListener("click", function() {
            if (!this.classList.contains("completed")) {
                let completedTime = new Date().toLocaleTimeString();
                this.innerHTML = `${taskText} <span class="timestamp">(Created: ${createdTime} | Completed: ${completedTime})</span>`;
            }
            this.classList.toggle("completed");
        });
        
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    }
});

document.getElementById("clearCompleted").addEventListener("click", function() {
    let completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(task => task.remove());
});