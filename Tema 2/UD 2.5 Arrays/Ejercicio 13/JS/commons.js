/* Dado un array de usuarios donde cada usuario tiene un nombre y una edad, obtener los usuarios que tienen
18 años o más. Luego, crear un array de nombres de estos usuarios en formato "Nombre (Edad años)".

Muestra el resultado en la consola.  */

let usuarios = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Maria", edad: 18 },
  { nombre: "Pedro", edad: 30 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 19 },
];

let usuariosMayoresEdad = usuarios.filter((usuario) => usuario.edad >= 18);

let nombresMayoresEdad = usuariosMayoresEdad.map((usuario) =>
  `${usuario.nombre} (${usuario.edad} años)` // String Template.
);

console.log(nombresMayoresEdad.join(', ')); // Imprime: "Maria (18 años)", "Pedro (30 años)"
