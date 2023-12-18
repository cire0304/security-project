import { renderDetail } from './todoDetail.js'
import { createNewTodo, createTodoElement} from './todo.js';

const list = document.querySelector("#list");
const createBtn = document.querySelector("#create-btn");
const createText = document.querySelector("#create-text");

let todos = [];

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

        itemEl.addEventListener('click', (e) => {
            if (!e.target.classList.contains('item__remove')) {
                renderDetail(todo, saveToLocalStorage);
            }
        });
    });
}

createBtn.addEventListener("click", () => {
    const { item, itemEl } = createNewTodo(createText.value);
    createText.value = '';
    todos.unshift(item);
    list.prepend(itemEl);

    itemEl.addEventListener('click', (e) => {
        if (!e.target.classList.contains('item__remove')) {
            renderDetail(item, saveToLocalStorage);
        }
    });
    saveToLocalStorage();
});

renderTodos();