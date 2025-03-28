import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts}from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData, getLS } from "./storage.js";
import { FP } from "./fp.js";

// const start = function(houseHoldMembers, houseSize, firstName, lastName) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePTS = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//       fname: firstName,
//       lname: lastName,
//       houseHoldMembers: houseHoldMembers, 
//       houseSize: houseSize, 
//       houseHoldPTS: houseHoldPTS, 
//       houseSizePTS: houseSizePTS, 
//       total: total
//   });
// }

renderTbl(cfpData); // cfpData is argument

// Function to validate single field
 const validateField = function(event) { // event is parameter
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field == "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  }
  else {
    fieldError.textContent = "";
    event.target.classList.remove('invalid');
  }
}

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);



FORM.addEventListener("submit", function(e) {  //callback
    e.preventDefault();
    if (FNAME.value !== "" && LNAME.value !== "") {
      SUBMIT.textContent = "";
      // console.log(FORM.meat.value);
      // console.log(FORM.diet.value)
      const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.meat.value, FORM.diet.value);
      cfpData.push(fpObj);
      console.log(cfpData);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      SUBMIT.textContent = "Form requires first and last name";
    }
});

