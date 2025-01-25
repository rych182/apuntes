/*

Ejercicio 0: Hacer un programa que use la función callback .find() y use promesas, el programa debe de buscar los id dentro de los objetos del
array(toma de ejemplo el callback hell)

const posts = [
  {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];


// Función para encontrar un post por ID usando un callback
function findPostById(id, callback) {
  const post = posts.find((item) => item.id === id);

  // Simulación de asincronía
  setTimeout(() => {
    if (post) {
      callback(null, post); // Primer argumento es null para indicar que no hay error
    } else {
      callback("No encontrado por id: " + id, null); // Primer argumento es el error
    }
  }, 1000);
}


// USO DE CALLBACK HELL
findPostById(1, (error, post1) => {
  if (error) {
    console.log(error);
  } else {
    console.log(post1);

    findPostById(2, (error, post2) => {
      if (error) {
        console.log(error);
      } else {
        console.log(post2);

        findPostById(3, (error, post3) => {
          if (error) {
            console.log(error);
          } else {
            console.log(post3);
            console.log("Fin de las búsquedas con callback hell");
          }
        });
      }
    });
  }
});


//Con la "promesa" no te tienes que estar inventando el NULL

const findPostById = (id) => {
  const post = posts.find( (item) => item.id === id );

  //devolver la promesa

  return new Promise( (resolve,reject) => {
    //resolve

    if (post) {
      resolve(post)
    } else {
      reject("No encontrado por id: " + id)
    }

  })
}

findPostById(1)
  .then( (post) => console.log(post) )
  .catch( (err) => console.log(err) )
  .finally( () => console.log("fin de la promesa") )

findPostById(2)
  .then( (post) => console.log(post) )
  .catch( (err) => console.log(err) )
  .finally( () => console.log("fin de la promesa") )

findPostById(3)
  .then( (post) => console.log(post) )
  .catch( (err) => console.log(err) )
  .finally( () => console.log("fin de la promesa") )



*/