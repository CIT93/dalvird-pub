// How to calculate your carbon footprint: https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1
// Count members of your household
const membersInHousehold = 2;
// Consider size of your home
const sizeOfHouse = 10;
// Evaluate food choices
// 4 + 6
const diet = 10;
// Examine water consumption
// 3 + 3
const waterConsumptionAppliances = 6;
// Determine how many household purchases you make each year
const newThingsBoughtAnnually = 6;
// Consider how much waste you produce
const filledGarbageCans = 2;
// Identify the amount of waste you recycle
// glass, plastic, paper, aluminum, food waste
const recycled = 4;
// Tally up your annual transportation scores
const annualTransportation = 12;
// Add your points 
const total = membersInHousehold + sizeOfHouse + diet + waterConsumptionAppliances + newThingsBoughtAnnually + filledGarbageCans + recycled + annualTransportation;
console.log(total)

const totalReveal = document.querySelector("h1");
totalReveal.textContent = "Total Carbon Footprint: " + total;
