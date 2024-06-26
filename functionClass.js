function Movie(name, studio, rating = "PG") {
  this.title = name;
  this.studio = studio;
  this.rating = rating;
}

Movie.prototype.isPG = function () {
  return this.rating.toLowerCase().startsWith("pg");
};

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
const dune1 = new Movie("Dune: Part One", "Legendary Pictures", "R");
const leo = new Movie("Leo", "Seven Screen Studio");
const arr = [casinoRoyale, dune1, leo];

function getPG(arr) {
  return arr.filter((el) => el.isPG());
}

console.log("-------------------Movie class instance----------------");
console.log(casinoRoyale);
console.log("-------------------getPG function----------------");
console.log(getPG(arr));
