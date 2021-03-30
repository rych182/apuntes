const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (const num of arr) {
        if (typeof num !== "number") return console.error(`El valor "${num}, no es un número`);
    }

    return console.info(
        //reduce recibe una función 
        //se acumulara lo contado en "total", num es el elemento que en ese momento está recorriendo y arr que es el arreglo
        arr.reduce((total, num, index, arr) => {
            //5+7=12+3=15 etc
            total += num;
            //si index tiene 5 cajitas y es igual a arr[0,1,2,3,4] -1 quiere decir que ya recorrio todo el arreglo 
            if (index === arr.length - 1) {
                return `El promedio de ${arr.join(" + ")} es ${total/arr.length}`;
            } else {
                //cuando todavía no haya llegado al último dígito para sacar el promedio
                return total;
            }
        })
    )
}

promedio();
promedio(2);
promedio(true);
promedio({});
promedio([]);
promedio(["hola", true]);
promedio([2, 3, 4, false]);
promedio([2, 4, 5, 6, 7, 8, 9]);