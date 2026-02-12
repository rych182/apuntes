type amigos = {
    name:string,
    lastName: string;
}

const primaria:amigos = {
    name: 'Raul',
    lastName: "Garcia"
}

const secu:amigos = {
    name: 'Daniel',
    lastName: "Urrutia"
}

const prepa:amigos = {
    name: 'Nacho',
    lastName: "Loaeza"
}

const uni:amigos = {
    name: 'steve',
    lastName: "Good"
}

const compas: amigos[]=[primaria,secu,prepa,uni]
for (const compa of compas) {
    console.log(compa.name + compa.lastName);
    
}