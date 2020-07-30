/* NOTAS
-En el constructor no pueder ir un this antes de un super
*/


class Persona {

    static _conteo = 0;

    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola a todos, soy un método estático');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase') {
            this.nombre = nombre;
            this.codigo = codigo;
            this.frase = frase;

            Persona._conteo++;
        }
        //los sets se acostumbra recibir un valor y no deben tener el mismo nombre que la propiedad que quieres modificar, el set sirve para recibir un valor
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    //El get es para recuperar un valor
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}
class Heroe extends Persona {
    clan = 'Sin clan';
    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);
        //modifico el nombre del clan
        this.clan = "avengers";
    }
    quienSoy() {
        //SObre escribo el mensaje de quien soy
        console.log(`soy ${this.nombre} y soy del clan ${this.clan}`);
        //muestro el mensaje del padre
        super.quienSoy();
        //Este ejemplo lo puse por si necesito las 2 cosas, modificar o el mismo metodo del padre
    }
}

const spiderman = new Heroe('Ric');
spiderman.quienSoy();
//const iroman = new Persona('Tony', 'Iron Man', 'Soy invencible');