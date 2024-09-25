var precioTopping = 0;
var precioHelado = 1.9;
var topping = prompt(
  "Ingrese el tipo de topping que quieres para tu helado: oreo/kitkat/brownie/lacasitos"
).toLowerCase();

if (topping === "oreo") {
  precioTopping = 1;
} else if (topping === "kitkat") {
  precioTopping = 1.5;
} else if (topping === "brownie") {
  precioTopping = 0.75;
} else if (topping === "lacasitos") {
  precioTopping = 0.95;
}

if (
  topping !== "oreo" &&
  topping !== "kitkat" &&
  topping !== "brownie" &&
  topping !== "lacasitos"
) {
  document.write(
    "No disponemos de ese topping, lo sentimos. El precio del helado es: " +
      precioHelado +
      " euros."
  );
} else if (topping === "oreo") {
  document.write(
    "Tu helado con oreo cuesta: " +
      parseFloat(precioHelado + precioTopping).toFixed(2) +
      " euros."
  );
} else if (topping === "kitkat") {
  document.write(
    "Tu helado con kitkat cuesta: " +
      parseFloat(precioHelado + precioTopping).toFixed(2) +
      " euros."
  );
} else if (topping === "brownie") {
  document.write(
    "Tu helado con brownie cuesta: " +
      parseFloat(precioHelado + precioTopping).toFixed(2) +
      " euros."
  );
} else if (topping === "lacasitos") {
  document.write(
    "Tu helado con lacasitos cuesta: " +
      parseFloat(precioHelado + precioTopping).toFixed(2) +
      " euros."
  );
}
