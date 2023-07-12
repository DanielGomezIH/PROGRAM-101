import { convertPoundsKgs } from "../helpers/pounds-kgs";

// 1- Convertir de Libras a Kilogramos. (1 libra = 0.453592 Kilogramos)
// Ejemplo: 150 libras = 68.0388 kilogramos.

let libras = 150;

let kgs = 0.453592 * libras;

console.log(libras, "libras es igual a:", kgs, "Kilogramos");

// convertPoundsKgs(150);
