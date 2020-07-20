//Variables
const carrito = document.getElementById('carrito'); //paso1
const cursos = document.getElementById('lista-cursos'); //paso1
//Esta constant guarda la posicion donde agregaremos al carrito
const listaCursos = document.querySelector('#lista-carrito tbody'); //paso2
const vaciarCarritoBtn = document.getElementById('vaciar-carrito'); //paso 3

//Listeners
//se ejecuta aquí el eventListener para que cuando de el click se accione la función comprarCurso
cargarEventListeners(); //paso1

function cargarEventListeners() { //paso1
    //Se acciona cuando se presiona "Agregar al carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrita
    carrito.addEventListener('click', eliminarCurso);

    //AL vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar el documento, mostrar localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


//Funciones
function comprarCurso(e) { //paso1
    e.preventDefault();
    //Verifica si selecciona la clase, a esto se le llama DELEGATION 
    if (e.target.classList.contains('agregar-carrito')) {
        //selecciona el padre del elemento al cual le di click para así seleccionar todo el producto
        const curso = e.target.parentElement.parentElement;

        leerDatosCurso(curso);
    }
}

function leerDatosCurso(curso) { //paso2
    //Filtra la información y la almacena en el objeto 
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
}

//Inserta el codigo html en el carritode comopras
function insertarCarrito(curso) { //paso2
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X<a/>
        </td>
    `;
    //agregamos la variable listaCursos y le agregamos el html que guardamos en la variable row
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso); //parte4
}

function eliminarCurso(e) {
    e.preventDefault();
    let curso,
        cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId);
}

function vaciarCarrito() {
    //forma lenta
    //listaCursos.innerHTML = '';
    //forma rápida (recomendad)
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    //Vaciar el carrito con el boton de vaciar carrito
    vaciarLocalStorage();
    return false;
}

//Almacena cursos en el carrito a local storage PARTE 4

function guardarCursoLocalStorage(curso) {
    let cursos;
    //Toma el valor de un arreglo con datos de localSTorage o vacio
    cursos = obtenerCursosLocalStorage();
    //El curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

function obtenerCursosLocalStorage() {
    let cursosLS;

    //COmprobamos si hay algo en el localStorage
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}

function leerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function(curso) {
        //Construir el template
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width="100">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X<a/>
        </td>
    `;
        //agregamos la variable listaCursos y le agregamos el html que guardamos en la variable row
        listaCursos.appendChild(row);
    });
}
//Elimina el curso por el Id en el localstorage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;
    //Obtenemos el arreglo del curso
    cursosLS = obtenerCursosLocalStorage();
    //Iteramos comparando el ID del curso con los del LS
    cursosLS.forEach(function(cursoLS, index) {
        if (cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
    });
    //Añadimos el arreglo actual a LocalStorage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//ELimina todos los cursos del carrito de compras
function vaciarLocalStorage() {
    localStorage.clear();
}