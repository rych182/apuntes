function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
}
Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}


function Perro(nombre,genero,tamanio) {
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}














/*
//Herencia prototipica
function Perro(nombre,genero,tamanio) {
    //aquí le decimos que el elemento padre es Animal, invocas al constructor
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}
//asignando al prototipo de Perro, una instancia de animal
//Perro esta heredando de ANimal
Perro.prototype = new Animal();
//Generandole su funcion constructora
Perro.prototype.constructor = Perro;

//SObreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar= function(){
    console.log("SOy un perro y mi sonido es un ladrido");
}
Perro.prototype.ladrar = function(){
    console.log("GUa gua")
}

//Aquí cambio la instancia de "Animal" por "Perro", y le agregamos el tamaño
const Snoopy = new Perro("Snoopy", "Macho","Mediano");
const LolaBunny = new Animal("LolaBunny", "Hembra");

//Analizamos el console.log de snoopy, ya no dice animal, dice Perro a comparación
//del de LolaBunny y en sus prototipos están los metodos sonar y ladrar
//también dos scopes(object y animal) y la función que "saludar" que no he usado
console.log(Snoopy);
console.log(LolaBunny);

//Aquí sobreescribí el metodo "sonar"
Snoopy.sonar();
Snoopy.saludar();
//EL nuevo metodo que le creamos a Snoopy
Snoopy.ladrar();

LolaBunny.sonar();
LolaBunny.saludar();
*/


/*
JS es un lenguaje orientado a objetos basado en prototipos, no en clases
Javascript es un lenguaje multiparadigma(estilos), con la programación funcional, orientada a objetos.
En javascript es un poco distinta a la programación orientada a objetos.
-Apartir del 2015 (estandar 2016) 'ya tenemos CLASES', estas se les conoce como "azucar sintactica" osea
una manera más fácil que nos provee el lenguaje "para poder hacer la programación ORIENTADA A PROTOTIPOS",
el navegador convertira las clases a funciones prototipicas
-La POO sus 4 conceptos importantes son:
    *Clases: un modelo a seguir, como un machote, como una calca
    *Objetos: es una instancia de la clase, osease una copia del modelo a seguir
        **Atributos:Es una propiedad del objeto(son variables dentro de un objeto)
        **Metodos: Son las acciones que un objeto puede realizar(son funciones dentro de un objeto). NOTA: por eso las funciones son muy descriptibas
        como "getElementById" ó console.log ó console.warm etc

Cuando en JS tu escribes una clase, el compilador la transforma a una función prototipal

Prototipos en JS: es un mecanismo al cual un objeto puede heredar atributos y metodos de un objeto padre.
En JS la herencia se da por la cadena de prototipos 

-Cuando tu creas un objeto, tienes propiedades y metodos, pero el prototipo más primitivo es el Object,
y tiene las definiciones de sus getters y setters, es este: __proto__: Object .

NOTA IMPORTANTE EJERCICIOS: imprimir los 4 console.log, para ver la diferencia en los objetos creados

*/


/*}
Ejercicio 1: Comparo todos los objetos(los literales, con los instanciados con la palabra reservada new)
ESTA ES LA MANERA CORRECTA

function Animal(nombre, genero) {
    //atributos, recibiremos su valor por el parametro
    this.nombre = nombre;
    this.genero = genero;
    
    //Metodos
    //se pone this para que forme parte de este contructor
    //La sintaxis de los objetos literales, no aplican cuando haces una función constructora
    //Lo ideal, es que los metodos se saquen de la función constructora y los peguemos al prototipo
    this.sonar = function() {
        console.log("mi nombre es:"+" "+ this.nombre)
    }

    // Mostrar cmo me marca error de esas 2 maneras
    //1-sonar(){} 
    //2-this.sonar(){}
}

let Snoopy1 = {
    name: "ric",
    apellido: "garrid"
}

let LolaBunny1 = {
    name: "ric",
    apellido: "garrid"
}

//Aquí creamos la instancia con la palabra reservada "new" podría ser una instancia de tipo
// "que le especifiquemos", puede ser "new String" ó "new Array"
//Yo lo que quiero crear es un objeto con la función constructora "Animal"
const Snoopy = new Animal("Snoopy", "Macho");
const LolaBunny = new Animal("LolaBunny", "Hembra");

//Estos 2 objetos aparecen en la consola PERO son algo que se llama "Animal" y su función constructora es "Animal"
console.log(Snoopy);
console.log(LolaBunny);

console.log(Snoopy1);
console.log(LolaBunny1);

console.log(typeof Snoopy)
console.log(typeof Snoopy1)


//Todo esto evita que estes copiando y pegando la "estructura de un objeto literal", 
//si vamos a usar varias instancias de ese tipo que estemos creando, nos conviene usar una función constructora

-----------------------------------------------------------------------------------

EJERCICIO 2: FUnción constructora donde asignamos los metodos al prototipo, no a la función como tal 
//FUnción constructora donde asignamos los metodos al prototipo, no a la función como tal
function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}
//Estos son los metodos agregados al "prototipo" de la función constructora, esto va a generar, rendimiento y espacio
//en memoria, si tu despliegas el objeto, te darás cuenta de que no aparecen los metodos, pero si aparecen en el "prototype"
Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
}
Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

const Snoopy = new Animal("Snoopy", "Macho");
const LolaBunny = new Animal("LolaBunny", "Hembra");

console.log(Snoopy);
console.log(LolaBunny);

Snoopy.sonar();
Snoopy.saludar();

LolaBunny.sonar();
LolaBunny.saludar();

COnstructor:es un metodo especial que se ejecuta cuando se crea una nueva instancia de ese objeto 


----------------------------------------------------------------------------------------------------------------------
Ejercicio 3: Ejercicio de herencia prototipica
La POO en JS no esta basada en clases si no en prototipos
HERENCIA PROTOTIPICA
Es la capacidad de poder heredar caracteristicas de un padre a un hijo, se da con las
clases, pero en JS, se da en "cadena prototipica".

SUper: es un metodo que manda llamar el constructor de la clase padre

function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
}
Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

//Herencia prototipica
function Perro(nombre,genero,tamanio) {
    //aquí le decimos que el elemento padre es Animal, invocas al constructor
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}
//asignando al prototipo de Perro, una instancia de animal
//Perro esta heredando de ANimal
Perro.prototype = new Animal();
//Generandole su funcion constructora
Perro.prototype.constructor = Perro;

//SObreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar= function(){
    console.log("SOy un perro y mi sonido es un ladrido");
}
Perro.prototype.ladrar = function(){
    console.log("GUa gua")
}

//Aquí cambio la instancia de "Animal" por "Perro", y le agregamos el tamaño
const Snoopy = new Perro("Snoopy", "Macho","Mediano");
const LolaBunny = new Animal("LolaBunny", "Hembra");

//Analizamos el console.log de snoopy, ya no dice animal, dice Perro a comparación
//del de LolaBunny y en sus prototipos están los metodos sonar y ladrar
//también dos scopes(object y animal) y la función que "saludar" que no he usado
console.log(Snoopy);
console.log(LolaBunny);

//Aquí sobreescribí el metodo "sonar"
Snoopy.sonar();
Snoopy.saludar();
//EL nuevo metodo que le creamos a Snoopy
Snoopy.ladrar();

LolaBunny.sonar();
LolaBunny.saludar();

*/



