/**
 Set Es una estructura de tipo array pero de datos únicos, de datos "primitivos",porque en la memoria de javascript cada
objeto es una referencia unica porque si tu le pasa objetos, cada objeto, aunque el objeto este vacío, por eso,
en la memoria de javascript cada objeto es una referencia unica. Se usa para guardar datos pero el programador no quiere
que se repitan datos, por ejemplo una base de datos de correos electronicos 

Ejercicio 1: creando un Set, agregando datos, recorriendolo


const set = new Set([1,2,3,3,4,5,true,false,false,{},{},"hola","HOLA"])
//console.log(set.length) no funciona, tienes que usar size
console.log(set.size)

const set2 = new Set([])
//Agregando datos a mi nuevo set
set2.add(1)
set2.add(2)
set2.add(3)
set2.add(3)
set2.add(true)
set2.add(false)
set2.add(false)
set2.add({})
console.log(set2)

//Recorriendo cada set
for (const element of set) {
  console.log(element)
}

//Recorriendo set2

set2.forEach(element => {
  console.log(element)
});

//forEach sirve para recorrer arreglos y también Set
//No podemos acceder a el espacio de memoria de un set con posiciones de memoria así:[1].
//para recorrerlo necesito convertirlo a un array
let caja = Array.from(set);
console.log(caja[10])

//borrar un dato de un set
set.delete("HOLA");
console.log(set)

//Comprobar si hay un dato en un set
console.log(set.has("hola"))

//Si quiero borrar todos los valores de un set
set.clear()
console.log(set)
 */