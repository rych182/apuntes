const nombreCompleto = (firstName, ...apellidos) => {
    return `${firstName} ${apellidos.join(' ')}`;
};
const fulano = nombreCompleto("ric", "garrido", "cruz", "Leon subieta");
console.log(fulano);
export {};
//# sourceMappingURL=10-parametroRest.js.map