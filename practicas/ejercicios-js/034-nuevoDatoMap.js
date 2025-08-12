/*
Los Maps son objetos que nos sirven para almacenar valores asociados, es como un objeto "primitivo"
Realmente tiene caracteristicas poco usables.
Una colección de datos que este relacionado, por ejemplo un catalogo o algo que tengas que tener
"preestablecido" en tu aplicación

let mapa = new Map();
//Agregar datos, set significa establecer
mapa.set("nombre","Ricardo");
mapa.set("apellido","Garrido");
mapa.set("edad",38);
console.log(mapa)
//revisar si existe ese dato
console.log(mapa.has("correo"))

//obtener los datos
console.log(mapa.get("edad"))

//Sobreescribir un valor
mapa.set("edad",39)
console.log(mapa)

//Borrar un dato
mapa.delete("nombre")
console.log(mapa)

//recorriendo un map
for (const element of mapa) {
    console.log(element)
}


//recorriendo un map usando "deestructuracion"
for (let [key,value] of mapa) {
    console.log(`La propiedad es ${key} y su valor es ${value}`)
}
*/



let mapa = new Map();
//Agregar datos, set significa establecer
mapa.set("nombre","Ricardo");
mapa.set("apellido","Garrido");
mapa.set("edad",38);

//Si quieres guardar las propiedades en una variables y metodos en otra
const llaves = [...mapa.keys()]
const valores = [...mapa.values()]
console.log(llaves)
console.log(valores)