

    let nombre: string= "ric"
    //Prueba cambiando el string de la funcion a otro dato y pon el curso en la variable "caja" para que veas como dice
    //El signo ? significa que el parametro es opcional
    let saludar = (nombre:string, apellido?:(string|boolean)):string =>{
        return ` ${nombre} ${apellido || "sin  apellido"} `
    }
    let valor:any;
    //este es un error y es por esto que no se debe usar "any"
    //let caja:string = saludar(valor,"Garrido");
    let caja:string = saludar(nombre);

console.log(caja)

/*
Caracteristicas de las funciones den typescript
1-cuando tipeas los "parametros" se vuelven "obligatorios"
2-En un parametro puedes especificar 2 tipos de datos a recibir
3-El "signo de interrogacion" sirve para decir que ese parametro puede ser "opcional"
4-


*/