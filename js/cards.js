const grande = document.querySelector(".grande")
const botones = document.querySelectorAll(".botones")

botones.forEach((cadaPunto , i)=> {
    botones[i].addEventListener('click',()=>{
         let posicion = i
         let operacion = posicion * -25

         grande.style.transform = `translateX(${ operacion }%)`
         botones.forEach(( cadaPunto, i)=>{
            botones[i].classList.remove('activo')
         })

        botones[i].classList.add('activo')
    })
})