const hamburguesa = document.querySelector('#hamburguer')
const enlaces = document.querySelector('#nav-links')

hamburguesa.addEventListener('click', ()=>{
    //classList: Permite la manipulación del atributo de contenido de clase del elemento
    //toggle: Si no se especifica la fuerza, se activa o desactiva el token, eliminándolo si está presente y agregándolo si no. Si la fuerza es verdadera, se agrega el token (igual que `add()`). Si la fuerza es falsa, se elimina el token (igual que `remove()`).
    //Devuelve `true` si el token ya está presente y `false` en caso contrario.
    enlaces.classList.toggle('show')
})
