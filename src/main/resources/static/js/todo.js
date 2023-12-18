
export function createNewTodo(title) {
    const item = {
        id: new Date().getTime(),
        title: title,
        state: '',
        text: '',
        comment: '',
        date: new Date().toLocaleString(),
    }

    const itemEl = createTodoElement(item);
    return { item, itemEl };
}

export function createTodoElement(item) {

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
        let data = localStorage.getItem('todos');
        let todos;
        if (data) {
            todos = JSON.parse(data);
        }

        todos = todos.filter((todo) => todo.id !== item.id);
        itemEl.remove();
        
        data = JSON.stringify(todos);
        localStorage.setItem('todos', data);
    });

    return itemEl;
}
