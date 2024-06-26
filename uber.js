class Uber {
  #customerName;
  #totalDistance = 0;
  #pricePerKm = 7;

  constructor(customerName = "Guest") {
    this.#customerName = customerName;
  }

  get customerName() {
    if (this.#customerName.toLowerCase() === "guest") {
      return "Logged in as guest";
    }

    return this.#customerName;
  }

  set customerName(name) {
    this.#customerName = name;
  }

  get totalDistance() {
    if (this.#totalDistance > 0) {
      return this.#totalDistance;
    }

    return "Please end a ride";
  }

  set totalDistance(distance) {
    this.#totalDistance = distance;
  }

  endRide(endDis) {
    this.#totalDistance += endDis;
  }

  calPrice() {
    const totalPrice = this.#pricePerKm * this.#totalDistance;

    if (this.#totalDistance === 0) {
      return "Please end a ride to calculate price";
    }

    return `Hi ${this.#customerName} your ride costs ₹${totalPrice}
    Total Distance covered: ${this.#totalDistance}`;
  }
}

const sarath = new Uber("Sarasraman");

console.log(sarath.totalDistance);
console.log(sarath.calPrice());
sarath.endRide(25);
console.log(sarath.totalDistance);
console.log(sarath.calPrice());
