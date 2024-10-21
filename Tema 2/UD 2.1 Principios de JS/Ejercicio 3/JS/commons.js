var respuesta;

do {
    respuesta = prompt("¿Eres mayor de edad?");
}

while (respuesta.toLowerCase()!== "si" || respuesta.toLowerCase()== "no");

console.log(respuesta);

var edad;

edad = prompt("¿Cuántos años tienes?");

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}


