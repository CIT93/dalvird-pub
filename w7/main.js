import { renderTbl } from "./render.js";

const cfpData = [];
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

//code challenge fulfilled

function determineHouseSizePts(size) {
    let houseSizePts = 0;
    if(size === "large") {
      houseSizePts = 10;
    } else if(size === "medium") {
      houseSizePts = 7;
    } else if (size === "small") {
      houseSizePts = 4;
    } else if (size === "apt") {
      houseSizePts = 2;
    }
      return houseSizePts;
  }
  
function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    }
     return houseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePts;
    cfpData.push({
        houseHoldMembers: houseHoldMembers, 
        houseSize: houseSize, 
        houseHoldPTS: houseHoldPTS, 
        houseSizePts: houseSizePts, 
        total: total
    });
}
  
function displayOutput(){
    for(obj of cfpData) {
        console.log(obj);
        const newP = document.createElement("p");
        const newH2 = document.createElement("h2");
        const newH3 = document.createElement("h3");
        newH2.textContent = `Carbon Footprint total is ${obj.total}`;
        newH3.textContent = 'Based on Number in Household and Size of Home'
        newP.textContent = `This number is based on the number of members in the hold of ${obj.houseHoldMembers} (score: ${obj.houseHoldPTS})`;
        newP.textContent += `and a ${obj.houseSize} size of home (score: ${obj.houseSizePts})`
        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
}

FORM.addEventListener("submit", function(e) {  //callback
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseHoldMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    // console.log(`In ${firstName} ${lastName}'s ${houseSize} house, there are ${houseHoldMembers} members.`);
    start(houseHoldMembers,houseSize);
    OUTPUT.innerHTML = '';
    //displayOutput();
    renderTbl(cfpData);
    FORM.reset();
});

// Apartment code is not correct because in the if-else we check for "apt" not "apartment" the value we gave in the html option
// why are we doing all this work? To get good data. Why? Because the user will not always give good data.