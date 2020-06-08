const People = require("./People");
class Property {
    constructor(address) {
        this.address = address;
        this.people = [];
        this.pets = [];
    }

    addToPets(arr) {
        //rest operator to spread to an array
        this.pets = [...this.pets, ...arr];
    }
    addToPeople(arr) {
        this.people = [...this.people, ...arr];
    }
};

const myPlace = new Property("433 Boba Street");
console.log(myPlace);
module.exports = Property;