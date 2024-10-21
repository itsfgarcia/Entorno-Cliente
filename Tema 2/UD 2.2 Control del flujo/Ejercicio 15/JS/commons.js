
let base = parseInt(prompt("Introduce la base del rectángulo:"));
let altura = parseInt(prompt("Introduce la altura del rectángulo:"));

for (let i = 1 ; i <= altura ; i++) {
    for (let j = 1 ; j <= base ; j++) {
        if (j === 1 || j === base || i === 1 || i === altura) {
            document.write(" * ");
        } else {
            document.write("&nbsp&nbsp&nbsp");
        }
    }
    document.write("<br>");
}

// Por algún motivo, el código no funciona sin usar '&nbsp' en lugar de un espacio en blanco como en otros ejercicios.
