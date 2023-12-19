const todoDetail = document.querySelector("#todo-detail");

export function renderDetail(item, saveToLocalStorage) {
    console.log(saveToLocalStorage);

    const detailDec = document.createElement('div');
    detailDec.classList.add('detail__description');

    const detailTitle = document.createElement('h3');
    detailTitle.innerHTML = item.title;
    detailTitle.classList.add('detail__title');

    const detailState = document.createElement('p');
    detailState.innerHTML = `상태: ${item.state}`;
    detailState.classList.add('detail__state');

    const detailComment = document.createElement('p');
    detailComment.innerHTML = `코멘트: ${item.comment}`;
    detailComment.classList.add('detail__comment');

    const detailDate = document.createElement('p');
    detailDate.innerHTML = `등록일: ${item.date}`;
    detailDate.classList.add('detail__date');

    detailDec.append(detailTitle);
    detailDec.append(detailState);
    detailDec.append(detailComment);
    detailDec.append(detailDate);

    const detailText = document.createElement('textarea');
    detailText.classList.add('detail__text');
    detailText.textContent = item.text;

    detailText.addEventListener('blur', (e) => {
        item.text = detailText.value;
        saveToLocalStorage();
    });

    todoDetail.innerHTML = '';
    todoDetail.append(detailDec);
    todoDetail.append(detailText);

    document.querySelector('.hidden').classList.remove('disappear');
    document.querySelector('.hidden').classList.add('appear');
    const target = document.querySelector('#todo');
    target.classList.add('hidden');
    document.querySelector('#todo').classList.remove('appear');;
}
