/*
Exercise 0: callback per event
Para esto creamos un boton en html que tenga un id

//function that allows you to select an id, class or html tag
document.querySelector('#btn').addEventListener('click',()=>{
	console.log("Has dado click y se ha activado ka función callback que dispara este console.log")
})
---------------------------------------------------------------------------------
Exercise 1: change the button color without give a click, only with a function
const button = document.querySelector('.btn2')

function toggle() {
  button.classList.toggle('altColor')
}
toggle()
--------------------------------------
Exercise 2: change the button color with a click



*/

const button = document.querySelector('.btn2')

function toggle() {
  button.classList.toggle('altColor')
}

button.addEventListener('click',toggle)