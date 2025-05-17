import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts} from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import { cfpData, saveLS} from "./storage.js";
import { FP } from "./fp.js";
import { calculateAvg, addRow } from "./average.js"

renderTbl(cfpData);

// Function to validate single field
 const validateField = function(event) {
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

const determineRecycleItems = e => {
  const numChecked = document.querySelectorAll('.recycle:checked').length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    aluminum: e.target.aluminum.checked,
    steel: e.target.steel.checked,
    food: e.target.food.checked,
    recyclePoints: (24 - (numChecked * 4)),
  }
}


FORM.addEventListener("submit", e => {  
    e.preventDefault();
    if (FNAME.value !== "" && LNAME.value !== "") {
      SUBMIT.textContent = "";
      const checkbox = document.querySelector('input[type="checkbox"]');
      let dishWasher = checkbox.checked === true ? 2 : 0;
      const fpObj = new FP(
        FNAME.value, 
        LNAME.value, 
        parseInt(e.target.housem.value), 
        e.target.houses.value, 
        e.target.meat.value, 
        e.target.diet.value,
        parseInt(e.target.water.value),
        dishWasher,
        e.target.dishWasher.checked,
        parseInt(e.target.purchases.value),
        parseInt(e.target.waste.value),
        determineRecycleItems(e),
        parseInt(e.target.personal.value),
        parseInt(e.target.pTransport.value),
        parseInt(e.target.flights.value)
      );
      cfpData.push(fpObj);
      saveLS(cfpData);
      renderTbl(cfpData);
      FORM.reset();
    } else {
      SUBMIT.textContent = "Form requires first and last name";
    }
});