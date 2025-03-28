/*

Nota: Es muy raro tener 3 niveles de arrays

-----------------------------------------------------------------------------------------------------
Array() es un constructor que se utiliza para crear un nuevo objeto de tipo Array con una longitud específica
y se inicializa con un valor determinado usando el método fill().
un constructor es una función que se utiliza para crear y inicializar objetos a partir de una clase o tipo de datos
existen varios constructores integrados para tipos de datos básicos como
-Array(), 
-Object()
-String() 
-Number() 
-Boolean()
-Date()

Existen dos tipos:
Constructores nativos (o integrados) y constructores personalizados. 
-Los constructores nativos son aquellos que se proporcionan por defecto en JavaScript,
-Los constructores personalizados se crean por el usuario utilizando la sintaxis de clases o
funciones constructoras.

-------------------------METODOS PARA ARRAYS------------------------------------------------------- 
Los métodos que se escriben con un punto antes del nombre del método se llaman "métodos de objeto".
Estos métodos son aquellos que están asociados con un objeto en particular y actúan sobre ese objeto.
Por ejemplo:
-El método .length se utiliza para encontrar la longitud de una cadena o matriz y
solo se puede usar en objetos de tipo cadena o matriz.

Por otro lado, los métodos que se escriben con paréntesis después del nombre del método
son métodos que pueden ser utilizados por cualquier objeto de ese tipo de datos.
Por ejemplo:
El método .toUpperCase() se puede usar en cualquier objeto de tipo cadena para convertirlo en mayúsculas.

En resumen, el punto se usa para acceder a los métodos de un objeto específico,
mientras que los paréntesis indican
que se está invocando un método que puede ser utilizado por cualquier objeto de ese tipo de datos.

----------------------------ARRAYS--------------------------------------------------

Ejercicio 1 : Array que tenga strings
let animales = ['Perro', 'Gato', 'Pez'];
console.log(animales[2]);

Ejercicio 2
Array que tenga strings y números
let datos = [19, 'Gato', 22];
console.log(datos[0]);

Ejercicio 3: Array que tenga strings, números y boleanos
let datos = [19, 'Gato', true];
console.log(datos[2]);

Ejercicio 4: Array que tenga strings, números, boleanos y nulos
let datos = [19, 'Gato', true, null];
console.log(datos[3]);

*/