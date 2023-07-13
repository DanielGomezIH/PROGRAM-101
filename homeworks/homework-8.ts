// 8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
// nombre que tenga más letras del arreglo, y debe de trabajar así:
// let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
// let hero = largestNameOfArray( heroes );
// console.log( hero ); // Profesor Charles Xavier

export let heroes = [
  "Deadpool",
  "Ciclope",
  "Magneto",
  "Profesor Charles Xavier",
];

let largestName = "";

function largestNameOfArray(nameArray: string[]) {
  for (let i = 0; i < nameArray.length; i++) {
    let name = nameArray[i];

    if (name.length > largestName.length) {
      largestName = name;
    }
  }

  return largestName;
}

let hero = largestNameOfArray(heroes);
console.log(hero); // Profesor Charles Xavier
