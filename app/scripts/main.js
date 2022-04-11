
//SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterAll = document.querySelector(".filter-all");
const filterActive = document.querySelector(".filter-active");
const filterCompleted = document.querySelector(".filter-completed");
const filterClearCompleted = document.querySelector(".filter-clear-completed");

//EVENTS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterAll.addEventListener("click", filterAllFunc);
filterActive.addEventListener("click", filterActiveFunc);
filterCompleted.addEventListener("click", filterCompletedFunc);
filterClearCompleted.addEventListener("click", filterClearCompletedFunc);

//FUNCTIONS

//adding container -> li,check-btn,delete-btn
function addTodo() {

    if (todoInput.value != "") {

        //todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //li
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");

        todoDiv.appendChild(newTodo);

        //check button
        const compleatedButton = document.createElement("button");
        compleatedButton.innerHTML = '<i class="fas fa-check" ></i>';
        compleatedButton.classList.add("complete-btn");
        todoDiv.appendChild(compleatedButton);

        //trash button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        //add to ul
        todoList.appendChild(todoDiv);

        //clear input field after add
        todoInput.value = "";

    }
}

//delete -- complete
function deleteCheck(e) {
    const item = e.target;
    //delete
    if (item.classList.contains("trash-btn") == true) {
        const todo = item.parentElement;
        todo.remove();
    }
    //complete
    else if (item.classList.contains("complete-btn") == true) {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}


//filters
function filterAllFunc() {
    const todos_complete = document.querySelectorAll(".todo");
    for (let x of todos_complete) {
        x.style.display = "flex";
    }

}

function filterActiveFunc() {
    const todos_complete = document.querySelectorAll(".todo");
    for (let x of todos_complete) {
        x.style.display = "flex";
    }
    const todos_completed = document.querySelectorAll(".todo.completed");
    // console.log(todos_completed);
    for (let x of todos_completed) {
        x.style.display = "none";
    }

}
function filterCompletedFunc() {
    const todos_complete = document.querySelectorAll(".todo");
    for (let x of todos_complete) {
        x.style.display = "none";
    }
    const todos_completed = document.querySelectorAll(".todo.completed");
    // console.log(todos_completed);
    for (let x of todos_completed) {
        x.style.display = "flex";
    }


}

function filterClearCompletedFunc() {
    const todos_clear_completed = document.querySelectorAll(".todo.completed");
    for (let x of todos_clear_completed) {
        x.remove();
    }

}
