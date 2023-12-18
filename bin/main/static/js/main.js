import { renderDetail } from './todoDetail.js'
import { createNewTodo, createTodoElement } from './todo.js';

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


document.querySelector('.back-btn').addEventListener('click', function () {
    const detail = document.querySelector('.detail-container');
    const todo = document.querySelector('#todo');
    if (detail.classList.contains('appear')) {
        detail.classList.add('disappear');
        setTimeout(function () { detail.classList.remove('appear') }, 500);
    }

    setTimeout(function () {

        todo.classList.remove('hidden');
        todo.classList.add('appear');
    }, 500);
    
});
