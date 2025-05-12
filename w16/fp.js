class FP {
    constructor(first, last, houseMembers, houseSize, meat, diet, water, dishWasher) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.meat = meat;
        this.diet = diet;
        if (dishWasher === 2) {
          this.water = water * dishWasher;
        } else {
          this.water = water;
        }
        this.total = this.determineHouseMemberPTS() + this.determineHouseSizePTS() + this.determineDietPTS() + this.determineMeatPTS() + this.water;
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