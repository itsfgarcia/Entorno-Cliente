/* Crea un archivo HTML con un párrafo (<p>) con el texto: “Texto Original”. Preguntar al usuario si quiere
cambiar texto y en caso afirmativo, cambiar su texto a “Texto Cambiado”. En caso negativo, preguntar si
quiere cambiar el color de la letra. En caso afirmativo, cambiar la letra a color naranja. */

var parrafo = document.createElement('p');

parrafo.innerHTML = 'Texto Original';

document.body.appendChild(parrafo);

var botonCambiarTexto = document.createElement('button');

botonCambiarTexto.textContent = 'Cambiar Texto';

document.body.appendChild(botonCambiarTexto);

function cambiarTexto() {
    var cambio = confirm('¿Quieres cambiar el texto?');

    if (cambio) {
        parrafo.textContent = 'Texto Cambiado';
    } else {
        var cambiarColor = confirm('¿Quieres cambiar el color de la letra?');
        
        if (cambiarColor) {
            parrafo.style.color = 'orange';
        } else {
            alert('¡Hemos terminado!');
        }
    }
}

botonCambiarTexto.addEventListener('click', cambiarTexto);