<?php
/* temas: variables, boleanos, condicional(if,else-if, if-if else-else), arreglos */



/*  ===========================================EXERCISES=======================================================
EXERCISE 1 
Create a variable
    $hola = "Hello world again";
    echo $hola;
-------------------------------------------------------------------------------------------------
EXERCISE 1.01: Use gettype() to know of data type in a variable
$numero = true;
echo gettype($numero);
---------------------------------------------------------------------------------------------------

EXERCISE 2: Print boolean variables true and false
$verdadero = true;
$falso = false;
echo $falso;
----------------------------------------------------------------------------------------------------
EXERCISE 3: Create a conditional exercise
$num1 = 123;
    $num2 = 19;

    if($num1 > $num2){
        echo "el número $num1 es mayor que $num2";
    }else if($num1 == $num2){
        echo "Ambos números son iguales";
    }else{
        echo "El número $num2 es mayor que $num1";
    }
--------------------------------------------------------------------------------------------------------
EXERCISE 4: Exercise where you show if a variable is true
$caja = true;
if($caja){
    echo "Puedes entrar";
}else{
    echo "Tienes que logeart";
}
---------------------------------------------------------------------------------------------------------
EXERCISE 4.01: determines if the variable is not null USING if-short
$edad;
echo isset($edad);
$edad = (isset($edad)) ? $edad : 'el usuario no establecio su edad';
echo 'Edad:' . $edad;

----------------------------------------------------------------------------------------------------------
EXERCISE 5: Print a Array
$frutas = array('Melon','Sandia','Naranja','Manzana','Uva');
echo "<pre>";
print_r($frutas);
echo "</pre>";
----------------------------------------------------------------------------------------------------------
EXERCISE 5.01: Print a multidimensional array
$animales = array(array('gato','perro'),array('pez','pajaro'),array('raton','serpiente'));
echo $animales[0][1] . "<br>";
echo $animales[1][1] . "<br>";
echo $animales[2][1] . "<br>";
---------------------------------------------------------------------------------------------------------
EXERCISE 6: Add a element to array and erase a element
$frutas = array('Melon','Sandia','Naranja','Manzana','Uva');
array_push($frutas,"pera");
unset($frutas[0]);
echo "<pre>";
print_r($frutas);
echo "</pre>";
----------------------------------------------------------------------------------------------------------
EXERCISE 6.01: Take a random data 
$caja = array('Perro','Gato','Ratón','Perico');
$indice = array_rand($caja);
echo "<pre>";
var_dump($caja);
echo "</pre>";
echo $caja[$indice];
----------------------------------------------------------------------------------------------------------
EXERCISE 6.02: Print to reverse an array
$caja = array('Perro','Gato','Ratón','Perico');
$alreves= array_reverse($caja);
var_dump($alreves);
----------------------------------------------------------------------------------------------------------
EXERCISE 6.03: Search a data in an array
$caja = array('Perro','Gato','Ratón','Perico');
$buscar = array_search("Gato",$caja);
var_dump($buscar);
-----------------------------------------------------------------------------------------------------------
EXERCISE 6.04: COunt the elements inside to array
$caja = array('Perro','Gato','Ratón','Perico');
$contar = count($caja);
echo $contar;
----------------------------------------------------------------------------------------------------------
EXERCISE 7: Print asociative array and normal array using var_dump and print_r
$alumno = array(
    "Nombre"    => "Ricardo",
    "Apellido"  => "Garrido",
    "Edad"      => 33
);
$frutas = array("mango","melon","sandia","pera","papaya");
echo "Imprimiendo con print_r";
echo "<pre>";
print_r($alumno);
echo "</pre>";

echo "Imprimiendo con var_dump";
echo "<pre>";
//print_r($alumno);
var_dump($alumno);
echo "</pre>";

echo "<pre>";
//print_r($alumno);
var_dump($frutas);
echo "</pre>";
-----------------------------------------------------------------------------------------------------------------------
EXERCISE 8: write a function that adds
function suma($num1,$num2)
{
    $resultado = $num1+ $num2;
    echo $resultado;
}
suma(2,3);
-------------------------------------------------------------------------------------------------------------------------
EXERCISE 8.01: Write a function that will be print your name
function nombre($name)
{
    echo $name;
}
nombre("Ricardo");
---------------------------------------------------------------------------------------------------------------------------
EXERCISE 9: Create a loop using "for" at 0 to 10 
for ($i=0; $i <= 10; $i++) { 
	echo $i . "<br>";
}
--------------------------------------------------------------------------------------------------------------------------
EXERCISE 9.01: Create a loop using "for" at 10 to 0
for ($i=10; $i >= 0; $i--) { 
	echo $i . "<br>";
}
---------------------------------------------------------------------------------------------------------------------------
EXERCISE 9.02: Create a loop  than count of five at five using "for"
for ($i=0; $i <= 50 ; $i = $i +5) { 
    echo $i . "<br>";
}
------------------------------------------------------------------------------------------------------------------------------
EXERCISE 9.03: Create a loop than print the months of the year that inside to array.
$meses = array('Enero','Febrero','Marzo','Abril',
				'Mayo','Junio','Julio','Agosto',
			'Septiembre','Octubre','Noviembre','Diciembre');
for ($i=0; $i < count($meses) ; $i++) { 
	echo $meses[$i] . "<br>";
}
------------------------------------------------------------------------------------------------------------------------------
EXERCISE 9.04: create a loop at 0 to 10 and when the loop will be arrive to five that print something and that continue
for ($i=0; $i < 10; $i++) {    
    if ($i == 5) {
        echo "Llegué al 5 <br>";
        continue;
    }
    echo $i . "<br>";
}

*/

    

?>