//Typescript te marca que hay 2 tipos de datos en el array, si no especificas que tipo de datos tendrá
let numeros = [1, 2, 3, 4, 5, "6", 7, 8, 9];
//Se puede especificar así: let numeros:(number | string | boolean)[] = [1,2,3,4,5,"6",7,8,9]
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let personas = ["ric", "moni", "loboriginal"];
//Aparece la ayuda aunque estés usando distintos tipos de datos dentro del array
numeros.push("hola");
//pero si agregas un tipo de dato distinto a los que hay dentro ya declarados desde el inicio, MARCA ERROR, pero si lo asigna
//numeros.push(true)
console.log(numeros);
numeros2.forEach((dato) => {
    //aquí no funciona el .toUpperCase()
    console.log(dato);
});
personas.forEach((dato) => {
    console.log(dato.toUpperCase());
});
export {};
//# sourceMappingURL=04-arrays.js.map