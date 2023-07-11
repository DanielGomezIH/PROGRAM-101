class Car {
  brand: string;
  doors: number;
  fuelTank: number;
  isRunning: boolean;
  type: string;

  createdAt: number;

  constructor() {
    this.brand = "No Brand";
    this.doors = 0;
    this.fuelTank = 0;
    this.isRunning = false;
    this.type = "No type";

    this.createdAt = 123456789;
  }

  turnOn() {
    if (this.isRunning) {
      console.log("El carro ya estaba encendido");
      return;
    }

    if (this.fuelTank <= 0) {
      console.log("El carro no tiene combustible");
      return;
    }

    this.isRunning = true;
    console.log("El carro está encendido");
  }

  fillTank(gas: number) {
    if (gas <= 0) {
      throw new Error("El gas tiene que ser positivo");
    }

    let newFuelTank = this.fuelTank + gas;

    if (newFuelTank >= 100) {
      newFuelTank = 100;
    }

    this.fuelTank = newFuelTank;
  }
}

let myMazda = new Car();

console.log(myMazda);
myMazda.fillTank(50);
console.log(myMazda);
myMazda.turnOn();
