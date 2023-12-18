import { renderDetail } from './todoDetail.js'
import { createNewTodo } from './todo.js';

const list = document.querySelector("#list");
const createBtn = document.querySelector("#create-btn");
const createText = document.querySelector("#create-text");

let todos = [];

createBtn.addEventListener("click", createNewTodo, saveToLocalStorage, loadFromLocalStorage);


function saveToLocalStorage() {
    const data = JSON.stringify(todos);
    localStorage.setItem('todos', data);
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('todos');
    if (data) {
        todos = JSON.parse(data);
    }
}

function renderTodos() {
    loadFromLocalStorage();
    todos.forEach((todo) => {
        const itemEl = createTodoElement(todo);
        list.append(itemEl);

        itemEl.addEventListener('click', () => {
            renderDetail(todo);
        });
    });
}

renderTodos();