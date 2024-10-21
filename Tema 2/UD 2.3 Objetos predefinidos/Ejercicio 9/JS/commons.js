var aleatorio = Math.random();

var aleatorio = (aleatorio * 10) + 1;

aleatorio = Math.trunc(aleatorio);

document.write(aleatorio);

var numero = parseInt(prompt("Introduce un número entre 1 y 10 e intenta adivinar!"));

if (numero === aleatorio) {
    alert("Felicidades, has acertado!");
} else {
    alert("Lo siento, no has acertado. El número era: " + aleatorio);
}

