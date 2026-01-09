let nombre = "ric";
//Prueba cambiando el string de la funcion a otro dato y pon el curso en la variable "caja" para que veas como dice
//El signo ? significa que el parametro es opcional
//No puedes poner un 3er parametro si el segundo parametro lo pusiste como opcional "?" A MENOS QUE lo pongas por defecto
let saludar = (nombre, apellido, apellidoMaterno = "cruz") => {
    if (apellidoMaterno) {
        return ` ${nombre} ${apellido || "sin  apellido"} ${apellidoMaterno} `.toUpperCase();
    }
    else {
        return ` ${nombre} ${apellido || "sin  apellido"} `;
    }
};
let valor;
window.saludar = saludar;
//este es un error y es por esto que no se debe usar "any"
//let caja:string = saludar(valor,"Garrido");
let caja = saludar(nombre, "garrido");
console.log(caja);
export {};
/*
Caracteristicas de las funciones den typescript
1-cuando tipeas los "parametros" se vuelven "obligatorios"
2-En un parametro puedes especificar 2 tipos de datos a recibir
3-El "signo de interrogacion" sirve para decir que ese parametro puede ser "opcional"
4-No puedes poner un 3er parametro si el segundo parametro lo pusiste como opcional "?"


*/ 
//# sourceMappingURL=10-function.js.map