

/*
                AddEventListener
Ejercicio 5: ejecuta una función anonima que contiene una funcion predefinida del lenguaje
Para esto creamos un boton en html que tenga un id

document.getElementById("alerta").addEventListener("click", function() {
    alert("Hello World!");
  });
--------------------------------------------------------------------------------------------------
EJercicio 6: Ejecutando 2 funciones con addEventListener y guardando la selección en una variable
Para esto creamos un boton en html que tenga un id

let x = document.getElementById("dosFunciones");
x.addEventListener("click", funcionUno);
x.addEventListener("click", funcionDos);

function funcionUno() {
  alert ("SOy la primer función!");
}

function funcionDos() {
  alert ("Me ejecuto despues de la función uno, SOY LA FUNCION 2");
}
----------------------------------------------------------------------------------------------------------
EJercicio 7: te imprime texto cuando estas sobre el boton, quitas el mouse encima del boton y cuando das click.

let x = document.getElementById("variasFunciones");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("imprimir").innerHTML += "El raton está sobre mi!<br>";
}

function mySecondFunction() {
  document.getElementById("imprimir").innerHTML += "Me diste click!<br>";
}

function myThirdFunction() {
  document.getElementById("imprimir").innerHTML += "QUitaste el mouse de encima de mi!<br>";
}
-----------------------------------------------------------------------------------------------------
Ejercicio 8 y 9 : te imprime el tamaño de la ventana del navegador

En esta se ejecuta "cuando se redimensiona", osea que tienes que hacer chico el navegador para que imprima
window.addEventListener("resize", function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById("demo").innerHTML = "Width: " + width + "px, Height: " + height + "px";
  });


EN este te imprime de inmediato el tamaño que tenga
  (function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    document.getElementById("demo").innerHTML = "Width: " + width + "px, Height: " + height + "px";
  })();

--------------------------------------------------------------------------------------------------------
Ejercicio 10: Este ejemplo demuestra cómo pasar valores de parámetros cuando se utiliza el método addEventListener()
y esta siendo llamada por una función anónima.

let p1 = 5;
let p2 = 7;
document.getElementById("suma").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("demo1").innerHTML = a * b;
}
----------------------------------------------------------------------------------
Ejercicio 11: El ejercicio de arriba con menos código

document.getElementById("suma").addEventListener("click", function() {
    let p1 = 5;
    let p2 = 7;
    document.getElementById("demo1").innerHTML = p1 * p2;
});
-------------------------------------------------------------------------------
                            forEach
Ejercicio 12
const names = ["Pedro","Paco","LOla","gerardo"];
names.forEach((name)=>{
    console.log(name)
})
-------------------------------------------------------------
                            .map()
Ejercicio 13: Utilizando la función .map
Este método crea un nuevo array con los resultados de aplicar dicha función de callback a cada elemento del array original.

const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(function(elemento) {
  return elemento * 2;
});

console.log(dobles); // [2, 4, 6, 8, 10]
-------------------------------------------------------
Ejercicio 14: el ejemplo de arriba pero usando los otros parámetros que la función de callback

const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.map(function(elemento, indice, array) {
  console.log('Elemento:', elemento); // Imprime el elemento actual
  console.log('Índice:', indice);     // Imprime el índice del elemento actual
  console.log('Array:', array);       // Imprime el array original
  return elemento * 2;
});

console.log(resultado); // [2, 4, 6, 8, 10]
-----------------------------------------------------------------------

Ejercicio 15: Podemos usar thisArg para cambiar el contexto de this dentro de la función callback:
const multiplicador = {
  factor: 3
};

const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.map(function(elemento) {
  return elemento * this.multiplicador;
}, multiplicador);

console.log(resultado); // [3, 6, 9, 12, 15]


Resumen

    La función callback de .map() se aplica a cada elemento del array.
    Devuelve un nuevo array con los resultados de la función callback aplicada a cada elemento.
    callback recibe hasta tres argumentos: elemento, índice, y arrayOriginal.
    thisArg puede ser usado para establecer el valor de this en la función callback.

.map() es útil cuando necesitas transformar cada elemento de un array de manera consistente.

-------------------------------------------------------------------------------------
Ejercicio 16:Usando el metodo callback llamado .find(), has que me imprima un número mayor 
a 10.

En este ejemplo, la función de prueba es element => element > 10.
El método find revisa cada elemento del array y devuelve el "primer elemento" que es mayor que 10,
que en este caso es 12.

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found); // Output: 12

Detalles adicionales

El método find no modifica el array original.
El método find no ejecuta la función para elementos sin valor (vacíos) en el array.
El método find detiene su ejecución en cuanto encuentra un elemento que cumple la condición, 
sin revisar los elementos restantes del array.

--------------------------------------------------------------------------------------------
Exercise 17: Encuentra la cantidad de alguna fruta utilizando el metodo callback .find() , 
estos datos se encuentran dentro de un array que contiene muchos objetos, 1 en cada posicion de
memoria, crea ese array con sus objetos, como atributos debe de tener el nombre de una fruta y 
su cantidad

Uso en arrays de objetos

El método find es particularmente útil cuando se trabaja con arrays de objetos y
se necesita encontrar un objeto con una propiedad específica.
 
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];

const result = inventory.find(fruit => fruit.name === 'cherries');

console.log(result); // Output: { name: 'cherries', quantity: 5 }

-------------------------------------------------------------------------------------------------
Exercise 18: Explicando la sintaxis de la función .find() y utilizando un ejemplo 

array.find(callback(element[, index[, array]])[, thisArg])

Vamos a dividir esto en partes más pequeñas:

array.find(callback(element[, index[, array]])):

array: El array sobre el cual se llama el método find.
find: El método que estamos utilizando.

callback(element[, index[, array]]):
        
  callback: La función que se ejecuta en cada elemento del array.
  Esta función puede aceptar hasta tres argumentos.

  element: El primer argumento, obligatorio,
  es el elemento actual que está siendo procesado en el array.

  [index]: El segundo argumento, opcional, es el índice del elemento actual en el array.
  [array]: El tercer argumento, opcional, es el array completo sobre el cual se llama el método find.

[, thisArg]:

    thisArg: Un valor opcional que se utiliza como this al ejecutar la función callback.

const array = [5, 12, 8, 130, 44];

const found = array.find((element, index, array) => {
  console.log('Elemento actual:', element);
  console.log('Índice actual:', index);
  console.log('Array completo:', array);
  return element > 10;
});

console.log('Elemento encontrado:', found);
---------------------------------------------------------------------------------------------

Exercise 19: Ejemplo utilizando thisArg en el metodo callback .find()
Creamos un array de objetos que representan productos y 
queremos encontrar el primer producto cuyo precio sea menor que un cierto valor.
Podemos usar un objeto separado para almacenar este valor y pasarlo como thisArg al método find.

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 500 },
  { name: 'Tablet', price: 300 }
];

const priceThreshold = { //humbral del precio
  maxPrice: 600
};

const findProductUnderPrice = function(product) {
  return product.price < this.maxPrice;
};

const foundProduct = products.find(findProductUnderPrice, priceThreshold);

console.log(foundProduct); // Output: { name: 'Phone', price: 500 }

//this se refiere a priceThreshold.
//De esta manera, podemos acceder a this.maxPrice para comparar el precio del producto actual. 
 
-----------------------------------------------------------------------------------------------------------
Exercise 20:  Crear un array que contenga objetos con las propiedades userId,id,title,body y
que con una función que reciba 2 parametros, el id y un callback, me imprima el objeto con el id seleccionado
Pista: usar función callback .find()

//Imagina que estos son post de una base de datos y vamos a pintarlos en el DOM
const posts = [
  {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

//quiero pasarle un id y que me devuelva especificamente el objeto señalado

const findPostById = (id,callback) => {
  //esto es para filtrar el id
  //es igual a nuestro array que es posts 
  //cuando el item sea igual al id, nos lo guarda en la constante post
  const post = posts.find( (item) => item.id === id )

  callback(post)
}

findPostById(1,(post)=>{
  console.log(post)
})

AHORA PREGUNTANDO SI EL ID EXISTE,  USA "CONVENCIÓN" Y EXPLICA PORQUE SON IMPORTANTES LAS CONVECIONES

const posts = [
  {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

//quiero pasarle un id y que me devuelva especificamente el objeto señalado

const findPostById = (id,callback) => {
  //esto es para filtrar el id
  //es igual a nuestro array que es posts 
  //cuando el item sea igual al id, nos lo guarda en la constante post
  const post = posts.find( (item) => item.id === id )

  if (post) {
  //el null siempre va a ser el error, y el post la respuesta de éxito
  //En caso de que exista el post, viajara como null, por lo tanto, esto no se ejecuta:
  // if (err) return console.log(err)
    callback(null,post)
  } else {
    callback("El ID " + id + " no existe")
  }

}

findPostById(5,(err,post)=>{
  //if resumido
  if (err) return console.log(err)
  
  console.log(post)
})

//Explicación de la convención

El uso de null como primer argumento en una función callback se ha convertido en una convención
por varias razones. 

1-Consistencia y Estándar: En muchas "bibliotecas y APIs de JavaScript, especialmente en Node.js",
el primer argumento de un callback se reserva para los errores. Si no hay errores,
este argumento se establece en null.
Esta convención ayuda a mantener un estándar consistente en el manejo de errores y resultados,
lo que facilita la comprensión y el mantenimiento del código.


Imagina que tienes una función que lee un archivo y luego ejecuta un callback.
Si ocurre un error durante la lectura del archivo,
el callback recibe el error como primer argumento. Si la lectura es exitosa,
el primer argumento es null y el segundo argumento contiene el contenido del archivo.


const fs = require('fs');

// Función que lee un archivo y usa un callback para manejar el resultado
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Si hay un error, pasamos el error al callback
            return callback(err);
        }
        // Si no hay error, pasamos null como primer argumento y los datos como segundo argumento
        callback(null, data);
    });
}

// Uso de la función readFile con un callback
readFile('example.txt', (err, data) => {
    if (err) {
        // Manejo del error
        console.error('Error reading file:', err);
        return;
    }
    // Procesamiento del resultado
    console.log('File content:', data);
});


--------
2-Manejo de Errores:
Esto permite a los desarrolladores verificar la presencia de un error de forma inmediata y 
actuar en consecuencia antes de procesar el resultado esperado. Por ejemplo:

function callback(err, result) {
    if (err) {
        // Manejo del error
        console.error(err);
        return;
    }
    // Procesamiento del resultado
    console.log(result);
}
--------
3-Legibilidad y Claridad:.
Los desarrolladores que están familiarizados con esta convención pueden entender rápidamente
la estructura de las funciones callback y cómo se manejan los errores y los resultados.
--------
4-Compatibilidad con Librerías Existentes:
Muchas librerías y frameworks, especialmente en el ecosistema de Node.js, 
esperan que los callbacks sigan esta convención.
Al adherirse a este estándar, se garantiza que las funciones sean compatibles con una amplia
variedad de herramientas y utilidades.

--------------------------------------------------------------------------------
Exercise 21: EXPLICANDO MAS A FONDO EL EJERCICIO ANTERIOR
PRIMERO NECESITAMOS EXPLICAR ESTO DE LOS IF-ELSE

const cadenaDeTexto = "hola";
const numero = 12;
const indefinido = undefined;
const nulo = null;
const vector = [1,"hola"]
const objeto={name:"ric",apellido:"garrido"}
const funcion = function() {
    return 3;
}
if (objeto) {
    console.log("imprime algo")
}else{
    console.log("Otra cosa")
}

LUEGO NECESITAMOS EXPLICAR COMO REACCIONAN EN LAS FUNCIONES
//CREO QUE TIENE PRIORIDAD EL PRIMER PARAMETRO,
//POR ESO LE PONEN UN NULL PARA QUE TOME EL SEGUNDO DATO


const posts = [
  {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const findPostById = (id,callback) => {
  //esto es para filtrar el id
  //es igual a nuestro array que es posts 
  //cuando el item sea igual al id, nos lo guarda en la constante post
  const post = posts.find( (item) => item.id === id )

  if (post) {
  //el null siempre va a ser el error, y el post la respuesta de éxito
  //En caso de que exista el post, viajara como null, por lo tanto, esto no se ejecuta:
  // if (err) return console.log(err)
    callback(null,post)
  } else {
    callback("El ID " + id + " no existe")
  }

}

findPostById(5,(err,post)=>{
  //if resumido
  if (err) return console.log(err)
  
  console.log(post)
})

*/


const posts = [
  {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];

const findPostById = (id,callback) => {
  //esto es para filtrar el id
  //es igual a nuestro array que es posts 
  //cuando el item sea igual al id, nos lo guarda en la constante post
  const post = posts.find( (item) => item.id === id )
  console.log(post)//undifined
  if (post) {
  //el null siempre va a ser el error, y el post la respuesta de éxito
  //En caso de que exista el post, viajara como null, por lo tanto, esto no se ejecuta:
  // if (err) return console.log(err)
  //Aquí se verifica si el primer argumento del callback (err) es no null.
  //Si err tiene un valor (es decir, hay un error), 
  //la función imprime el error y sale.


  //CREO QUE TIENE PRIORIDAD EL PRIMER PARAMETRO, POR ESO LE PONEN UN NULL PARA QUE TOME EL SEGUNDO DATO
    callback(null,post)
  } else {
    callback("El ID " + id + " no existe")
  }

}

findPostById(1,(err,post)=>{
  //if resumido
  //Aquí se verifica si el primer argumento del callback (err) es no null.
  //Si err tiene un "valor" (es decir, hay un error), 
  //la función imprime el error y sale.
  if (err) return console.log(err + "no se que es err")

  console.log(post)
})