const Property = require("./Property");
//House class is inheritance to Property Class
class House extends Property {
    constructor(address, frontyard, backyard) {
        super(address);
        this.frontyard = frontyard;
        this.backyard = backyard;
    };
}

module.exports = House;