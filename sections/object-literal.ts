// console.log(person.age);
// person.toString();

export let person = {
  name: "Daniel",
  age: 19,
  isActive: true,
  hobbies: ["soccer", "basquetball"],
  toString() {
    let objectString = this.name + " " + this.age + " " + this.hobbies;
    console.log(objectString);
  },
};

let car = {
  doors: 4,
  wheels: 4,
  brand: "Ford",
  seating: 5,
  year: 2025,
  gearBox: "Automatic",
};

let smarTv = {
  sizeInches: 32,
  color: "Black",
  brand: "Simply",
  year: "2014",
};

let youtubeVideo = {
  controlButtons: ["Play", "Stop", "Next", "Volumen"],
  formatVideo: "1920 x 1080",
  socialButtons: ["Like", "Dislike", "Share"],
  authot: "Daniel",
};

console.log(car);

console.log(smarTv);

console.log(youtubeVideo);
