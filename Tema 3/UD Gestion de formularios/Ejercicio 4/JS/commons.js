/* Crear una página HTML con 4 checkbox, con los valores: 1,2,3 y 5 y un botón. Al pulsar el botón, mostrar
en un alert la suma obtenida sólo de los checkbox marcados. Después todos los check volverán a estar
desmarcados. Crear el html sin formulario.

Ejemplo, si marcamos los dos primeros, la suma es 3. Hacerlo de dos formas:

◦ 1º: Los checkbox tienen un id para poder acceder a cada uno individual.
◦ 2º: Los checkbox no tienen un id propio, tienen un name común. */

// Usando tagName: 

for (var i = 0; i < 4; i++) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = i + 1;
    checkbox.name = "checkbox";
    checkbox.id = "checkbox" + i;
    
    document.body.appendChild(checkbox);
}




var boton = document.createElement("button");
boton.textContent = "Sumar";

document.body.appendChild(boton);

boton.addEventListener("click", function () {

    var suma = 0;
    for (var i = 0; i < 4; i++) {
        var checkbox = document.getElementsByName("checkbox")[i];
        if (checkbox.checked) {
            suma += parseInt(checkbox.value);
        }
    }

    alert("La suma es: " + suma);
});

// Usando id:

// Usando tagName: 

var salto = document.createElement("br");

document.body.appendChild(salto);

for (var i = 0; i < 4; i++) {
    var checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";
    checkbox2.value = i + 1;
    checkbox2.name = "checkbox2" + i;
    checkbox2.id = "checkbox2" + i;
    
    document.body.appendChild(checkbox2);
}

var boton2 = document.createElement("button");
boton2.textContent = "Sumar";

document.body.appendChild(boton2);

boton2.addEventListener("click", function () {

    var suma2 = 0;
    for (var i = 0; i < 4; i++) {
        var checkbox2 = document.getElementById("checkbox2" + i);
        if (checkbox2.checked) {
            suma2 += parseInt(checkbox2.value);
        }
    }

    alert("La suma es: " + suma2);
});




