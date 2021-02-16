const cadenaArreglo = (cadena = "", separador = undefined) =>
    (!cadena) ?
    console.warn("NO ingresaste una cadena de texto") :
    (separador === undefined) ?
    console.warn("No ingresaste el caracter que usaras para separar") :
    console.info(cadena.split(separador));

cadenaArreglo("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", " ");
//Otra forma de separarlo
cadenaArreglo("Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre", ",");

cadenaArreglo("Enero-Febrero-Marzo-Abril-Mayo-Junio-Julio-Agosto-Septiembre-Octubre-Noviembre-Diciembre", "-");