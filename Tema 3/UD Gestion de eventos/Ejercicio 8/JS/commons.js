/* Dado el formulario:

<form name="formulario" id="formulario" action="http://www.google.es" method="get">
 <label for="nombre">Nombre:</label>
 <input type="text" name="nombre" id="nombre" />
 <label for="apellidos">Apellidos:</label>
 <input type="text" name="apellidos" id="apellidos" />
 <label for="edad">Edad:</label>
 <input name="edad" type="text" id="edad" maxlength="3" />
 <label for="provincia">Provincia:</label>
 <select name="provincia" id="provincia">
 <option value="0" selected="selected">Seleccione Provincia</option>
<option value="H">Huesca</option>
<option value="ZA">Zaragoza</option>
<option value="T">Teruel</option>
</select>
<fieldset>
 <div id="resultado"></div>
 <input type="reset" name="limpiar" id="limpiar" value="Limpiar" />
<input type="submit" name="enviar" id="enviar" value="Enviar" />
</fieldset>
</form>
Validar el formulario antes de enviarlo. Para ello se debe comprobar que el nombre, apellidos y edad tienen
valor (no se dejan en blanco). La edad además debe ser un número y sus valores deben estar comprendidos
entre 0 y 105. También se debe validar que se ha seleccionado alguna provincia.
Si se cumplen todas las validaciones, debe preguntarse al usuario con un mensaje si deseas enviar el formulario.
En caso afirmativo, se enviará. En caso negativo no hará nada.
No se mostraran todos los errores. Sólo el primero que no cumpla la validación.
Cuando no se cumpla alguna validación debe aparecer el mensaje correspondiente en la etiqueta div
(id=”resultado”) del final en color rojo.
*/

document.getElementById('enviar').addEventListener('click', function(event) {
  event.preventDefault();
  var nombre = document.getElementById('nombre').value;
  var apellidos = document.getElementById('apellidos').value;
  var edad = document.getElementById('edad').value;
  var provincia = document.getElementById('provincia').value;
  var resultado = document.getElementById('resultado');
  var mensaje = '';
  
  if (nombre === '') {
    mensaje += 'El nombre no puede estar vacío.<br>';
  }
  
  if (apellidos === '') {
    mensaje += 'Los apellidos no pueden estar vacíos.<br>';
  }
  
  if (edad === '') {
    mensaje += 'La edad no puede estar vacía.<br>';
  } else if (isNaN(edad) || edad < 0 || edad > 105) {
    mensaje += 'La edad debe ser un número entre 0 y 105.<br>';
  }
  
  if (provincia === '0') {
    mensaje += 'Debe seleccionar una provincia.<br>';
  }
  
  if (mensaje !== '') {
    resultado.innerHTML = '<span style="color: red;">' + mensaje + '</span>';
    return;
  }
  
  if (confirm('¿Desea enviar el formulario?')) {
    document.getElementById('formulario').submit();
  }

  resultado.innerHTML = '';
});

document.getElementById('limpiar').addEventListener('click', function() {
  document.getElementById('nombre').value = '';
  document.getElementById('apellidos').value = '';
  document.getElementById('edad').value = '';
  document.getElementById('provincia').value = '0';
  document.getElementById('resultado').innerHTML = '';
});

// Para probar la validación en el navegador:

// 1. Añadir el código HTML del formulario al documento.

// 2. Añadir el código JavaScript al documento.

// 3. Iniciar el formulario y probar las validaciones.
