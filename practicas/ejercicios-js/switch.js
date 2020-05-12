//switch se recomienda usarse cuando hay muchas condiciones


/**
 
EJERCICIO 1
const dia = 5;

switch (dia) {
    case 0:
        console.log("HOy es Domingo");
        break;
    case 1:
        console.log("HOy es Lunes");
        break;
    case 2:
        console.log("HOy es Martes");
        break;
    default:
        console.log("Es otro día");
}

EJERCICIO 2
Cual es el metodo de pago usando switch
let metodoPago = "bitcoins";
switch (metodoPago) {
    case "efectivo":
        console.log(`El metodo de pago es ${metodoPago}`);
        break;
    case "cheque":
        console.log(`El metodo de pago es ${metodoPago}`);
        break;
    case "tarjeta":
        console.log(`El metodo de pago es ${metodoPago}`);
        break;
    default:
        console.log(`El metodo de pago es ${metodoPago}`);
        break;
}

Ejercicio 3
Imprimir que més es usando el objeto Date y la función getMonth
let mes;
switch (new Date().getMonth()) {
    case 0:
        mes = "Enero";
        break;
    case 1:
        mes = "Febrero";
        break;
    case 2:
        mes = "Marzo";
        break;
    case 3:
        mes = "Abril";
        break;
    case 4:
        mes = "Mayo";
        break;
    case 5:
        mes = "Junio";
        break;
    case 6:
        mes = "Julio";
        break;
    case 7:
        mes = "Agosto";
        break;
    case 8:
        mes = "Septiembre";
        break;
    case 9:
        mes = "Octubre";
        break;
    case 10:
        mes = "Noviembre";
        break;
    case 11:
        mes = "Diciembre";
        break;
    default:
        break;
}
console.log(`Este més es ${mes}`);
 */