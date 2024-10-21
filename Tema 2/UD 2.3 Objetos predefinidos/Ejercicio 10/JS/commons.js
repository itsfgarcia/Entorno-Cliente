var resultado = 0;
var suma = [];

for (let i = 0; i < 10; i++) {
    let numeroAleatorio = Math.floor((Math.random() * 20) + 1);
    suma.push(numeroAleatorio);
    resultado += numeroAleatorio;
}

document.write("La suma de los numeros " + suma + " es " + resultado);