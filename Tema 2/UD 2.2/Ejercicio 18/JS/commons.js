
do { 
    var num = parseInt(prompt("Introduce un número: "));
    var num2 = parseInt(prompt("Introduce otro número: "));
} while ((isNaN(num)) || (isNaN(num2)) || (num <= 0) || (num > 10) || (num2 <= 0) || (num2 > 10));

for (var i = num; i <= num2; i++) {
    document.write(i + "<br>");
}

document.write("<br>");

// Excluyendo el nº 1 y el nº 10. 

for (var j = num; j <= num2; j++) {
    if (j!=1 && j!=10) {
        document.write(j + "<br>");
    }
}