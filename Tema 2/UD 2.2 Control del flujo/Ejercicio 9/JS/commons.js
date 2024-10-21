
var num;

do {
  num = parseInt(prompt("Ingrese un número entero positivo:"));
} while (isNaN(num) || num <= 0);

for (let i = 1; i <= num; i++) {
    let asterisco = "";
    for (let j = 1; j <= i; j++) {
        asterisco += "* ";
    }
    document.write(asterisco + "<br>"  );
}