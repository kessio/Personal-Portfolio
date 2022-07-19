const menuNav = document.getElementById('mobile-menu-nav');
const hamburger = document.getElementById('hamburger-menu');
const menuItems = document.querySelectorAll('.mobile-list-items');
const closemenu = document.getElementById('close-menu-mobile'); 

hamburger.addEventListener('click', () => {
    menuNav.classList.toggle('active');

})
closemenu.addEventListener('click', () => {
    menuNav.classList.remove('active');

})

menuItems.forEach(n => n.addEventListener('click',() => {
    menuNav.classList.remove('active');

}))
