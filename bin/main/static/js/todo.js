import { renderDetail } from './todoDetail.js'

// const list = document.querySelector("#list");
// const createBtn = document.querySelector("#create-btn");
// const createText = document.querySelector("#create-text");

// let todos = [];

// createBtn.addEventListener("click", createNewTodo);

export function createNewTodo() {
    const title = createText.value;
    createText.value = '';
    
    // 새로운 아이템 객체 생성
    const item = {
        id: new Date().getTime(),
        title: title,
        state: '',
        text: '',
        comment: '',
        date: new Date().toLocaleString(),
    }

    todos.unshift(item);
    const itemEl = createTodoElement(item);

    list.prepend(itemEl);


    saveToLocalStorage()
}

function createTodoElement(item) {

    const itemEl = document.createElement('div');
    itemEl.classList.add('item')

    const itemDec = document.createElement('div');
    itemDec.classList.add('item__description');

    const itemTitle = document.createElement('h3');
    itemTitle.textContent = item.title;
    itemTitle.classList.add('item__title');

    const itemComment = document.createElement('p');
    itemComment.classList.add('item__comment');

    itemDec.append(itemTitle);
    itemDec.append(itemComment);

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item__info');

    const itemDate = document.createElement('p');
    itemDate.textContent = item.date;
    itemDate.classList.add('item__date');

    const itemRemoveBtn = document.createElement('button');
    itemRemoveBtn.classList.add('item__remove', 'remove-btn');

    itemInfo.append(itemDate);
    itemInfo.append(itemRemoveBtn);

    itemEl.append(itemDec);
    itemEl.append(itemInfo);

    itemRemoveBtn.addEventListener('click', () => {
        todos = todos.filter((todo) => todo.id!== item.id);
        itemEl.remove();
        saveToLocalStorage()
    }); 

    return itemEl;
}


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