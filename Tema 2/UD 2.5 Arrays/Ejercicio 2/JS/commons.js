/* Crear un array con 3 palabras que se introducirán por mensajes al usuario palabra a palabra (3 veces). 

Si cancela se introducirá una cadena vacía en el array.

Escribir por consola y por pantalla, el array inicial y el array filtrando sólo las palabras que comiencen por "C" ignorando si está en min o mayus.

Mostrar las palabras separadas por coma.

Si no hay ninguna palabra que comience por "C" mostrar "No hay ninguna palabra que comience por "C". */

var palabras = [];

for (var i = 0; i < 3; i++) {
    var palabra = prompt("Introduce una palabra (o cancela para salir): ");
    if (palabra === "") {
        break;
    }
    palabras.push(palabra);
}

var palabrasConC = palabras.filter(function(palabra) {
    return palabra.toLowerCase().startsWith("c");
});

// Por consola: 

console.log("Contenido del array:", palabras.join(","));

if (palabrasConC.length === 0) {
    console.log("No hay ninguna palabra que comience por 'C'");
} else {
    console.log("Palabras que comienzan por 'C':", palabrasConC.join(", "));
}

// Por pantalla con innerHTML:

var salida = document.getElementById("salida");

salida.innerHTML = "Contenido del array: " + palabras.join(", ") + "<br>";

if (palabrasConC.length === 0) {
    salida.innerHTML += "No hay ninguna palabra que comience por 'C'";
} else {
    salida.innerHTML += "Palabras que comienzan por 'C': " + palabrasConC.join(", ");
}


