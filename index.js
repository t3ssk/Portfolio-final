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

const submit = document.querySelector('.poslat')
const form = document.querySelector('.form')


submit.addEventListener('click', ()=>{
    let name = document.querySelector('#name').value
    let surname  = document.querySelector('#surname').value
    let email  = document.querySelector('#mail').value
    let company  = document.querySelector('#company').value
    let about  = document.querySelector('#about-company').value
    let socials  = document.querySelector('#socials').value
    let details  = document.querySelector('#details').value

    let message = `Jmenuji%20se%20${name}%20${surname}\n a můj email je ${email}.Firma: ${company}. O nás: ${about}. Naše sociální sítě: ${socials}. A něco víc o nás: ${details}`
    window.open('mailto:te.konecna@icloud.com?subject=Žádost o spolupráci&body=' + message)
})