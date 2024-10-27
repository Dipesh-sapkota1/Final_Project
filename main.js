const menu = document.getElementById('hamburger-menu');
const menuItem = document.getElementById('navbar__list');



menu.addEventListener('click',()=>{
    menu.classList.toggle('open');
    menuItem.classList.toggle('show');
})
