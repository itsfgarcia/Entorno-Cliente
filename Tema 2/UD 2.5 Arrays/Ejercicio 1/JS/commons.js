const arr = [2,3,4,5,0];

// 1. Escribir por consola la suma del array con el método foreach y funciones flechas.

let suma = 0;
arr.forEach(num => suma += num);
console.log("Suma con forEach y funciones flechas: ", suma);

// 2. Escribir por consola la media del array.

let media = suma / arr.length;
console.log("Media: ", media);

// 3. Obtener otro array con el triple de cada elemento del array.

let triple = arr.map(num => num * 3);
console.log("El triple: ", triple);

// 4. Obtener el mismo array con el triple de cada elemento del array.

let triple2 = arr.map(x => x * 3);
console.log("El triple con map y arrow function: ", triple2);