// variables, acostumbrate a utilizar constante para que no haya peligro de que se reasigne el valoir 
const carrito = document.querySelector('#carrito')
//donde se van a colocar los elementos
const contenedorCarrito = document.querySelector("#lista-carrito tbody")
//para eliminar todos los elementos
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito")
//el contenedor principal donde vamos a poder seleccionar los cursos
const listaCursos = document.querySelector("#lista-cursos")

//crear una funcion donde registras todos tus eventListener, que son 2
//que son los botones de agregar carrito y vaciar carrito

cargarEventListeners();
function cargarEventListeners() {
    //agregando un nuevo curso
    listaCursos.addEventListener('click',agregarCurso)
}

//FUNCIONES
function agregarCurso() {
    console.log('Presionando en cursos')
}