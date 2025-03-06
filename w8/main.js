import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts}from "./cfp.js";

const cfpData = [];
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

function start(houseHoldMembers, houseSize, firstName, lastName) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
      fname: firstName,
      lname: lastName,
      houseHoldMembers: houseHoldMembers, 
      houseSize: houseSize, 
      houseHoldPTS: houseHoldPTS, 
      houseSizePts: houseSizePts, 
      total: total
  });
}

FORM.addEventListener("submit", function(e) {  //callback
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseHoldMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    // console.log(`In ${firstName} ${lastName}'s ${houseSize} house, there are ${houseHoldMembers} members.`);
    start(houseHoldMembers,houseSize, firstName, lastName);
    OUTPUT.innerHTML = '';
    renderTbl(cfpData);
    FORM.reset();
});