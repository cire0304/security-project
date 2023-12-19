
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
    // 드레그 가능하도록 변경
    itemEl.classList.add('item', 'draggable')
    itemEl.setAttribute('draggable', 'true');

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

    return itemEl;
}
