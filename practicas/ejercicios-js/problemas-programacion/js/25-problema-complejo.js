/*
ACTIVIDADES
-La clase recibirá un objeto al momento de instanciarse con los siguientes datos: id de la película
en IMDB, titulo, director, año de estreno, país de origen, generos y 
calificación en IMDB
-Todos los datos del objeto son obligatorios
-Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes
números
-Valida que el título no rebase los 100 caracteres
-Valida que el director no rebase los 50 caracteres
-Valida que el año de estreno sea un número entero de 4 dígitos
-Valida que el país o países sea introducidos en forma de arreglo
-Valida que los generos sea  introducidos en forma de arreglo
-Valida que los generos introducidos estén dentro de los generos aceptados
-Crea un metodo estático que devuelva los generos aceptados
-Valida que la calificación sea un número entre 0 y 10 pudiendo ser una decimal de una posición
-Crea un metodo que devuelva toda la ficha técnica de la película
-Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase 
de forma automatizada e imprime la ficha técnica de cada película


Generos aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary,
Drama, Family, Fantasy, Film Noir, Game-show, History, Horror, Musical, Music, Mystery, News,
Reality-TV, Romance, Sci-Fi, Short, Talk-Show, Thriller, War, Western  

*/


class Pelicula {
    //Deestructuramos los datos que estamos pidiendo del objeto 
    constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
            this.id = id;
            this.titulo = titulo;
            this.director = director;
            this.estreno = estreno;
            this.pais = pais;
            this.generos = generos;
            this.calicalificacion = calificacion;

            //Para que se ejecuten las validaciones debes de agregar aquí los metodos en el constructor

            this.validarIMDB(id);
            this.validarTitulo(titulo);
            this.validarDirector(director);
            this.validarEstreno(estreno);
            this.validarPais(pais);
            this.validarGeneros(generos);
            this.validarCalificacion(calificacion);
        }
        //Validaciones

    //cree un atribut estatico para no depender de que se instancie un objeto para utilizarlos
    static get listaGeneros() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime",
            "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror",
            "Musical", "Mistery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport",
            "Talk-Show", "Thriller", "War", "Western"
        ];
    }

    //metodo estatico 
    static generosAceptados() {
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`)
    }

    //propiedad=si es cadena de texto // valor= evalua el titulo, el director etc
    validarCadena(propiedad, valor) {
        //Estas validaciones dentro de este metodo las invoco donde necesite validar que un valor es de tipo cadena
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if (!valor) return console.warn(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
        return true;
    }

    validarLonguitudCadena(propiedad, valor, longuitud) {
        if (valor.length > longuitud) {
            return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longuitud})`);

            return true;
        }
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado NO es un número`);
        return true;
    }

    validarArreglo(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);

        for (let cadena of valor) {
            //Si los elementos de la cadena no son texto
            if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
        }

        return true;
    }

    validarIMDB(id) {
        if (this.validarCadena("IMDB id", id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                //Son expresiones regulares, espera dos letras de la a-z y 7 caracteres números
                // ^(se  llama circunflejo, quiere decir que no debe de ir nada antes)
                // $ no debe de ir nada después
                //Cuando el id no cumpla estas caracteristicas retornara el error
                return console.error(`IMDB "${id}" no es valido, debe tener 9 caracteres, los 2 primeras
                letras minúsculas, los 7 restantes números.`);
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadena("Titulo", titulo)) {
            //Evalua si es cadena de texto, si es un titulo, director etc, que no pase de 100 caracteres
            this.validarLonguitudCadena("Titulo", titulo, 100);
        }
    }


    validarDirector(director) {
        if (this.validarCadena("Director", director)) {
            //Evalua si es cadena de texto, si es un titulo, director etc, que no pase de 100 caracteres
            this.validarLonguitudCadena("Director", director, 50);
        }
    }

    validarEstreno(estreno) {
        if (this.validarNumero("Año de Estreno", estreno))
            if (!(/^([0-9]){4}$/.test(estreno))) {
                return console.error(`Año de Estreno "${estreno}" no es valido, debe ser un número de 4 dígitos`);
            }
    }

    validarPais(pais) {
        this.validarArreglo("País", pais)
    }

    validarGeneros(generos) {
        if (this.validarArreglo("Generos", generos)) {
            for (let genero of generos) {
                //listaGeneros se comporta como una variable por que es un atributo porque en JS en las clases cuando usas get se vuelve atributo
                //Nos imorime si el genero es verdadero o falso
                //console.log(genero, Pelicula.listaGeneros.includes(genero));
                //si el genero que se esta buscando (genero), no se encuentra dentro de la lista de generos Pelicula.listaGeneros.includes(), entonces imprime errors y la lista de generos aceptados
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Género(s) incorrecots "${generos.join(",")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }

    }

    validarCalificacion(calificacion) {
        if (this.validarNumero("Calificacion", calificacion)) {
            return (calificacion < 0 || calificacion > 10) ?
                console.error(`La calificación tiene que estar en un rango entre 0 y 10`) :
                this.calificacion = calificacion.toFixed(1);
        }
    }

    fichaTecnica() {
        console.info(`Ficha Técnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGeneros: "${this.generos.join("-")}"\nCalificación: "${this.calificacion}"\nIMDB id: "${this.id}"`);
    }
}

//Para ver los generos aceptados
//Pelicula.generosAceptados();

//La clase recibe un objeto
/*
const peli = new Pelicula({
    id: "tt1234567",
    titulo: "Titulo de la Peli",
    director: "Director de la Peli",
    estreno: 2020,
    pais: ["Canada", "Mexico"],
    generos: ["Mundo", "Comedy"],
    calificacion: 1.145
});

peli.fichaTecnica();
*/
misPelis = [{
        id: "tt1234337",
        titulo: "Interestelar",
        director: "Ni idea",
        estreno: 2016,
        pais: ["USA"],
        generos: ["Sci-Fi", "Comedy"],
        calificacion: 10
    },
    {
        id: "tt1234997",
        titulo: "Star Wars I",
        director: "George Lucas",
        estreno: 2002,
        pais: ["USA"],
        generos: ["Fantasy", "Sci-Fi"],
        calificacion: 9
    },
    {
        id: "tt1234567",
        titulo: "Fast and Furios 3",
        director: "Tampoco se",
        estreno: 2007,
        pais: ["USA"],
        generos: ["Action", "Sport"],
        calificacion: 8
    }
];

misPelis.forEach(el => new Pelicula(el).fichaTecnica());