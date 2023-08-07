let priceItem = 25
let contador = 0
let cantidad = document.querySelector('.cantidad')
let btnMenos = document.querySelector('.btnMenos')
let btnMas = document.querySelector('.btnMas')
let precioTotal = document.querySelector('#precioTotal')
let ejemplo = document.querySelector('.ejemplo')
precioTotal.innerHTML = `${priceItem}`
btnMas.addEventListener('click', ()=>{
    contador++
    cantidad.innerHTML = contador
})
btnMenos.addEventListener('click', ()=>{
    if(contador > 0){
        contador--
    cantidad.innerHTML = contador
}}
)
