// 4- Dado el siguiente arreglo:
// let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
// Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor?

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];
export let maxNumber = -999999;

for (let i = 0; i <= numbers.length - 1; i++) {
  if (numbers[i] >= maxNumber) {
    maxNumber = numbers[i];
  }
}

console.log("El número mayor es:", maxNumber);
