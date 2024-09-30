// Escribir por pantalla una representación textual con el nombre completo del día de la semana en español.


// Forma rápida y limpia.

var fecha = new Date();

var diaSemana = fecha.toLocaleString('es-ES', { weekday: 'long' });
document.write('Hoy es: ' + diaSemana);


document.write('<br/><br/>');

// Forma más tosca y larga.

var fechaTexto;

switch (fecha.getDay()) {

    case 0:
        fechaTexto = 'domingo';
        break;
    case 1:
        fechaTexto = 'lunes';
        break;
    case 2:
        fechaTexto = 'martes';
        break;
    case 3:
        fechaTexto = 'miércoles';
        break;
    case 4:
        fechaTexto = 'jueves';
        break;
    case 5:
        fechaTexto = 'viernes';
        break;
    case 6:
        fechaTexto = 'sábado';
        break;
}

document.write('Hoy es: '+ fechaTexto);
