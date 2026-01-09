const nombreCompleto = (firstName: string, ...apellidos:string[]) =>{
    return `${firstName} ${apellidos.join(' ')}`
}
const fulano = nombreCompleto("ric","garrido","cruz","Leon subieta")
console.log(fulano);
