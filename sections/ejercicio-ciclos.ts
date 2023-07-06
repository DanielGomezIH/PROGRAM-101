// Ejercicio Ciclo

export let base = 10;
let limit = 50;
let value = 1;

// For

for (let base = 10; base <= limit; base += 10) {
  console.log(10, "x", value++, "=", base);
}

// Do While

// do {
//   console.log(10, "x", value++, "=", base);
//   base += 10;
// } while (base <= limit);

// While

// while (base <= limit) {
//   console.log(10, "x", value++, "=", base);
//   base += 10;

//   if (value === 6) {
//     break;
//   }
// }

console.log("Fin del programa");
