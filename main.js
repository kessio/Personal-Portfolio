const menuNav = document.getElementById('mobile-menu-nav'); // \r\n
const hamburger = document.getElementById('hamburger-menu'); // \r\n
const menuItems = document.querySelectorAll('.mobile-list-items'); // \r\n
const closemenu = document.getElementById('close-menu-mobile');
hamburger.addEventListener('click', () => {
  menuNav.classList.toggle('active');
});
closemenu.addEventListener('click', () => { menuNav.classList.remove('active'); });
menuItems.forEach((n) => n.addEventListener('click', () => {
  menuNav.classList.remove('active');
}));
