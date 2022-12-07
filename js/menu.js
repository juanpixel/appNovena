const menu = document.querySelector('.menu')
const cerrar = document.querySelector('.cerrar')
const menu_flotante = document.querySelector('.menu_flotante')


const qr = document.querySelector('.qr')
const cerrarqr = document.querySelector('.cerrarqr')
const verqr = document.querySelector('.verqr')


menu.addEventListener('click',()=>{
    menu_flotante.classList.toggle('activo')
})

cerrar.addEventListener('click',()=>{
    menu_flotante.classList.toggle('activo')
})

qr.addEventListener('click',()=>{
    verqr.classList.toggle('activo2')
})

cerrarqr.addEventListener('click',()=>{
    verqr.classList.toggle('activo2')
})



