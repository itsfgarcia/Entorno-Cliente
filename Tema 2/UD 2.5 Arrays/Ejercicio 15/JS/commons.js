/* . Tienes un array de objetos que representan estudiantes. Cada objeto de estudiante tiene un nombre y un
array de calificaciones. Utiliza las funciones de arrays para realizar las siguientes tareas:

1. Calcular el promedio de calificaciones para cada estudiante. Para cada estudiante, calcular su
media. Debe devolver un array con objetos con el nombre y la media. Imprimir.

2. Del array obtenido en el punto 1, filtrar los estudiantes que tienen un promedio superior a 7.

3. Imprimir el nombre de los estudiantes que cumplen con el criterio de promedio anterior. */

let estudiantes = [
  { nombre: "Fran", calificaciones: [8, 9, 7, 6, 10] },
  { nombre: "Laura", calificaciones: [7, 8, 9, 10, 9] },
  { nombre: "Manuel", calificaciones: [6, 7, 8, 9, 10] },
];

// 1. Calcular promedio notas de cada alumno:

let promedios = [];

for (let estudiante of estudiantes) {
  let suma = 0;

  for (let calificacion of estudiante.calificaciones) {
    suma += calificacion;
  }


  let promedio = suma / estudiante.calificaciones.length;

  promedios.push({ nombre: estudiante.nombre, promedio });

}

// Imprimir el array promedios como un string con el nombre y el promedio:

console.log(promedios.map(alumno => `${alumno.nombre}: ${alumno.promedio}`).join(", ")); // String Template.

/* ¿ Por qué se hace así ? : 
1. Se utiliza el método map para trabajar sobre cada objeto estudiante del array y calcular su promedio.
2. Se crea un nuevo array llamado promedios, donde cada elemento es un objeto con el nombre y el promedio de un estudiante.
3. Se utiliza el método join(", ") para concatenar todos los nombres y promedios en un solo string, separados por comas. */


