class FP {
    constructor(first, last, houseMembers, houseSize, meat, diet, water, dishWasher, dishWasherValue, purchases, waste, recycle, personal, pTransport, flights) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.meat = meat;
        this.diet = diet;
        this.water = water;
        this.dishWasherValue = dishWasherValue;
        this.purchase = purchases;
        this.waste = waste;
        this.recycle = recycle;
        if (dishWasher === 2) {
          this.waterPts = this.water * dishWasher;
        } else {
          this.waterPts = this.water;
        }
        this.personal = personal;
        this.pTransport = pTransport;
        this.flights = flights;
        this.total = this.determineHouseMemberPTS() + this.determineHouseSizePTS() + this.determineDietPTS() + this.determineMeatPTS() + this.waterPts + this.purchase + this.waste + this.recycle.recyclePoints + this.personal + this.pTransport + this.flights;
      }
    determineHouseSizePTS() {
        if(this.houseSize === "large") {
          return 10;
        } else if(this.houseSize === "medium") {
          return 7;
        } else if (this.houseSize === "small") {
          return 4;
        } else if (this.houseSize === "apt") {
          return 2;
        }
    }
    determineHouseMemberPTS() {
        if (this.houseMembers === 1) {
          return 14;
        } else if (this.houseMembers === 2) {
          return 12;
        } else if (this.houseMembers === 3) {
          return 10;
        } else if (this.houseMembers === 4) {
          return 8;
        } else if (this.houseMembers === 5) {
          return 6;
        } else if (this.houseMembers === 6) {
          return 4;
        } else if (this.houseMembers > 6) {
          return 2;
        }
    }
    determineDietPTS() {
      if (this.diet === "prepackaged") {return 12;}
      else if (this.diet === "balanced") {return 6;}
      else if (this.diet === "fresh") {return 2;}
    }
    determineMeatPTS() {
      if (this.meat === "meatEveryday") { return 10;}
      else if (this.meat === "meat") { return 8;}
      else if (this.meat === "vegetarian") { return 4;}
      else if (this.meat === "vegan") { return 2;}
      else if (this.meat === "wildMeat") { return 2;}
      }
    output() {
        console.log(`${this.first} ${this.last} has ${this.houseMembers} and ${this.houseSize} so their house member points are: ${this.houseMembersPTS}`);
        console.log(`${this.first} ${this.last} has ${this.houseMembers} and ${this.houseSize} so their house size points are: ${this.houseSizePTS}`);
    }
}
 export {FP}