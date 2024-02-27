/*
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

Y las cosas que aún "no existen": no podemos tener un clase con atributos o metodos "privados",
esos sirven para que solo se puedan utilizar dentro del cuerpo de la clase
*/
