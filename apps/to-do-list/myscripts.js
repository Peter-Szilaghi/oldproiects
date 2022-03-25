window.onload = function (){

    let taskText, newTask, doneTask, editTask, deleteTask;
    let addTask = document.getElementById("add-task"); //add a new task
    let taskList = document.querySelector("ul"); //task list
    let deleteTasks = document.getElementById("delete-tasks"); //clear all tasks
    let task; //task classes
    
    addTask.addEventListener("click", function(){
        taskText = document.getElementById("task-text").value;
        if (taskText === ''){ 
            alert ("Enter the task");
        }
        else {
        /*Add New Task*/
            newTask = document.createElement("li");
            newTask.innerHTML = '<span class="task">' + taskText + '</span>' + 
                '<span class="actions">' + 
                    '<span class="material-icons done-task">check_circle</span>' +
                    '<span class="material-icons edit-task">edit_note</span>' +
                    '<span class="material-icons delete-task"> cancel</span>' +
                '</span>';
                taskList.append(newTask);
            document.getElementById("task-text").value = '';
        }
        /*Add New Task*/
        
        /*Task is doneTask*/
        doneTask = document.querySelectorAll(".done-task");
        for (let i = 0; i < doneTask.length; i++) {
            doneTask[i].addEventListener("click", function() {
                let text = doneTask[i].parentElement.previousElementSibling;
                text.innerHTML = "<del>" + text.textContent + "</del>"; 
            });
        }
        /*Task is doneTask*/

        /*Edit TaskName*/
        editTask = document.querySelectorAll(".edit-task");
        for (let i = 0; i < editTask.length; i++) {
            editTask[i].addEventListener("click", function() {
                editTask[i].parentElement.previousElementSibling.setAttribute("contenteditable", "true");
                editTask[i].parentElement.previousElementSibling.focus();
            });
        }
        /*Edit TaskName contenteditable="true"*/

        /*Delete Task*/
        deleteTask = document.querySelectorAll(".delete-task");
        for (let i = 0; i < deleteTask.length; i++) {
            deleteTask[i].addEventListener("click", function() {
                deleteTask[i].parentElement.parentElement.remove();
            
		    });
        }
        /*Delete Task*/
    });

    /*Delete All Tasks*/
    deleteTasks.addEventListener("click", function(){
        tasks = document.querySelectorAll(".task");
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].parentElement.remove();
        }
    });
    /*Delete All Tasks*/

}


