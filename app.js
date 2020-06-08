const house = require("./util/house");
const apartment = require("./util/apartment");
const people = require("./util/People");

const myApartment = new apartment("333 Dola St.", 3355);
myApartment.addToPeople(["Joseph"]);
console.log(myApartment);

const myHouse = new house("433 Boba Street", true, false);
myHouse.addToPets(["pop", "sop"]);
console.log(myHouse);