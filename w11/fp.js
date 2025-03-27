class FP {
    constructor(first, last, houseMembers, houseSize) {
        this.first = first
        this.last = last
        this.houseMembers = houseMembers
        this.houseSize = houseSize
        this.houseMembersPTS = this.determineHouseMemberPTS()
        this.houseSizePTS = this.determineHouseSizePTS()
        this.total = this.houseMembersPTS + this.houseSizePTS;
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
    output() {
        console.log(`${this.first} ${this.last} has ${this.houseMembers} and ${this.houseSize} so their house member points are: ${this.houseMembersPTS}`);
        console.log(`${this.first} ${this.last} has ${this.houseMembers} and ${this.houseSize} so their house size points are: ${this.houseSizePTS}`);
    }
}
 export {FP}