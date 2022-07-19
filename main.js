let menuNav      = document.getElementById('mobile-menu-nav')
let hamburger    = document.getElementById('hamburger-menu')
let menuItems    = document.querySelectorAll('.mobile-list-items')
let closemenu    = document.getElementById('close-menu-mobile')   

hamburger.addEventListener('click',() => {
    menuNav.classList.toggle('active')

})
closemenu.addEventListener('click',() => {
    menuNav.classList.remove('active')

})

menuItems.forEach(n => n.addEventListener('click',() => {
    menuNav.classList.remove('active')

}))
