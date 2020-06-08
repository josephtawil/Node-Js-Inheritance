const Property = require("./Property");

class Apartment extends Property {
    constructor(address, unit) {
        super(address);
        this.unit = unit;
    }
};

module.exports = Apartment;