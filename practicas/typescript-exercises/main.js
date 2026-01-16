var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("let-var", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let name = "hola mundo";
    console.log(name);
});
define("destructuracion", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const persona = {
        nombre: "ric",
        apellido: "garrido",
        edad: 100,
        estadoCivil: true
    };
    const imprimirPersona = (_a) => {
        var { nombre } = _a, restoPropiedades = __rest(_a, ["nombre"]);
        console.log(nombre, restoPropiedades);
    };
    imprimirPersona(persona);
    const mascota = ["doky", 15, false];
    const [nombre, edad, vivo] = mascota;
    console.log(nombre);
});
define("for-of", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("index", ["require", "exports", "let-var", "destructuracion", "for-of"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=main.js.map