const menu = document.querySelector('.menu')
const dropdown = document.querySelector('.navigace')
const close = document.querySelector('.close')

menu.addEventListener('click', ()=>{dropdown.classList.add('active'); document.querySelector('main').classList.add('inactive');document.querySelector('footer').classList.add('inactive');})
close.addEventListener('click', ()=>{dropdown.classList.remove('active');document.querySelector('main').classList.remove('inactive');document.querySelector('footer').classList.remove('inactive');})

import LocomotiveScroll from 'locomotive-scroll';
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true,
    getSpeed: true,
    getDirection: true,
    useKeyboard: true
});