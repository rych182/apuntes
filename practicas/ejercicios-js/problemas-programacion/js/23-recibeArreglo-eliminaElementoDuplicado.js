const quitarDuplicados = (arr = undefined) => {
        if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

        if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

        if (arr.length === 0) return console.error("El arreglo está vacío");

        if (arr.length === 1) return console.warn("El arreglo debe tener al menos 2 elementos");

        return console.info({
            original: arr,
            //value=el valor que voy a evaluar, index= posicion, self hace referecia al mismo arreglo
            //self.indexOf(value) === index compara el valor con la posición que estoy evaluando
            sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index)
                /*
                    OTRA MANERA DE RESOLVER
                    El objeto set no permite que haya duplicaciones, este tema viene después de Ajax en los temás de John Mircha
                    return console.info({
                        original: arr,
                        sinDuplicados: [... new Set(arr)]
                    })
                */

        })
    }
    //un objeto iterable es aquel que se puede recorrer como un array, cadena de texto, objeto
quitarDuplicados();
quitarDuplicados({});
quitarDuplicados(2);
quitarDuplicados([]);
quitarDuplicados([2]);
quitarDuplicados(true);
quitarDuplicados([2, "x", 2]);
quitarDuplicados([2, "x", 2, 10, 10, tru, true]);