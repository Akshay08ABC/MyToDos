var taskInput = document.getElementById('task-input');
var taskForm = document.getElementById('task-form');
var taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const taskTitle = taskInput.value.trim();
    if(taskTitle === ""){
        alert("Please enter task");
    }
    else{
        const listItem = document.createElement('li');
        listItem.innerHTML = taskTitle;
        taskList.append(listItem);
        let span = document.createElement('span');
        span.innerHTML = `&times;`
        listItem.appendChild(span);
        taskInput.value = "";
        saveTaskData();
    }
});

taskList.addEventListener('click', (e)=> {
    if(e.target.tagName == "LI"){
        e.target.classList.toggle('checked');
        saveTaskData();
    }
    if(e.target.tagName == "SPAN"){
        const li = e.target.parentElement;
        li.remove();
        saveTaskData();
    }
});

function showTaskList() {
    taskList.innerHTML = localStorage.getItem('listItem');
}

function saveTaskData() {
    localStorage.setItem('listItem', taskList.innerHTML);
}

showTaskList();