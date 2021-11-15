burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navMenu = document.querySelector('.nav-menu')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-class-resp');
    navMenu.classList.toggle('v-class-resp');
})