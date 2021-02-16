import padre, { pi, password, saludar } from './constantes.js';
import { aritmetica as calculos } from './aritmetica.js';
console.log(pi);
console.log(calculos.sumar(3, 4));
saludar();
console.log(password);
//---------------------------------------------------------------

let hijo = new padre;
//Ejecutando el objeto
hijo;