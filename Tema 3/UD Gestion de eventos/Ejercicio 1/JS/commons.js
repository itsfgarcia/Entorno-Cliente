/* Crear un formulario con una etiqueta label y un input type text para que escribáis vuestro nombre.
Cuando hagáis click fuera del campo, tendréis que convertir el nombre a mayúsculas en el input. El
valor nuevo debe quedarse señalado (marcado con el cursor). Usar función flecha. Utilizar
addEventListener. */

var $nombre = document.getElementById('nombre');

$nombre.addEventListener("blur", () => {
    $nombre.value = $nombre.value.toUpperCase();
    
});