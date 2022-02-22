"use strict";

// Edita el archivo script.js para añadir las variables de nombre y edad del ejercicio anterior.

// A continuación, utiliza un condicional para sacar por consola la frase correspondiente de la siguientes:

// - A _nombre_ le corresponde el descuento infantil (menores de 12).
// - A _nombre_ le corresponde el descuento juvenil (menores de 30).
// - A _nombre_ le corresponde el descuento de jubilados (mayores de 60).
// - A _nombre_ no le corresponde ningún descuento.

const nombre = "Luis";
// const color = "gris";
const edad = 61;
// console.log(
//   `Hola, me llamo ${nombre}, tengo ${edad} años y mi color favorito es el ${color}.`
// );
if (edad <= 12) {
  console.log(
    `${nombre} le corresponde el descuento infantil (menores de 12).`
  );
} else if (edad <= 30) {
  console.log(`${nombre} le corresponde el descuento juvenil (menores de 30).`);
} else if (edad >= 60) {
  console.log(
    `${nombre} le corresponde el descuento de jubilados (mayores de 60).`
  );
} else {
}
("no le corresponde ningún descuento.");
