/* Crear un formulario con 6 checkbox y un botón ‘validar’ . Cuando pulsemos el botón, validará que hay
3 o más checkbox marcados. Mostrar por alert un mensaje que indique si hay o no 3 o más de 3
checkbox marcados. */

// Solución:

var checkboxes = document.getElementsByTagName("input");

    function validarCheckbox() {
    var marcados = 0;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
            marcados++;
        }
    } 
    
    if (marcados >= 3) {
        alert("Hay 3 o más checkbox marcados.");
    } else {
        alert("No hay 3 o más checkbox marcados.");
    }
}

var botonValidar = document.getElementById("validacion");

botonValidar.addEventListener("click", validarCheckbox);