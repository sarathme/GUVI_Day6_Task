class Person {
  #name;
  #age;
  #job;

  constructor(name = "Anonymous", age = 0, job = "Student") {
    this.#name = name;
    this.#age = age;
    this.#job = job;
  }

  get name() {
    if (this.#name === "Anonymous") {
      return "No name is provided";
    }
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get age() {
    if (this.#age === 0) {
      return "No age is provided";
    }
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  get job() {
    if (this.#job === "Student") {
      return "You don't have a job";
    }
    return this.#job;
  }

  set job(job) {
    this.#job = job;
  }
}

const sarath = new Person();

console.log(sarath.name);
console.log(sarath.age);
console.log(sarath.job);

sarath.name = "Sarasraman";
sarath.age = 29;
sarath.job = "Web Developer";

console.log(sarath.name);
console.log(sarath.age);
console.log(sarath.job);

console.log(sarath);
