const btn_menu = document.getElementById('btn-menu');
const btn_menu_close = document.getElementById('btn-menu-close');

const nav = document.getElementById('nav-menu');

btn_menu.addEventListener('click', () =>{
    nav.classList.add('visible')
})
btn_menu_close.addEventListener('click', () =>{
    nav.classList.remove('visible')
})
