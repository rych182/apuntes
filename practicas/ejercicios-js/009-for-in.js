
/*
========================================================================================
Explicación FOR IN
La elección más común para utilizar for...in en JavaScript es para iterar sobre las propiedades de un objeto.

-Se utiliza para iterar sobre las propiedades enumerables de un objeto, incluyendo propiedades heredadas del prototipo.
-Devuelve las claves (o índices en el caso de arrays) en lugar de los valores.


                                EJERCICIOS CON FOR IN

Ejercicio 0: recorrer el objeto
let myObject = { a: 1, b: 2, c: 3 };

for (let key in myObject) {
  console.log("Clave:", key, "Valor:", myObject[key]);
}


EJERCICIO 1:Haz un ciclo con for in para recorrer un objeto
let objeto = {
    nombre: "Ric",
    apellido: "Garrido",
    Edad: 33
}
for (const propiedad in objeto) {
    console.log(`Key: ${propiedad} --- Value: ${objeto[propiedad]}`);
}

Ejercicio 2, haz el ejercicio 1 pero usando FOR IN, 
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i in countries) {
    console.log(countries[i]);
}

EJERCICIO 3: Recorrer un objeto utilizando FOR IN
const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1969,
    marca: "Chevrolet"
}
for (const auto in automovil) {
    console.log(`${auto}: ${automovil[auto]}`);
}

----------------------------------------------------------------------------
Ejercicio 4:
Iterar sobre propiedades heredadas:

function Animal() {
  this.legs = 4;
}

Animal.prototype.sound = "Hiss";

let cat = new Animal();

for (let prop in cat) {
  console.log(prop, cat[prop]);
}

Aquí, for...in itera sobre las propiedades del objeto cat, incluyendo las propiedades heredadas del prototipo (sound en este caso).
*/