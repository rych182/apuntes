/*
Operadores aritmeticos
+ , - , * , / , %modulo, ()agrupación
1-Se realiza primero lo que esta entre parentesis
2-luego raices y potencias
3-multiplicacione y divisiones
4-sumas y restas de izquierda a derecha

sumas
5+5//10
5+5-10//0

Multiplicacion
5+5-10*3//-20

Multiplicación y agrupación
5+(5-10)*3//-10
5+(5-10*3)//-20

Modulo(residuo)
5%2//1

Operadores relacionales(Nos permiten comparar)
>, <, >=, <=, ==, ===, !=(diferente), !==(super diferente)

console.log(8>9)false
console.log(9>8)true
console.log(8>=9)false
console.log(9>=8) al menos una de las 2 se debe de cumplir
console.log(7<7)false
console.log(7<=7)al menos 1 debe ser verdadero


= asignación
== comparación de valores
=== comparación de tipo de dato y de valor
LA BUENA PRACTICA, USAR SIEMPRE ===

CON DOS IGUALES
console.log(7==7)// true
console.log(7=='7')// true
console.log(0==true)// true

CON TRES IGUALES
console.log(7===7)// true
console.log(7==='7')// false
console.log(0===true)// false

INCREMENTO Y DECREMENTO
let i = 1;

i = i +2; //esto es igual que lo de abajo
i +=3;
restando
i -= 3;
multiplicando i*=3



*/

//console.log('2'>'12');//TRUE  
/*
la comparación de strings se realiza de manera lexicográfica, es decir,
se comparan los caracteres uno a uno desde el principio de cada string hasta encontrar una diferencia.
*/

//console.log("2">[])//TRUE
//console.log('2'>{});//FALSE
/*
JavaScript intenta convertir el objeto a un tipo de dato primitivo para hacer la comparación.
Para los objetos, esto generalmente significa intentar convertirlos a un valor numérico o a un string.
La conversión por defecto de un objeto a un número no siempre es clara o directa.
En el caso de un objeto vacío {}, la conversión a un número no produce un valor numérico razonable.
JavaScript no puede convertir {} de manera efectiva a un número (o incluso a un string que pueda ser comparado lógicamente con otro string


Los datos con los que voy a experimentar:
-texto
-texto >,<,=
-numeros +, - y ()
-numeros *, / , % y ()
-Numeros <,>,=, !=, !==,
-Comparar <,>,=, !=, !==, pero con [],{},[con datos],{con datos},boleano,null, undifined

Acomodar estos ejercicios de abajo
console.log('2'>NaN)//FALSE
console.log('2'>false)//true
console.log('2'>true)//true
*/



/* Multiplicación UNICAMENTE con parentesis */

/* Multiplicacion SIN  y CON parentesis */
//console.log(3(3*4));//error por que el 3 lo toma como si fuera una función 
console.log(2*(3*4));//24
//console.log((2*3)(3*4)); así no funciona, tienes que ponerle un signo en medio
console.log((2*3)*(3*4));//72
console.log((2*3)+(3*4));//18
console.log((2*3)/(3*4));//.5
console.log((2*3)>(3*4));//false
console.log((3*8)<(7/4));//false
console.log((2/3)===(6/4));//true


