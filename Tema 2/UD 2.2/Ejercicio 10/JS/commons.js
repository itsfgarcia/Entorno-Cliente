
for (var i = 5; i >= 1; i--) {
    var nums = "";
    for (var j = i; j >= 1; j--) {
        nums += j;
    }
    document.write(nums + "<br>"  );
}


document.write("<br>");

// Otra forma de hacerlo usando todos los números desde el que pidas al usuario

var num = parseInt(prompt("Ingrese un número entero positivo:"));

for (var x = num; x >= 1; x--) {
    var nums = "";
    for (var z = x; z >= 1; z--) {
        nums += z;
    }
    document.write(nums + "<br>" );
}