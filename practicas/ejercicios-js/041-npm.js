/*
Comandos:
npm init (para comenzar)
npm init -y (para ponerle si a todo, como si dieras puros enter, generara el archivo package.json)
npm run test echo (te imprime el mensaje que está en la sección de test)
npm install nombreDelPaquete(Instalar paquetes)
npm i nombreDelPaquete(instalar un paquete de manera abreviada)
npm remove nombreDelPaquete(para remover paquetes)
npm i nombreDelPaquete --save-dev(instalas dependencias de desarrollo)
npm i -D nombreDelPaquete(instalas dependencias de desarrollo con una sintaxis más corta)
npm run dev, (hace que corra el proyecto en local)
npm i g nombreDelPaquete(lo instala en toda tu maquina)
npm install react@16.14.0(instalas una versión específica del paquete)
npm run build(te crea la carpeta que vas a subir a servidor)

scripts
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "echo , estoy empezando a correr el proyecto, pero en realidad solo estoy escribiendo texto",
    "dev": "echo, iniciando el servidor de desarrollo"
  },

NODE MODULES
La carpeta node_modules es donde se almacenan todas las dependencias de un proyecto de Node.js.
Cuando instalas paquetes mediante npm (Node Package Manager) o yarn,
estos paquetes se descargan y se guardan en esta carpeta. 
Básicamente, contiene todas las bibliotecas externas que tu proyecto necesita para funcionar,
así como sus dependencias, organizadas en subcarpetas.

¿Cómo funciona?
    
Paquetes principales: Cuando instalas un paquete directamente (por ejemplo, npm install express)
,se crea una subcarpeta dentro de node_modules con el nombre del paquete. 
En este caso, se crearía una carpeta llamada express dentro de node_modules.

Dependencias de dependencias: Los paquetes que instalas también pueden depender de otros paquetes,
por lo que estos paquetes secundarios también se instalan en la carpeta node_modules,
formando una especie de jerarquía de dependencias.

Estructura plana: Con la versión moderna de npm,
se intenta tener una estructura lo más plana posible dentro de node_modules. 
Esto significa que, en lugar de crear muchas subcarpetas anidadas,
npm instala las dependencias en un nivel superior si no hay conflictos de versiones. Sin embargo, 
en algunos casos puede haber subcarpetas anidadas si diferentes paquetes requieren diferentes 
versiones de una misma dependencia.


¿Qué hay dentro de cada subcarpeta?

package.json: Define las propiedades del paquete, como su nombre, versión, dependencias y scripts.
Archivos de código: El código fuente del paquete.
Archivos adicionales: documentación, tests u otros archivos relacionados, como README.md,
archivos de configuración, etc.

¿Por qué puede ser tan grande la carpeta node_modules?

Esto se debe a la cantidad de dependencias y subdependencias que un proyecto puede tener.
Cada paquete puede depender de otros paquetes, y así sucesivamente, 
lo que resulta en una estructura compleja y extensa.

Existe una sección de scripts dentro dl archivo "package.json" que sirve para correr tu proyecto ya sea en modo desarrollo
o en modo de producción.

PACKAGE-LOCK.JSON
RESUMEN:
Es fundamental para asegurar que las versiones de las dependencias sean consistentes,
lo que ayuda a evitar errores relacionados con actualizaciones involuntarias de paquetes. 
Es una parte clave para mantener la estabilidad y 
reproducibilidad de las instalaciones de dependencias en un proyecto de Node.js.

-aunque otras personas trabajen en el mismo proyecto o lo instalen en diferentes máquinas, 
se usarán exactamente las mismas versiones de las dependencias
-Bloquea versiones específicas de las dependencias
-Esto significa que, aunque otras personas trabajen en el mismo proyecto o lo instalen en diferentes máquinas, 
se usarán exactamente las mismas versiones de las dependencias,estas versiones a menudo son especificadas con rangos,
Estos rangos permiten que npm instale versiones más recientes, siempre que no rompan la compatibilidad 
-también incluye las versiones específicas de todas las subdependencias

Su propósito principal es asegurar que las instalaciones de dependencias sean determinísticas y reproducibles
en cualquier entorno. 


Qué hace package-lock.json?

    Bloquea versiones específicas de las dependencias: 
    Aunque el archivo package.json de tu proyecto define qué paquetes necesitas y cuáles son sus versiones,
    estas versiones a menudo son especificadas con rangos (por ejemplo, "^1.2.3" o "~1.2.3"). 
    Estos rangos permiten que npm instale versiones más recientes, siempre que no rompan la compatibilidad de acuerdo al versionado semántico.

    El archivo package-lock.json resuelve estos rangos y guarda las versiones exactas de las dependencias que se instalaron. Así, la próxima vez que alguien ejecute npm install, npm utilizará las versiones exactas que están registradas en este archivo, en lugar de descargar potencialmente una nueva versión dentro del rango permitido.

    Incluye información sobre todas las dependencias:
    también incluye las versiones específicas de todas las subdependencias

    Mejora la consistencia en las instalaciones: 
    Cuando varias personas colaboran en un proyecto,
    el package-lock.json asegura que todos estén trabajando con las mismas versiones de las dependencias,
    lo que evita que puedan ocurrir problemas o bugs debidos a diferentes versiones de bibliotecas.
    
    Acelera las instalaciones: 
    El package-lock.json contiene un registro completo de las fuentes (URLs)
    de donde se descargaron las dependencias. 
    Esto permite que npm no tenga que resolver nuevamente las versiones ni las dependencias,
    agilizando la instalación.

-¿Debería subir el archivo package-lock.json al repositorio?

¡Sí! Es recomendable incluir el archivo package-lock.json en el control de versiones 
(por ejemplo, en Git). Esto garantiza que cualquier persona que clone tu repositorio
 e instale las dependencias reciba exactamente las mismas versiones de los paquetes.

  
 REMOVER Y AGREGAR MANUALMENTE PAQUETES EN PACKAGE.JSON

 -Si tu borras manualmente las dependencias del archivo "package.json"y pones "npm install" ó "npm i"
 borrará los archivos y si no tiene los paquetes pero vienen en el archivo "package.json"
 los instalará
 
 
 DEPENDENCIAS DE DESARROLLO:
 -SOlo se utilizan durante el desarrollo de la aplicación 
    
 
 GITIGNORE

 Creando el archivo .gitignore le puedes decir que es lo que quieres que ignore para
 que no lo registre y pones "node_modules"
 
 */