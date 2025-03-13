const hamburguesa = document.querySelector('#hamburguer')
const enlaces = document.querySelector('#nav-links')

hamburguesa.addEventListener('click', ()=>{
    enlaces.classList.toggle('show')
})
