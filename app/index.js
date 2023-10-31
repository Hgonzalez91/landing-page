const menu = document.getElementById('menu');
const divOptionsMenu = document.querySelector('.header-menu .inactive');

menu.addEventListener('click', () => {
    divOptionsMenu.classList.toggle('inactive');
});