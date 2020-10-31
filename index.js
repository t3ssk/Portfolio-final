const menu = document.querySelector('.menu')
const dropdown = document.querySelector('.navigace')
const close = document.querySelector('.close')

menu.addEventListener('click', ()=>{dropdown.classList.add('active')})
close.addEventListener('click', ()=>{dropdown.classList.remove('active')})