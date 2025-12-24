let nombre = "hola mundo";
//nombre = 123; //el tipo de dato number no puede ser asignado a la variable nombre porque solo recibe strings
const nombre1 = "ricardo!!!"; //asignandole el tipo de dato que debe de recibir
console.log(nombre1);
//MARCA ERROR PORQUE TYPESCRIPT PIENSA QUE 'NOMBRE1' va a chocar con 'NOMBRE1' de app.js
const hero = {
    name: "ironman",
    age: 45
};
// hero.age = "23" me marca error porque no me permite sobreescribir el tipo de dato que no sea el mismo
//Hace la transpilación porque typescript piensa que "yo se lo que estpy haciendo"
//este error nos ubieramos dado cuenta hasta que ejecutaramos nuestro códig
console.log(hero.age + 1);
export {};
//# sourceMappingURL=app.js.map