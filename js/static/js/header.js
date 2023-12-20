document.querySelector('#create-btn').addEventListener('mousedown', function (){
    this.classList.add('mousedown');
});

document.querySelector('#create-btn').addEventListener('mouseup', function (){
    this.classList.remove('mousedown');
});

