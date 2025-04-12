

/*
Ejercicio 1, crea un programa que tenga una función flecha que reciba 2 parametos 
y con el operador ternario(if-else corto) imprima el número mayor 
const numeroMayor = (a, b) => {
    //el IF es el ? , el ELSE son los :
    return (a > b) ? a : b;
}
console.log(numeroMayor(7, 15));
----------------------------------------------------------------------------------------
Ejercicio 2, reducir el código del ejercicio anterior
const numeroMayor = (a, b) => (a > b) ? a : b;
console.log(numeroMayor(7, 9));
---------------------------------------------------------

------------------------------------------------
Ejercicio 5: Crea un programa que me imprima números del 1 al 10 y me diga si son pares o no, debes utilizar
el operador ternario, función y bucle

function parOImparHasta(n) {
  for (let i = 1; i <= n; i++) {
    const resultado = i % 2 === 0 ? 'par' : 'impar';
    console.log(`${i} es ${resultado}`);
  }
}
parOImparHasta(5);
--------------------------------------------------------------
Ejercicio 6: Crea un programa que me imprima si una persona es niño adolescente o adulto, 
Menores de 13 son niños, de 13 a 17 adolescentes y los demás son adultos.
Debes utilizar una función, un for of, operador ternario, templates strings y debes ingresar varias edades

function clasificarEdades(edades) {
  for (let edad of edades) {
    const tipo = edad < 13 ? 'niño' : edad < 18 ? 'adolescente' : 'adulto';
    console.log(`Edad ${edad}: ${tipo}`);
  }
}
clasificarEdades([8, 14, 20]);

---------------------------------------------------------------------------------------------
Ejercicio 7: 

//Si el producto cuesta más de 100, debes aplicarle un descuento del 10%, 
//debes usar , funciones, operador ternario, for of, y poder recibir varios productos
function aplicarDescuento(precios) {
    const preciosFinales = [];
    for (let precio of precios) {
      const descuento = precio > 100 ? precio * 0.9 : precio;
      preciosFinales.push(descuento);
    }
    return preciosFinales;
  }
console.log(aplicarDescuento([80, 150, 120]));

--------------------------------------------------------------------------------------------
Ejercicio 8: Evaluar notas
//Crear un programa al que le ingreses varias calificaciones juntas y te diga si estás aprobado o reprobado
//las notas deben ser del 0 al 100 y debes usar funciones, for of, operador ternario y templates strings


function evaluarNotas(notas) {
  for (let nota of notas) {
    const resultado = nota >= 60 ? 'Aprobado' : 'Reprobado';
    console.log(`Nota ${nota}: ${resultado}`);
  }
}
evaluarNotas([55, 70, 45]);

-------------------------------------------------------------------------------------------------
Ejercicio 9: envío con costo extra
Crea un programa al que le ingreses 3 precios de productos, si el producto tiene un costo mayor de 500, no se
le cobra envío, si es menor, se le cobra 50 de envío-
Puedes usar funciones, obligatorio usar operador ternario y debe recibir al menos 3 precios

tip0: no es necesario usar for
tip1: usa objetos
tip2: usar el metodo .map()


function totalConEnvio(productos) {
  const totales = productos.map(p => {
    return p.precio >= 500 ? p.precio : p.precio + 50;
  });
  return totales;
}
console.log(totalConEnvio([{precio: 300}, {precio: 600}, {precio: 499}]));

----------------------------------------------------------------------------------------------------
Ejercicio 10: Haz un programa que imprima "calor extremo" si la temperatura es mayor a 35, si es menor a 5, 
"frío extremo" y si es mayor o igual a 5 y menor a 34, "clima normal"
Usa función, for of, y operador ternario, también debes ingresar varias temperaturas

function clasificarTemperaturas(tempList) {
  for (let t of tempList) {
    const tipo = t > 35 ? 'Calor extremo' : t < 5 ? 'Frío extremo' : 'Normal';
    console.log(`${t}°C es ${tipo}`);
  }
}
clasificarTemperaturas([2, 15, 38]);
----------------------------------------------------------
Ejercicio 11: quiero un programa al que le ingreses varios números y diga si es 0, positivo o negativo
usa función, for or, operador ternario y template strings

function clasificarNumeros(numeros) {
  for (let n of numeros) {
    const tipo = n === 0 ? 'cero' : n > 0 ? 'positivo' : 'negativo';
    console.log(`${n} es ${tipo}`);
  }
}
clasificarNumeros([-5, 0, 12]);
-------------------------------------------------------------------------
Ejercicio 12: Haz un programa que reciba un número y diga si es el número secreto, y si no lo es, te diga una pista
de si es más alto o más bajo el número secreto
Usar funcion, for of, operador ternario y template strings

function juegoSecreto(intentos) {
  const secreto = 7;
  for (let n of intentos) {
    const mensaje = n === secreto ? '¡Correcto!' : n < secreto ? 'Muy bajo' : 'Muy alto';
    console.log(`Intento ${n}: ${mensaje}`);
  }
}
juegoSecreto([3, 8, 7]);
---------------------------------------------------------------------------------------------
Ejercicio 13: Crear un programa al que le ingreses varios números y que te devuelva los números multiplicados
x 2. Dbes usar función, for of, operador ternario y template strings

tip: utilizar un metodo predefinido de JS
tip2: utilizar el metodo push

function multiplicarSiPar(numeros) {
  let resultados = [];
  for (let n of numeros) {
    resultados.push(n % 2 === 0 ? n * 2 : n);
  }
  return resultados;
}
console.log(multiplicarSiPar([1, 2, 3, 4, 5]));



*/