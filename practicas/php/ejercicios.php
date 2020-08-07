<?php

$caja = array(
    array(
        'Perro',
        'Pato',
        'Ganzo'),
    array(
        'Fulano',
        'Mengano',
        'Sutano'),
    array(
        'Casa',
        'Auto',
        'TV')
);

echo $caja[2][1];











/*-----Ejercicio 10

$pets = array('Gato',
    "perro",
    "pez",
    $pajaros = array('Perico',
        "Guacamaya",
        "Gallo"
     )
);


$names = array(
    'name' => 'Fulano',
    'lastName' => 'Gomez',
    'email' => 'fulano@email.com',
    $others = array(
    'name' => 'Mengano',
    'lastName' => 'Perez',
    'email' => 'mengano@email.com'
    ),
    $others2 = array(
        'name' => 'Perengano',
        'lastName' => 'Garcia',
        'email' => 'Garcia@mail.com'
    )
);
echo $names[1]['lastName'];

------*/




/*-----Ejercicio 9

$peliculas = array('Capitan America','Wolverine','Spider man','Iron Man','Venon');
for ($i=0; $i <count($peliculas) ; $i++) { 
    echo $peliculas[$i] . "<br>";
}
------*/


/*-----Ejercicio 8 

function getName($name)
{
    $text = "My name is: ". $name;
    return $text;
}

function fullName($name,$lastName)
{
    $var = getName($name) . $lastName;
    return $var;
}

echo fullName("Ricardo ","Garrido");


------*/



/*-----Ejercicio 7


for ($i=1; $i <=10 ; $i++) { 
    echo "<td>";
        for ($x=1; $x <=10 ; $x++) { 
            echo "$i x $x =".($i*$x)."<br>";
        }
    echo "</td>";
}
------*/




/*----- Ejercicio6
$numero1 = $_GET['numero1'];
$numero2 = $_GET['numero2'];

echo "La suma de los 2 números es: " . ($numero1+$numero2)."<br>";
echo "La resta de los 2 números es: " . ($numero1-$numero2)."<br>";
echo "La multiplicación de los 2 números es: " . ($numero1*$numero2)."<br>";
echo "La división de los 2 números es: " . ($numero1/$numero2)."<br>";

------*/



/*-----Ejercicio 5
for ($i=0; $i <=40 ; $i++) { 
    $cuadrado = $i * $i;
    echo "El cuadrado de $i es: $cuadrado<br>";
}

------*/

/*-----Ejercicio 4
for ($i=1; $i <101 ; $i++) { 
    if($i%2 == 0){
        echo $i . "<br>";
    }
}

for ($i=1; $i <101 ; $i++) { 
    if($i%2 != 0){
        echo $i . "<br>";
    }
}
------*/

/*-----Ejercicio 3

if (isset($_GET['numero'])) {
    echo $_GET['numero']. ' x  1' . ' = ' . ($_GET['numero']*1) . '<br>';
    echo $_GET['numero']. ' x  2' . ' = ' . ($_GET['numero']*2) . '<br>';
    echo $_GET['numero']. ' x  3' . ' = ' . ($_GET['numero']*3) . '<br>';
    echo $_GET['numero']. ' x  4' . ' = ' . ($_GET['numero']*4) . '<br>';
    echo $_GET['numero']. ' x  5' . ' = ' . ($_GET['numero']*5) . '<br>'; 
}else {
    echo 'La variable numero no existe';
}

------*/





/*-----Ejercicio 2
GOTO

goto marca;

echo 'Uno';
echo 'Dos';
echo 'Tres';
echo 'Cuatro';

marca: 
echo "Me salte cuatro echos";

------*/ 

/*----- Ejercicio 1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="recibir.php" method="GET">
        <label for="">Nombre</label><input type="text" name="nombre">
        <label for="">Apellido</label><input type="text" name="apellido">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>  
var_dump($_GET); //checa lo que te imprime

------*/   


/*-----Apuntes
CONSTANTES
-Las constantes se muestran sin el signo de dolar

VARIABLES DE SERVIDOR
$_SERVER['SERVER_ADDR'];
$_SERVER['SERVER_NAME'];
$_SERVER['SERVER_SOFTWARE'];
ETC

FUNCIONES PREDEFINIDAS MAS USADAS
var_dump();
date(d-m-Y);//Checar los formatos
sqrt();//Saca la raiz cuadrada
rand()//Genera un número aleatorio entre 2 cifras
pi(); genera el 3.1416
round()//redondea un número y te le puedes indicar cuantos decimales quieres que redonde (7.435,2)
gettype();//Te indica que tipo de valor es la variable
is_string();//Comprueba si la variable es una cadena de texto
is_float();//Comprueba si la variable es un número flotante
isset();//Comprueba si la variable existe
trim();//Quita los espacios al principio y al final
unset();//Eliminar una variable
empty();//Checa si la variable tiene contenido
strlen();//Cuenta los caracteres que hay en la variable
strpos($var,"palabra");//Busca donde esta una palabra dentro de una frase que es una cadena de texto, 
str_replace(palabra que reemplazaras, palabra nueva, $variable);//reemplaza una variable
strtolower();//pone todas las palabras del string en minusculas
strtoupper();//Pone todas las palabras del string en mayúsculas

include-require: es mas recomendable usar "require_once'';" que include, include_once y require, por que es el mas estricto

------*/

/*----EJERCICIOS
1)un formulario que envíe datos y su archivo que los muestre
2)Ejercicio con GOTO
3)Tabla de multiplicar usando un if y un isset y poniendo en la URL el valor de la tabla de multiplicar y recibiendolo con $_GET
4)Numeros pares del 1 al 100 e impares
5)Sacar el cuadrado de los número del 1-40
6)Una calculadora que sume, reste,multiplique y divida pasandole los números por $_GET
7)Tablas de multiplicar usando 2 for, uno dentro de otro
8)Guardando una funcion en una variable, dentro de otra funcion
9)Mostrar los valores de un array con un for
10)Hacer un array multidimensional normal y otro asociativo LISTO

------*/
