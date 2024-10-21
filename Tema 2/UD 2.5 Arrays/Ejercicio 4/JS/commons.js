/* Crear un array de objetos que representan productos en una tienda, donde cada objeto tiene las propiedades
nombre, precio y categoria:

1. Obtener un nuevo array que contenga sólo los nombres de los productos, transformando cada nombre en
mayúsculas.

2. Mostrar en consola el array de nombres transformados y en la página HTML separados por guión. */

// Array de Objetos:

var objeto = [
  {
    nombre: "iPhone 12 Pro Max (Reacondicionado)",
    precio: 400,
    categoria: "Tecnología",
  },
  { nombre: "Pienso para gatos", precio: 3.5, categoria: "Otros" },
  { nombre: "Patatas Lays al punto de sal", precio: 2.75, categoria: "Comida" },
];

// 1. Obtener un nuevo array que contenga sólo los nombres de los productos, transformando cada nombre en mayúsculas.

var nombresMayusculas = objeto.map(function (objeto) {
  return objeto.nombre.toUpperCase();
});

// 2. Mostrar en consola el array de nombres transformados por consola y en la página web separados por guión

var productos = document.createElement("div");
document.body.appendChild(productos);

console.log("Array en mayúsculas: " + nombresMayusculas.join(", "));

productos.innerHTML = nombresMayusculas.join(" - ");
