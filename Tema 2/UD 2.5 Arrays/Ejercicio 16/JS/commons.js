/* Tienes un array de objetos que representan productos en una tienda. Cada objeto tiene un nombre, un
precio, y una propiedad categoria, que es otro objeto con un nombre y una descripción. Realiza las
siguientes tareas:

1. Crear un array de productos donde cada producto tiene una categoría con nombre y descripción.

2. Obtener un array de nombres de productos pertenecientes a una categoría específica (por ejemplo,
"Electrónica"). Imprimirlo

3. Imprimir los detalles de los productos filtrados, incluyendo el nombre de la categoría y su
descripción. */

// 1. Crear un array de productos.

var productos = [
  {
    nombre: "Portatil",
    precio: 1500,
    categoria: { nombre: "Electrónica", descripcion: "Ordenador portátil" },
  },
  {
    nombre: "Raton",
    precio: 20,
    categoria: { nombre: "Electrónica", descripcion: "Dispositivo para moverse por la pantalla" },
  },
  {
    nombre: "Teclado",
    precio: 50,
    categoria: { nombre: "Electrónica", descripcion: "Dispositivo para escribir" },
  },
  {
    nombre: "Monitor",
    precio: 300,
    categoria: { nombre: "Electrónica", descripcion: "Pantalla" },
  },
  {
    nombre: "Lays al punto de sal",
    precio: 2.50,
    categoria: { nombre: "Alimentación", descripcion: "Snack de patatas fritas" }
  }
];

// 2. Obtener un array de productos completos pertenecientes a una categoría específica (por ejemplo, "Electrónica"). Imprimir sus nombres.

let productosElectronica = productos.filter(producto => producto.categoria.nombre === "Electrónica");

let nombresProductosElectronica = productosElectronica.map(producto => producto.nombre);
console.log(nombresProductosElectronica);  // ["Portatil", "Raton", "Teclado", "Monitor"]

// 3. Imprimir los detalles de los productos filtrados, incluyendo el nombre de la categoría y su descripción.

let inventario = document.createElement('div');
document.body.appendChild(inventario);

for (let producto of productosElectronica) {
  let productoEnInventario = document.createElement('div');
  productoEnInventario.innerHTML = `${producto.nombre} : Categoría: ${producto.categoria.nombre} - Descripción: ${producto.categoria.descripcion}`;
  inventario.appendChild(productoEnInventario);
}
