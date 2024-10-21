/* Tienes un array de objetos que representan productos en un inventario. Cada objeto tiene las propiedades
nombre, cantidad y precio. 
1. Crear un nuevo array de objetos que contenga el nombre del producto y el valor total en stock (cantidad * precio , de cada producto.). 

2. Luego, imprimir el nombre del producto y el valor total en la consola con dos decimales */

// 1. 

let inventario = [
  { nombre: "Producto A", cantidad: 10, precio: 20 },
  { nombre: "Producto B", cantidad: 5, precio: 30 },
  { nombre: "Producto C", cantidad: 8, precio: 15 },
];

let productosConStock = inventario.map((producto) => ({
  nombre: producto.nombre,
  totalEnStock: producto.cantidad * producto.precio,
}));


// 2.

console.log(
  productosConStock.map((producto) => `${producto.nombre}: $${producto.totalEnStock.toFixed(2)}`)
);