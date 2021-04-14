const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(e) {
    e.preventDefault();
    //todoDiv
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //newTodo
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //complete-btn
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<li class="fas fa-check"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash-btn
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<li class="fas fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //Delete Todo
    if (item.classList[0] == "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    //Check Todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        // if (todo.classList[1] == "completed") todo.classList.remove("completed");
        // else {
        //   todo.classList.add("completed");
        // }
        todo.classList.toggle("completed");
    }
}