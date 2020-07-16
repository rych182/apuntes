// Eliminar de Local Storage
//localStorage.clear();

document.getElementById('submit-buscador').addEventListener('click', ejecutar);

function ejecutar(e) {
    e.preventDefault();
    alert("Ejecutando desde una funcion");
}


/*
Ejercicio para seleccionar enlaces link
const primerLi = document.querySelectorAll('.enlace')[1];
console.log(primerLi);

document.getElementById('submit-buscador').addEventListener('click', function(e) {
    e.preventDefault();
    alert("He dado un click");
})

*/