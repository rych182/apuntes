
/**
 Ejercicio 1:
 console.group("Tecnologías")
console.log("php")
console.log("js")
console.log("phyton")
console.log("sql")
console.log("aws")
console.groupEnd()
-----------------------------------------
Ejercicio 2:
Un objeto que te devuelve una matriz y con console.table te hace una tablita
console.table(Object.entries(console))
-----------------------------------------
Ejercicio 3: el ejemplo anterior para ordenar de manera ascendente
console.table(Object.entries(console).sort())
--------------------------------------------------
Ejercicio 4:console.table() te muestra las propiedades del objeto

const perro = {
    nombre: "coco",
    raza: "criolla",
    color: "negro"
}
console.table(perro)
-------------------------------------------------------------------------
Ejercicio 5: console.clear() para limpiar la consola
console.clear();
----------------------------------------------------------------------------
Ejercicio 6: Usamos console.time() para ver cuanto tarda en ejecutar el código
//Ya no usamos la vieja forma que esta en des-uso
const arreglo = new Array(1000000);

console.time("cuanto tarda mi codigo");
const arreglo = new Array(1000000);
//EL objeto tiene sus posiciones vacias
for (let i = 0; i < arreglo.length; i++) {
    //almacenamos el número de la posición como valor
    arreglo[i] = i;
}
//console.timeEnd debe de decir lo mismo que console.time para que identifique
console.timeEnd("cuanto tarda mi codigo");
//verificando si lleno mi arreglo
console.log(arreglo);
----------------------------------------------------------------------------------------
Ejercicio 7: console.count(); sirve para que te diga cuantas veces ha sido ejecutado
un bloque de código

situaciones posibles: 
-cuantas veces se ejecuto un evento al darle click a un boton, 
-cuantas conecciones tuvo que hacer para llegar a cierta solicitud
-cuantas peticiones hizo a una API

for (let i = 0; i <=100; i++) {
    console.count("codigo for");
    console(i)   
}

-------------------------------------------------------------------
Ejercicio 8: haciendo pruebas con console.assert()

let x = 3;
let y = 2;
let pruebaXY = "X debe ser siempre MENOR que Y";
//pones una condición y un objeto con las variables
console.assert(x<y,{x,y,pruebaXY})
//cuando es correcto no ejecuta nada, pero cuando esta mal, lanza el error
*/
