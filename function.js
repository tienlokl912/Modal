const modal = document.querySelector('.modal');
const hide_icon = document.querySelector('.modal #hide_icon');
const hide_button = document.querySelector('.modal #hide_button');
const show_button = document.querySelector('#show_button');

hide_icon.addEventListener('click', hidemodal);
hide_button.addEventListener('click', hidemodal);
show_button.addEventListener('click', showmodal);

function hidemodal() {
    modal.id = 'hide';
}

function showmodal() {
    modal.id ='show';
}