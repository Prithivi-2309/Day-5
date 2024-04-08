//Write a “person” class to hold all the details.
class Person {
  constructor(Firstname, Lastname, age, occupation) {
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.age = age;
    this.occupation = occupation;
  }
}
const person = new Person("xxx", "yyy", 28, "Engineer");
console.log("FirstName:", person.Firstname);
console.log("Lastname:", person.Lastname);
console.log("Age:", person.age);
console.log("Occupation:", person.occupation);

//write a class to calculate the Uber price.
class UberPriceCalculator {
  constructor(distance, duration) {
    this.distance = distance;
    this.duration = duration;
    this.BASEFARE = 2.0;
    this.PERKMRATE = 1.5;
    this.PERMINUTERATE = 0.5;
  }
  calculateFare() {
    const distanceFare = this.distance * UberPriceCalculator.PERKMRATE;
    const timeFare = this.duration * UberPriceCalculator.PERMINUTERATE;
    const totalFare = UberPriceCalculator.BASEFARE + distanceFare + timeFare;
    return totalFare;
  }
  getDistance() {
    return this.distance;
  }
  setDistance(distance) {
    this.distance = distance;
  }
  getDuration() {
    return this.duration;
  }
  setDuration(duration) {
    this.duration = duration;
  }
  toString() {
    return `UberPriceCalculator[distance=${this.distance.toFixed(
      2
    )} KMS, duration=${this.duration} minutes]`;
  }
}
const calculator = new UberPriceCalculator(5.5, 15);
console.log(calculator.toString());
const fare = calculator.calculateFare();
console.log(`Total Fare: $${fare.toFixed(2)}`);
