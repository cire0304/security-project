import { renderDetail } from './todoDetail.js'
import { createNewTodo, createTodoElement } from './todo.js';

const todoList = document.querySelector("#todo-list");
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
    todoList.innerHTML = '';
    todos.forEach((item) => {
        const itemEl = createTodoElement(item);
        todoList.append(itemEl);
        
        itemEl.querySelector('.remove-btn').addEventListener('click', () =>{
            todos = todos.filter((todo) => todo.id !== item.id);
            itemEl.remove();
            saveToLocalStorage();
        });

        itemEl.addEventListener('click', (e) => {
            if (!e.target.classList.contains('item__remove')) {
                renderDetail(item, saveToLocalStorage);
            }
        });
    });
}

createBtn.addEventListener("click", () => {
    const { item, itemEl } = createNewTodo(createText.value);
    createText.value = '';
    todos.unshift(item);

    saveToLocalStorage();
    renderTodos();
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
