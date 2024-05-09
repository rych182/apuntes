// el ./ quiere decir "busca, apartir de la carpeta donde estoy", si no se lo pones, buscara desde la raiz
//un import es un objeto destructurado
import {PI,saludar,name,objeto,cajas,texto} from './constantes.js';
//el "as" es para ponerle un alias a la función exportada, por si da pereza escribir mucho
import Saludar3, { operaciones as ope,password } from "./aritmetica.js";

//Puedes exportar lo que necesites, no tienes que importar todo el código de un archivo
name
console.log(PI);
console.log("HOla mundo")
console.log(saludar)
name()
console.log(objeto)
console.log(cajas)
console.log(texto)
console.log(ope.sumar(3,4));
console.log(ope.restar(3,4));
//saludar2();
console.log(password)
let saludo = new Saludar3();
saludo;
