// 1 = lunes 2 = martes 3 = miércoles 4 =...

export let weekDay: number = 3;

if (weekDay <= 0) {
  throw new Error("Día de la semana no permitido");
}

switch (weekDay) {
  case 1:
    console.log("Es lunes");
    break;
  case 2:
    console.log("Es martes");
    break;
  case 3:
    console.log("Es miércoles");
    break;
  default:
    console.log("No es lunes, ni martes, ni miércoles");
    break;
}
