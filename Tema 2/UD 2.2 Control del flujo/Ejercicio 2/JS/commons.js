do {
    var num = parseInt(prompt("Ingresa un número entre 0 y 23"));

} while (isNaN(num) || num < 0 || num > 23);

if (num >= 6 && num <= 11) {
    document.write("Buenos días");
} else if (num >= 12 && num <= 20) {
    document.write("Buenas tardes");
} else if (num >= 21 || (num >= 0 && num < 6)) {
    document.write("Buenas noches");
}