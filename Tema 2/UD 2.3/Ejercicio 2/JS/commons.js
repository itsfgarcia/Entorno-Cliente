var hoy = new Date();

var finCurso = new Date(2025, 5, 30);

var diasRestantes = Math.floor((finCurso - hoy) / (1000 * 60 * 60 * 24)); // Métodos Math página 3 pdf 2.3

document.write("Faltan " + diasRestantes + " días para el fin del curso.");
