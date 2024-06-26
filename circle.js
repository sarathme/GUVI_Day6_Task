class Circle {
  #radius;
  #color;
  constructor(radius = 1, color = "red") {
    this.#radius = radius;
    this.#color = color;
  }

  getRadius() {
    return this.#radius;
  }

  setRadius(radius) {
    this.#radius = radius;
  }

  getColor() {
    return this.#color;
  }

  setColor(color) {
    this.#color = color;
  }

  toString() {
    return `${this.constructor.name}[radius=${this.#radius},color=${
      this.#color
    }]`;
  }

  getArea() {
    return (Math.PI * this.#radius * this.#radius).toFixed(2);
  }

  getCircumference() {
    return (Math.PI * this.#radius * 2).toFixed(2);
  }
}

const a = new Circle();

console.log(a.getColor());
console.log(a.getRadius());
a.setColor("yellow");
a.setRadius(3);
console.log(a.getCircumference());
console.log(a.getArea());
console.log(a.toString());
