// Realizar un programa que muestre la nota del alumno como: A,B,C,D,F donde:
// A >= 90
// B >= 80
// C >= 70
// D >= 60
// F < 60

// let grade: number = 94;

// if (grade >= 95) {
//   console.log("La nota del alumno es: A+");
// } else if (grade >= 90) {
//   console.log("La nota del alumno es: A");
// } else if (grade >= 80) {
//   console.log("La nota del alumno es: B");
// } else if (grade >= 70) {
//   console.log("La nota del alumno es: C");
// } else if (grade >= 60) {
//   console.log("La nota del alumno es: D");
// } else {
//   console.log("La nota del alumno es: F");
// }

let grade: number = 95;
let gradeLetter: string;

if (grade >= 95) {
  gradeLetter = "A+";
} else if (grade >= 90) {
  gradeLetter = "A";
} else if (grade >= 80) {
  gradeLetter = "B";
} else if (grade >= 70) {
  gradeLetter = "C";
} else if (grade >= 60) {
  gradeLetter = "D";
} else {
  gradeLetter = "F";
}

console.log("La nota del alumno es:", gradeLetter);
