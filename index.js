// let a = {}; 
// console.log(typeof a); 
let osoba = {
  ime: 'tvoja',
  prezime: 'mama',
  godiste: 2000,
  pozdrav: function () {
    console.log(
      `Zdravo, ja sam ${this.ime} ${this.prezime}. Imam ${2022 - this.godiste} godine.`);
  },
};
// osoba.godiste = 1990;
// osoba.pozdrav = function () {
//   console.log(`Zdravo!`)
// };
// console.log(osoba.godiste);
// osoba.pozdrav();
osoba.visina=175;
Object.entries(osoba);
console.log(osoba);