let texto = "Hola mundo";
let amigos = ['Nacho', 'Urrutia', 'Jessica', 'Lau'];

console.log(amigos.findIndex(amigo => amigo === 'Jessica'));
/*
Checa con que letra comienza la palabra dentro de la variable
console.log(`¿'${texto}' empieza con la letra 'p'?`, texto.startsWith('p'));

Checa con que letra termina la palabra y aparte la convierte a minúscula
console.log(`¿ ${texto} termina con la letra "o"?`, texto.toLocaleLowerCase().endsWith('o'));

.includes() Encuentra la palabra dentro de un array
console.log(`¿ ${amigos} incluye la palabra "Lau"?`, amigos.includes('Lau'));

Nos devuelve El primer elemento de un arreglo que "cumpla una condición"
console.log(amigos.find(amigo => amigo.length > 6));

Encuentra la posición en el arreglo en el que se encuentra el dato que estás buscando
console.log(amigos.findIndex((amigo) => {
    return amigo === 'Jessica';
}));
*/