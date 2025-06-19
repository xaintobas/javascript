'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const stephen = new Person('Stephen', 1996);

console.log(stephen);

const Car = function (carName, speed) {
  this.carName = carName;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new Car('BMW', 120);
const BENZ = new Car('BENZ', 95);

BMW.accelerate();
