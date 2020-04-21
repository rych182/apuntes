const hoy = new Date();
let dia = hoy.getDay();
console.log(dia);
/*
if (dia === 0) {
    console.log(`Hoy es DOmingo`);
} else {
    console.log(`Es un día entre Lunes y sábado`);
}
*/
if (dia === 0) {
    console.log(`Es Domingo`);
} else if (dia === 1) {
    console.log(`Es Lunes`);
} else if (dia === 2) {
    console.log(`Es Martes`);
} else if (dia === 3) {
    console.log(`Es Miercoles`);
} else if (dia === 4) {
    console.log(`Es Jueves`);
} else if (dia === 5) {
    console.log(`Es VIernes`);
} else if (dia === 6) {
    console.log(`Es Sábado`);
}