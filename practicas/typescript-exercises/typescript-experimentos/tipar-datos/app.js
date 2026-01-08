(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo// CASTING
    const poder = '100';
    //Aquí hacemos el "casting"
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    //valor de D? Es 10 por que C vale 9 y el siguiente número es 10, no importa que se repita
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
})();
export {};
//# sourceMappingURL=app.js.map