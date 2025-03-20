import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts}from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData, getLS } from "./storage.js";

// houseHoldMembers, houseSize, firstName, lastName
// rest operator used here:
const start = (...userData) => {
  const houseHoldPTS = determineHouseHoldPts(userData[0]); //houseHoldMembers
  const houseSizePts = determineHouseSizePts(userData[1]); //houseSize
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
      fname: userData[2],
      lname: userData[3],
      houseHoldMembers: userData[0], 
      houseSize: userData[1], 
      houseHoldPTS: houseHoldPTS, 
      houseSizePts: houseSizePts, 
      total: total
  });
}

renderTbl(cfpData); // cfpData is argument

// Function to validate single field
 const validateField = event => { // event is parameter
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



FORM.addEventListener("submit", e => {  //callback
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


const add2 = a => 2 + a;
const result = add2(4);