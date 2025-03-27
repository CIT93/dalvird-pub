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
    //console.log(`${FNAME.value} this is the result!`);
    if (FNAME.value !== "" && LNAME.value !== "") {
      SUBMIT.textContent = "";
      //start(parseInt(FORM.housem.value), FORM.houses.value, FNAME.value, LNAME.value);
      const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
      //fpObj.output();
      cfpData.push(fpObj);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      SUBMIT.textContent = "Form requires first and last name";
    }
});

// class Human {
//   constructor(name, hairColor, location, sleepScore) {
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} is in ${this.location} and had a sleep score of ${this.sleepScore} `);
//   }
// }

// const dean = new Human("Dean", "brown", "Home", 88);
// const harp = new Human("Harp", "red", "bedroom", 99);
// dean.introduce();
// harp.introduce();
// dean.hello = "HI";

