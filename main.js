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

const navigationBar = document.querySelector('.navigation-bar');
const logo = document.querySelector('.logo');
const hamburg = document.querySelector('.mobile-menu-item i');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navigationBar.classList.add('scrolled');
    logo.style.color = 'white';
    hamburg.style.color = 'white';
  } else {
    navigationBar.classList.remove('scrolled');
    logo.style.color = '#6070ff';
    hamburg.style.color = '#6070ff';
  }
});

function toggleCollapsibleLanguage() {
  var content = document.querySelector('.collapsible-content');
  var icon = document.querySelector('.angle-down');
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    icon.classList.remove('rotate');
  } else {
    content.classList.add('show');
    icon.classList.add('rotate');
  }
}

function toggleCollapsibleFramework() {
  var content = document.querySelector('.collapsible-content-framework');
  var icon = document.querySelector('.angle-down');
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    icon.classList.remove('rotate');
  } else {
    content.classList.add('show');
    icon.classList.add('rotate');
  }
}

function toggleCollapsibleSkills() {
  var content = document.querySelector('.collapsible-content-skills');
  var icon = document.querySelector('.angle-down');
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    icon.classList.remove('rotate');
  } else {
    content.classList.add('show');
    icon.classList.add('rotate');
  }
}
