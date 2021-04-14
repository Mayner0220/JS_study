const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deletCheck);

function addTodo(e) {
    e.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<li class="fas fa-check"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.classList.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<li class="fas fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(newTodo);
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] == "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "complete-btn") {
        todo.classList.toggle("completed-btn")
    }
}