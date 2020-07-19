//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

//Listeners
//se ejecuta aquí el eventListener para que cuando de el click se accione la función comprarCurso
cargarEventListeners();

function cargarEventListeners() {
    //Se acciona cuando se presiona "Agregar al carrito"
    cursos.addEventListener('click', comprarCurso);
}


//Funciones
function comprarCurso(e) {
    e.preventDefault();
    //Verifica si selecciona la clase, a esto se le llama DELEGATION 
    if (e.target.classList.contains('agregar-carrito')) {
        //selecciona el padre del elemento al cual le di click para así seleccionar todo el producto
        const curso = e.target.parentElement.parentElement;

        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso) {
    console.log(curso);
}