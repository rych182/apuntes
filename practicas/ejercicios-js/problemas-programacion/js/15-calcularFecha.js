const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No ingresaste la fecha");

    if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365;
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

    return (Math.sign(aniosHumanos) === -1) ?
        console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
        //cuando salga positivo
        :
        (Math.sign(aniosHumanos === 1)) ?
        console.info(`Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`) :
        console.info(`Estamos en el año actual ${fecha.getFullYear()}`)
}
calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date());
calcularAnios(new Date(1984, 4, 23));
calcularAnios(new Date(2084, 4, 3));
calcularAnios();


/*
let ahorro = 12500;
let crecimiento = 1.01;
let resultado1 = ahorro * crecimiento;
let meses = 2;

for (let i = 0; i < meses; i++) {
    resultado1 = ((resultado1 + ahorro) * crecimiento)
}

console.log(resultado1);
*/