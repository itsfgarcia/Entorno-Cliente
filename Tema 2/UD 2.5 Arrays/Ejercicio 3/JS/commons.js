/* Crear un array de 5 elementos que representan personas, donde cada elemento tiene las propiedades:
nombre, edad y ciudad.

1. Mostrar en la página las personas mayores de edad en forma de lista html.
2. Mostrar en la página las personas que son de Sevilla en forma de lista html. */

// Array de personas:

var personas = [
    { nombre: 'Fran', edad: 25, ciudad: 'Sevilla' },
    { nombre: 'Andrea', edad: 22, ciudad: 'Madrid' },
    { nombre: 'Pablo', edad: 35, ciudad: 'Bormujos' },
    { nombre: 'Ana', edad: 25, ciudad: 'Seúl' },
    { nombre: 'Luis', edad: 22, ciudad: 'Madrid' },
    { nombre: 'Darío', edad: 17, ciudad: 'Málaga'}
];

// 1. Mostrar en la página las personas mayores de edad en forma de lista html:
var listaMayoresEdad = document.createElement('div');
var saltoLinea = document.createElement('br');
document.body.appendChild(listaMayoresEdad);

personas.forEach(function(persona) {
    if (persona.edad >= 18) {
        var li = document.createElement('li');
        li.innerHTML = persona.nombre +' (' + persona.edad + ') ' + persona.ciudad;
        listaMayoresEdad.appendChild(li);
        listaMayoresEdad.appendChild(saltoLinea);
    }
});

// 2. Mostrar en la página las personas que son de Sevilla en forma de lista html:

var listaSevilla = document.createElement('div');
document.body.appendChild(listaSevilla);

personas.forEach(function(persona) {
    if (persona.ciudad === 'Sevilla') {
        var li = document.createElement('li');
        li.innerHTML = persona.nombre +' (' + persona.edad + ') ' + persona.ciudad;
        listaSevilla.appendChild(li);
    }
});


