<?php

$caja = array('Perro','Gato','Ratón','Perico');
$indice = array_rand($caja);
$alreves= array_reverse($caja);
$buscar = array_search("Gato",$caja);
$contar = count($caja);

echo "<pre>";
var_dump($caja);
echo "</pre>";

echo $contar;

/*


EJERCICIO 6

$caja = array('Perro','Gato','Ratón','Perico');
$contar = count($caja);
echo $contar;

EJERCICIO 5

$caja = array('Perro','Gato','Ratón','Perico');
$buscar = array_search("Gato",$caja);
var_dump($buscar);

EJERCICIO 4
$caja = array('Perro','Gato','Ratón','Perico');
$alreves= array_reverse($caja);
var_dump($alreves);



EJERCICIO 3
$caja = array('Perro','Gato','Ratón','Perico');
$indice = array_rand($caja);
echo "<pre>";
var_dump($caja);
echo "</pre>";
echo $caja[$indice];


EJERCICIO 2

$caja = array('Perro','Gato','Ratón','Perico');
$caja[] = "Tortuga";
echo "<pre>";
var_dump($caja);
echo "</pre>";

array_push($caja,"Pez");//También se puede con esta función


EJERCICIO 1

$caja = [4,6,1,92,35,93,54,21];
sort($caja);
echo '<pre>';
var_dump($caja);
echo '</pre>';

------------------------------------
APUNTES

array_pop()//quita el último elemento del array que le indiques
array_push()//agrega un elemento al array
unset()// Elimina un indicie en específico del array

-------------------------------------
EJERCICIOS
1)ordenar los números de un array
2)Añadir elementos a un array usando corchete vacios y array_push y quitar dos con array_push y unset
3)Sacar un dato aleatorio del array usando array_rand y mostrando que hay en el array
4)Imprimir al revez los datos de un array 
5)Buscar un dato dentro de un array con array_search
6)Contar el número de elementos de un array usando count();


*/

?>