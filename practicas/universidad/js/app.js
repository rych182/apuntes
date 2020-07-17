// Eliminar de Local Storage
//localStorage.clear();

//Agregar un local storage
localStorage.setItem('nombre', 'Ricardo');
sessionStorage.setItem('pais', 'Canada');
localStorage.removeItem('nombre');

const nombre = localStorage.getItem('nombre');
//Agregar un sesion


/*
Ejercicio para seleccionar enlaces link
const primerLi = document.querySelectorAll('.enlace')[1];
console.log(primerLi);
-------------------------------------------------------------------------------------
Ejecutar un evento click
document.getElementById('submit-buscador').addEventListener('click', function(e) {
    e.preventDefault();
    alert("He dado un click");
})
Otra forma de hacerlo
document.getElementById('submit-buscador').addEventListener('click', ejecutar);
function ejecutar(e) {
    e.preventDefault();
    alert("Ejecutando desde una funcion");
}


*/