import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts}from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData, getLS } from "./storage.js";

const start = function(houseHoldMembers, houseSize, firstName, lastName) {
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
    console.log(`${FNAME.value} this is the result!`);
    // const firstName = FORM.firstname.value;
    // const lastName = FORM.lastname.value;
    // const firstNameIsValid = FNAME.value !== "";
    // const lastNameIsValid = LNAME.value !== "";
    if (FNAME.value !== "" && LNAME.value !== "") {
      SUBMIT.textContent = "";
      start(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      SUBMIT.textContent = "Form requires first and last name";
    }
});

const add2 = function(...a) {
  return 2 + a[3];
}
const result = add2(1,2,3,4);

const a = 3;
(function(a) {
  console.log(a);
})(a);