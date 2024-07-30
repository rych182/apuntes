/*
TEORIA DE RECURSIVIDAD

Es una técnica donde una función se llama a sí misma para resolver un problema. 
La recursión es útil para problemas que pueden dividirse en subproblemas similares al problema 
original. 
La clave para una recursión efectiva es definir correctamente una condición base 
que detenga la recursión, evitando que la función se llame indefinidamente.(puede ser un if)


Elementos de la Recursión

    Condición Base: Es la condición que detiene la recursión. Sin ella, la función seguiría llamándose indefinidamente, lo que resultaría en un desbordamiento de la pila (stack overflow).
    Caso Recursivo: Es la parte de la función donde se llama a sí misma con un subproblema más pequeño.

CUANDO CONSIDERAR USARSE LA RECURSIVIDAD

  Eficiencia: La recursión puede ser menos eficiente que las soluciones iterativas debido al consumo de memoria de la pila de llamadas.
  Stack Overflow: Sin una condición base correcta, una función recursiva puede causar un stack overflow, haciendo que el programa se bloquee.
  Legibilidad: La recursión puede hacer que el código sea más legible y elegante, especialmente para problemas que son naturalmente recursivos, como el recorrido de estructuras de datos jerárquicas (árboles, gráficos).

---------------------------------------------------------------------------------------------    


Ejercicio 1: Factorial usando recursividad:

function factorial(n) {
    // Condición base: Si n es 0, el factorial de 0 es 1
    if (n === 0) {
      return 1;
    }
    // Caso recursivo: n! = n * (n-1)!
    return n * factorial(n - 1);
  }
  
  console.log(factorial(5)); // 120
  
--------------------------------------------------------------------
Ejercicio 2: sumar todos los elementos de un arreglo de manera recursiva.

function sumArray(arr) {
  // Condición base: Si el arreglo está vacío, la suma es 0
  if (arr.length === 0) {
    return 0;
  }
  // Caso recursivo: Sumar el primer elemento y el resultado de la suma del resto del arreglo
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15


Condición Base: if (arr.length === 0) { return 0; } 
- Esto detiene la recursión cuando el arreglo está vacío.
Caso Recursivo: return arr[0] + sumArray(arr.slice(1)); 
- La función toma el primer elemento del arreglo y lo suma al resultado de la suma de los elementos restantes.

-----------------------------------------------------------------------------------------

  */