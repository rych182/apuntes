define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const a = 10;
    let b = 10;
    function name(msg) {
        console.log(msg);
    }
    (function () {
        let a = 10;
        console.log(a);
    })();
});
define("functions/10-function", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let nombre = "ric";
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
    let caja = saludar(nombre, "garrido");
    console.log(caja);
});
define("functions/11-parametroRest", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const nombreCompleto = (firstName, ...apellidos) => {
        return `${firstName} ${apellidos.join(' ')}`;
    };
    const fulano = nombreCompleto("ric", "garrido", "cruz", "Leon subieta");
    console.log(fulano);
});
define("functions/12-reasignarValor", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sumar = (a, b) => a + b;
    const saludar = (name) => `Hola ${name}`;
    const texto = () => `hola mundo`;
    let miFuncion;
    miFuncion = texto;
    console.log(miFuncion());
});
define("functions/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function sumar(a, b) {
        return a + b;
    }
    const contar = (heroes) => {
        return heroes.length;
    };
    const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
    contar(superHeroes);
    const llamarBatman = (llamar = true) => {
        if (llamar) {
            console.log("Batiseñal activada");
        }
    };
    llamarBatman();
    const unirheroes = (...personas) => {
        return personas.join(", ");
    };
    const noHaceNada = (numero, texto, booleano, arreglo) => { };
    let noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
});
define("objetos/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    const villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: 200,
            mutante: true
        }];
    const charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
});
define("objetos/objetos", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let persona = {
        nombre: "ric",
        edad: 29,
        amigos: ["urrutia", "nacho", "diego"],
        getNombre() {
            return this.nombre;
        }
    };
});
define("objetos/type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let myCustomVariable = "fulano";
    console.log(myCustomVariable);
    myCustomVariable = {
        nombre: "ric",
        edad: 49,
        amigos: ["urrutia", "nacho"]
    };
});
define("tipos/01-strings", ["require", "exports"], function (require, exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    let nombre = `ric`;
    console.log(`Mi nombre es ${nombre.toUpperCase()}.`);
    console.log(((_a = nombre[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || `No hay dato`);
});
define("tipos/02-numbers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let avengers = 10;
        console.log(avengers);
        const villanos = 20;
        if (avengers < villanos) {
            console.log("estamos en problemas");
        }
        else {
            console.log("nos hemops salvado");
        }
    })();
});
define("tipos/03-boleanos", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let isSuperman = true;
        let isBatman = false;
        console.log(isSuperman);
    })();
});
define("tipos/04-arrays", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let numeros = [1, 2, 3, 4, 5, "6", 7, 8, 9];
    let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let personas = ["ric", "moni", "loboriginal"];
    numeros.push("hola");
    console.log(numeros);
    numeros2.forEach((dato) => {
        console.log(dato);
    });
    personas.forEach((dato) => {
        console.log(dato.toUpperCase());
    });
});
define("tipos/05-any", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let edad = 123;
    let monto = 123.4567;
    let variable2;
    edad = "lo que sea";
    console.log(edad.charAt(0));
    console.log(monto.toFixed(2));
    console.log(monto.toFixed(2));
    console.log(monto.toFixed(2));
});
define("tipos/06-enums", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["medium2"] = 2] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium2;
    console.log(currentAudio);
    console.log(AudioLevel);
});
define("tipos/07-tuples", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const persona = ["ric", 38, true];
    persona[0] = "raul";
    persona[1] = 50;
    console.log(persona);
});
define("tipos/08-void", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const saludo = () => {
        return;
    };
    const a = saludo();
    console.log(a);
});
define("tipos/09-never", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const error = (message) => {
        throw new Error(message);
    };
    error("Hola mundo");
    console.log("hello world");
});
define("typescript-experimentos/tipar-datos/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        const batman = 'Bruce';
        const superman = 'Clark';
        const existe = false;
        const parejaHeroes = [batman, superman];
        const villano = ['Lex Lutor', 5, true];
        const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
        let fuerza;
        (function (fuerza) {
            fuerza[fuerza["acuaman"] = 0] = "acuaman";
            fuerza[fuerza["batman"] = 1] = "batman";
            fuerza[fuerza["Flash"] = 5] = "Flash";
            fuerza[fuerza["superman"] = 100] = "superman";
        })(fuerza || (fuerza = {}));
        const fuerzaFlash = fuerza.Flash;
        const fuerzaSuperman = fuerza.superman;
        const fuerzaBatman = fuerza.batman;
        const fuerzaAcuaman = fuerza.acuaman;
        function activar_batiseñal() {
            return 'activada';
        }
        function pedir_ayuda() {
            console.log('Auxilio!!!');
        }
        const poder = '100';
        const largoDelPoder = poder.length;
        console.log(largoDelPoder);
        let enumeracion;
        (function (enumeracion) {
            enumeracion[enumeracion["a"] = 10] = "a";
            enumeracion[enumeracion["b"] = 11] = "b";
            enumeracion[enumeracion["c"] = 9] = "c";
            enumeracion[enumeracion["d"] = 10] = "d";
        })(enumeracion || (enumeracion = {}));
    })();
});
//# sourceMappingURL=main.js.map