const { privateDecrypt } = require("crypto");

function updateValue(val) {
  val = 42;
}

let num = 10;
updateValue(num);
console.log(num); // Output: 10 (unchanged)
const a = Object.freeze(updateValue);
console.log(a)

class Hello {
  // publice
  private
  protected
  static var2 ='jdjd'
  constructor(car){
    this.car = car
    Hello.var2 =
  }

}

class Calo extends Hello {

}