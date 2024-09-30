var fecha = new Date();

document.write('Estamos en el ' + (fecha.getFullYear() % 100)); // Forma más fácil y compacta.
document.write('<br/><br/>');


// Año con solo los dos ultimos numeros haciendo uso del substring().

var año = fecha.getFullYear().toString().substring(2);

document.write('Estamos en el '+ año); //.
