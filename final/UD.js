class UD {
    constructor (houseSize, messSize, task, timeAvailable, priorityTask) {
        this.houseSize = houseSize, 
        this.messSize = messSize,
        this.task = task,
        this.timeAvailable = timeAvailable,
        this.priorityTask = priorityTask,
        this.totalTime = this.messTime() * this.houseSqrFt(); 
    }
    /* This function determines the size of the 
    * house according to the square footage
    * determines the number of bedrooms and bathrooms */
    houseSqrFt() {
        if (this.houseSize >= 4000) { //luxury home
            return 14; // 6 bed and 8 bath
        } else if (this.houseSize < 4000 && this.houseSize > 2500 ) {   // large house
            return 9; // 4 bed and 5 bath
        } else if (this.houseSize > 1500 && this.houseSize <= 2500) {   //medium suburban house
            return 7; // 4 bed and 3 bath
        } else if (this.houseSize <= 1500 && this.houseSize >= 800) {   // small house
            return 5; // 3 bed and 2 bath
        } else if (this.houseSize < 800) {   // small apartment
            return 3; // 2 bed and 1 bath
        }
    }
    /* This function determines the time it will take 
    * to clean according to the size of the mess 
    * returns the time it will take to clean the mess 
    * out of 10 hours (we assume user has) */
    messTime() {
        if (this.messSize === "chaotic") {
            return 3; // 1 room will take 2 hours to clean on average
        } else if (this.messSize === "messy") {
            return 2.5; 
        } else if (this.messSize === "cluttered") {
            return 1.5;
        } else if (this.messSize === "tidy") {
            return 1;
        } else if (this.messSize === "spotless") {
            return 0.5; 
        }
    }
}

export {UD}

