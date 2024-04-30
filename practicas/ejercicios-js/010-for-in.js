
/*
========================================================================================
Explicación FOR IN
La elección más común para utilizar for...in en JavaScript es para iterar sobre las propiedades de un "objeto".

-Se utiliza para iterar(recorrer) sobre las propiedades enumerables de un objeto, incluyendo propiedades heredadas del prototipo.
-Devuelve los índices (en el caso de arrays) en lugar de los valores.


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
-----------------------------------------------------------------------

Ejercicio 2, recorre el array con for in 
let countries = ['Mexico', 'USA', 'Canada', 'Japan', 'SOuth Korea'];
for (let i in countries) {
    console.log(countries[i]);
}

-----------------------------------------------------------------------
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

*/