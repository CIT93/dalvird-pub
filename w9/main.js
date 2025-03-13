import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts}from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData, getLS } from "./storage.js";
const errorComment = document.getElementById("error");

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
  if (firstName == "" || lastName == "") {
      errorComment.innerText = "Full Name is required";
  }
  else {
      errorComment.innerText = "";
      const houseHoldMembers = parseInt(FORM.housem.value);
      const houseSize = FORM.houses.value;
      start(houseHoldMembers,houseSize, firstName, lastName);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
  }
});

// window.onload = function() {
//   renderTbl(cfpData);
// }

renderTbl(cfpData);