/*
//Esto NO convierte a JS en un lenguaje orientado a objetos "basado en clase", sigue siendo
//basado en prototipos
//ES6 nos dio como actualización poder escribir los objetos como en otros lenguajes, usando clases



Ejercicio 1: Pasar la función constructora a clase
function Animal(nombre,genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;

    //metodos
    this.sonar = function(){
        console.log("Hago sonidos porque estoy vivo")
    }
    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

//Las clases no reciben parametro
//JS trabaja la orientación a objetos con "prototipos"
class Animal{
    //tienen un metodo especial que se llama constructor que se ejecuta en el momento
    //de instanciar la clase
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    //Los metodos si pueden recibir parametros
    //Aquí no necesitar sacar los metodos y usar prototype, lo hace en automatico
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

const mimi = new Animal("Mimi","Hembra");
const scooby = new Animal("Scooby","Macho")
//Te imprime el objeto identifico, y los metodos aparecen en el objeto más primitivo
console.log(mimi)
console.log(scooby)

----------------------------------------------------------------------------------------------
Ejercicio 2: probar la herencia con Clases

class Animal{
    //tienen un metodo especial que se llama constructor que se ejecuta en el momento
    //de instanciar la clase
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    //Los metodos si pueden recibir parametros
    //Aquí no necesitar sacar los metodos y usar prototype, lo hace en automatico
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //Con el metodo super(); se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    //sobreescritura del metodo sonar
    sonar(){
        console.log("SOy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("GUa gua");
    }
}


const mimi = new Animal("Mimi","Hembra");
const scooby = new Perro("Scooby","Macho","gigante")
//Te imprime el objeto identifico, y los metodos aparecen en el objeto más primitivo
console.log(mimi)
mimi.saludar()
mimi.sonar()

//fijate como Perro deriva del prototypo animal en la consola del navegador
console.log(scooby)
scooby.saludar()
//FIjate como se sobreescribio el metodo
scooby.sonar()
scooby.ladrar()

//Perro deriva de animal, animal deriva del object, object tiene los metodos que creamos y el
//siguiente object tiene todos esos metodos nativos

//Esto NO convierte a JS en un lenguaje orientado a objetos "basado en clase", sigue siendo
//basado en prototipos
//ES6 nos dio como actualización poder escribir los objetos como en otros lenguajes, usando clases

-------------------------------------------------------------------------------------------
Ejercicio 3: 
Metodos estaticos: aquel que se puede ejecutar sin necesidad de instanciar la clase
Metodos especiales "getters y setters", que nos permiten establecer o modificar el valor de 
una propiedad dentro de una clase 

los getters y setters son una característica de los objetos que te permiten
definir métodos para obtener y establecer el valor de una propiedad específica de un objeto.


Y las cosas que aún "no existen": no podemos tener un clase con atributos o metodos "privados",
esos sirven para que solo se puedan utilizar dentro del cuerpo de la clase,
tampoco existen las clases abstractas, y los getters y setters aquí se comportan como
propiedades


class Animal{
    //tienen un metodo especial que se llama constructor que se ejecuta en el momento
    //de instanciar la clase
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
        this.raza = null;
    }
    //Los metodos si pueden recibir parametros
    //Aquí no necesitar sacar los metodos y usar prototype, lo hace en automatico
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        //Con el metodo super(); se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    //sobreescritura del metodo sonar
    sonar(){
        console.log("SOy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("GUa gua");
    }
    //un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
    //Si no le pones el static, te marca error al ejecutarla
    //Y no aparece en la consola
    static queEres(){
        console.log("Los perros somos animales mamiferos, somos el mejor amigo del hombre");
    }

    //Los setters y getters son metodos especiales que nos permiten establecer y obtener
    //los valores de atributos de nuestra clase
    //En los Metodos obtenedores y establecedores, le anteponemos el verbo "get"
    get getRaza(){//un metodo obtenedor solo "retorna"
        return this.raza;
    }

    //para generar un metodo "establecedor" que modifique dicha propiedad
    //se ejecutan como si fuera una propiedad
    //como vamos a establecer un nuevo valor, significa que vamos a recibir un valor
    set setRaza(raza){
        //al valor de raza, asignale el parametro que estamos recibiendo entre parentesis
        this.raza = raza;
    }

}


const mimi = new Animal("Mimi","Hembra");
const scooby = new Perro("Scooby","Macho","gigante")
//Te imprime el objeto identifico, y los metodos aparecen en el objeto más primitivo
console.log(mimi)
mimi.saludar()
mimi.sonar()

//fijate como Perro deriva del prototypo animal en la consola del navegador
console.log(scooby)
scooby.saludar()

//FIjate como se sobreescribio el metodo
scooby.sonar()
scooby.ladrar()

//Metodo estatico
Perro.queEres();

//CHeca como sale error si lo ejecutas como metodo el set
//scooby.setRaza();

//Aquí verifico su valor
//console.log(scooby.getRaza) aparecera null

scooby.setRaza = "gran danes"//Aquí lo declaramos
console.log(scooby.getRaza);//Aquí ya imprime "gran danes"
//Si revisamos el prototipo de scooby, esta el metodo "getRaza"(que esta entre las propiedades)
//este setter, modifica el valor de null que tiene la propiedad raza
//si revisamos los "metodos" en la consola en el "prototipo perro" ahí estan los metodos
//"getRaza" y "setRaza" pero de tipo get y set
---------------------------------------------------------------------------------------------------------------------
Ejercicio 4
PRACTICANDO EL EJERCICIO 3 sin comentarios
class Animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
        this.raza = null;
    }
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    sonar(){
        console.log("SOy un perro y mi sonido es un ladrido");
    }
    ladrar(){
        console.log("GUa gua");
    }   
    static queEres(){
        console.log("Los perros somos animales mamiferos, somos el mejor amigo del hombre");
    }
    get getRaza(){//un metodo obtenedor solo "retorna"
        return this.raza;
    }
    set setRaza(raza){//al valor de raza, asignale el parametro que estamos recibiendo entre parentesis
        this.raza = raza;
    }
}

const mimi = new Animal("Mimi","Hembra");
const scooby = new Perro("Scooby","Macho","gigante")

console.log(mimi)
mimi.saludar()
mimi.sonar()

console.log(scooby)
scooby.saludar()

scooby.sonar()
scooby.ladrar()

Perro.queEres();

//CHeca como sale error si lo ejecutas como metodo el set
//scooby.setRaza();

//Aquí verifico su valor
//console.log(scooby.getRaza) aparecera null

scooby.setRaza = "gran danes"//Aquí lo declaramos
console.log(scooby.getRaza);//Aquí ya imprime "gran danes"
-----------------------------------------------------------------------------------------
Ejercicio 5: MOstrando como se puede usar un getter sin tener forzosamente un setter

class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para obtener la edad
    obtenerEdad() {
      return this.edad;
    }
  
    // Getter para obtener el nombre
    get obtenerNombre() {
      return this.nombre;
    }
  }
  
  const persona1 = new Persona("Juan", 30);

console.log(persona1.obtenerEdad()); // Salida: 30
console.log(persona1.obtenerNombre); // Salida: Juan
----------------------------------------------------------------------------
Ejercicio 6: mostrando como NO se puede modificar una propiedad desde un "getter"
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para obtener la edad
    obtenerEdad() {
      return this.edad;
    }
  
    // Getter para obtener el nombre
    get obtenerNombre() {
      return this.nombre;
    }
  }
  
  const persona1 = new Persona("Juan", 30);
  
  console.log(persona1.obtenerEdad()); // Salida: 30
  console.log(persona1.obtenerNombre); // Salida: Juan
  persona1.obtenerEdad="pedro";
  console.log(persona1.obtenerNombre);// Salida Juan 
  -----------------------------------------------------------------------------------------
  Ejercicio 7: Mostrando como se puede modifica una propiedad desde el "setter"
  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para obtener la edad
    obtenerEdad() {
      return this.edad;
    }
  
    // Getter para obtener el nombre
    get obtenerNombre() {
      return this.nombre;
    }

    set darNombre(nombre) {
        this.nombre = nombre;
      }
  }
  
  const persona1 = new Persona("Juan", 30);
  
  console.log(persona1.obtenerEdad()); // Salida: 30
  console.log(persona1.obtenerNombre); // Salida: Juan
  persona1.darNombre="pedro";
  console.log(persona1.obtenerNombre); //pedro

  El verdadero propósito de un getter es permitir un acceso controlado a una propiedad. 
Esto significa que puedes realizar validaciones,
cálculos u otras acciones cada vez que alguien intente acceder a la propiedad.
Sin embargo, en tu ejemplo, 
el getter simplemente devuelve el valor de la propiedad nombre sin aplicar ninguna lógica adicional.
-------------------------------------------------------------------------------------------------------
Ejercicio 8: quiero que por default me aparezca el tamaño del perro sin que se lo asigne en un parametro

class Animal {
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    sonar(){
        console.log("hago sonidos porque estoy vivo");
    }
    saludar(param){
        console.log(param)
    }
}  

class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        super(nombre,genero)
        this.tamanio = tamanio || "gigante";
    }
    saludar(){
        console.log('SOBREESCRIBIENDO solo porque "puedo"')
    }
    ladrar(){
        console.log("gua gua");
    }
    static estatica(){
        console.log("Soy un metodo estatico");
    }
    get getRaza(){
        return this.raza
    }
    set setRaza(raza){
        this.raza = raza;
    }
}

let conejo = new Animal("bugs","masculino");
let scooby = new Perro("Escubi","macho");

conejo.sonar();
conejo.saludar("Hola mundo");

scooby.saludar();
scooby.ladrar();

Perro.estatica()

console.log(scooby.tamanio);
scooby.setRaza = "gran danes"
console.log(scooby.getRaza)
------------------------------------------------------------------------------------------
Ejercicio 8

class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;  // _nombre es una convención para indicar que es una propiedad privada
        this._edad = edad;
    }

    // Getter para obtener el nombre
    get nombre() {
        return this._nombre;
    }

    // Setter para modificar el nombre con validación
    set nombre(nuevoNombre) {
        if (typeof nuevoNombre === 'string' && nuevoNombre.length > 0) {
            this._nombre = nuevoNombre;
        } else {
            console.error('Error: El nombre debe ser una cadena no vacía.');
        }
    }

    // Getter para obtener la edad
    get edad() {
        return this._edad;
    }

    // Setter para modificar la edad con validación
    set edad(nuevaEdad) {
        if (typeof nuevaEdad === 'number' && nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.error('Error: La edad debe ser un número positivo.');
        }
    }
}

// Crear una instancia de Persona
const persona1 = new Persona('Juan', 30);

// Obtener valores usando getters
console.log(`Nombre: ${persona1.nombre}`);
console.log(`Edad: ${persona1.edad}`);

// Modificar valores usando setters con validación
persona1.nombre = 'Carlos';
persona1.edad = 25;

// Intentar asignar un valor no válido (no se modificará)
persona1.nombre = '';  // Esto imprimirá un error en la consola

// Mostrar los valores actualizados
console.log(`Nuevo Nombre: ${persona1.nombre}`);
console.log(`Nueva Edad: ${persona1.edad}`);

//Esto proporciona un control más preciso sobre cómo se accede y modifica la información de una instancia de la clase Persona.

---------------------------------------------------------------------------------------------------------------------
PRACTICANDO EL EJERCICIO 3
class Animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
        this.raza = null;
    }
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        super(nombre, genero);
        this.tamanio = tamanio;
    }
    sonar(){
        console.log("SOy un perro y mi sonido es un ladrido");
    }
    ladrar(){
        console.log("GUa gua");
    }   
    static queEres(){
        console.log("Los perros somos animales mamiferos, somos el mejor amigo del hombre");
    }
    get getRaza(){//un metodo obtenedor solo "retorna"
        return this.raza;
    }
    set setRaza(raza){//al valor de raza, asignale el parametro que estamos recibiendo entre parentesis
        this.raza = raza;
    }
}

const mimi = new Animal("Mimi","Hembra");
const scooby = new Perro("Scooby","Macho","gigante")

console.log(mimi)
mimi.saludar()
mimi.sonar()

console.log(scooby)
scooby.saludar()

scooby.sonar()
scooby.ladrar()

Perro.queEres();

//CHeca como sale error si lo ejecutas como metodo el set
//scooby.setRaza();

//Aquí verifico su valor
//console.log(scooby.getRaza) aparecera null

scooby.setRaza = "gran danes"//Aquí lo declaramos
console.log(scooby.getRaza);//Aquí ya imprime "gran danes"

*/
//Intentos:15 Errores:10 AciertosCompletos:5.

class Animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    sonido(){
        console.log("hago sonidos porque estoy vivo");
    }
    saludar(){
        console.log("Hola mundo");
    }
}
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        super(nombre,genero);
        this.tamanio = tamanio;
    }
    saludar(){
        console.log("estoy modificando este metodo desde la clase hijo")
    }
    ladrar(){
        console.log("guau guau");
    }
    static estatica(){
        console.log("soy un metodo que no necesita ser instanciado")
    }
    get getRaza(){
        return this.raza
    }
    set setRaza(raza){
        this.raza = raza
    }
}

let conejo = new Animal("bugs","masculino");
let scooby = new Perro("Escubi","macho");

conejo.sonido();
conejo.saludar();

scooby.saludar();
scooby.ladrar();
Perro.estatica();

scooby.setRaza = "gran danes";
console.log(scooby.getRaza);




  














