/* Dado un array de objetos de libros, donde cada libro tiene un título y un número de páginas, obtener los
libros que tienen más de 300 páginas. Luego, extraer solo los títulos de estos libros. Finalmente, imprimir
los títulos en la consola.   */

let libros = [
  { titulo: "Libro 1", numeroPaginas: 350 },
  { titulo: "Libro 2", numeroPaginas: 250 },
  { titulo: "Libro 3", numeroPaginas: 400 },
  { titulo: "Libro 4", numeroPaginas: 320 },
];

let librosLargos = libros.filter((libro) => libro.numeroPaginas > 300);

let titulosLibros = librosLargos.map((libro) => libro.titulo);

console.log(titulosLibros.join(', ')); // Imprime: "Libro 1", "Libro 3".

