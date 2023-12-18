const list = document.querySelector("#list");
const createBtn = document.querySelector("#create-btn");

let todos = [];

createBtn.addEventListener("click", createNewTodo);

function createNewTodo() {
    // 새로운 아이템 객체 생성
    const item = {
        id: new Date().getTime(),
        text: '',
        complete: false
    }

    // 배열 처음에 새로운 아이템을 추가
    todos.unshift(item);

    // 요소 생성하기
    const { itemEl, inputEl, removeBtnEl, editBtnEl } = createTodoElement(item);

    // 리스트 요소 안에 방금 생성한 아이템 요소 추가
    list.prepend(itemEl);

    inputEl.removeAttribute('disabled');
    inputEl.focus();

    saveToLocalStorage()
}

function createTodoElement(item) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item')

    const checkboxEl = document.createElement('input');
    checkboxEl.type = 'checkbox';
    checkboxEl.checked = item.complete;

    if (item.complete) {
        itemEl.classList.add('complete');
    }

    const inputEl = document.createElement('input');
    inputEl.type = 'text';
    inputEl.value = item.text;
    inputEl.setAttribute('disabled', '');

    const actionEl = document.createElement('div');
    actionEl.classList.add('actions');

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add('material-icons');
    editBtnEl.innerHTML = 'edit';

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add('material-icons', 'remove-btn');
    removeBtnEl.innerHTML = 'remove_circles';

    inputEl.addEventListener('input', (e) => {
        item.text = inputEl.value;
        saveToLocalStorage()
    });

    inputEl.addEventListener('blur', () => {
        inputEl.setAttribute('disabled', '');
    });

    editBtnEl.addEventListener('click', () => {
        inputEl.removeAttribute('disabled');
        inputEl.focus();
    });

    removeBtnEl.addEventListener('click', () => {
        todos = todos.filter((todo) => todo.id !== item.id);
        itemEl.remove();
        saveToLocalStorage()
    });


    checkboxEl.addEventListener('change', () => {
        item.complete = checkboxEl.checked;

        if (item.complete) {
            itemEl.classList.add('complete');
        } else {
            itemEl.classList.remove('complete');
        }
        saveToLocalStorage()
    });

    actionEl.append(editBtnEl);
    actionEl.append(removeBtnEl);

    itemEl.append(checkboxEl);
    itemEl.append(inputEl);
    itemEl.append(actionEl);

    return { itemEl, inputEl, removeBtnEl, editBtnEl };
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
        const {itemEl} = createTodoElement(todo);
        list.append(itemEl);
    });
}

renderTodos();