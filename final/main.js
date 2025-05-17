import { FORM, HSIZE, MSIZE, SUBMIT} from "./global.js";
import { renderTbl } from "./renderTbl.js";
import { saveLS, userHouseData } from "./storage.js";
import { UD} from "./UD.js"

renderTbl(userHouseData);

/* Action when form is submitted */
FORM.addEventListener("submit", function(e) {
    e.preventDefault();
    if (inputValidation(e.target.houses.value, e.target.messs.value)) {
        SUBMIT.textContent = "";
        //let totalTime = totalCleanTime(FORM.messs.value, FORM.houses.value);        // calculates total time
        const udObj = new UD (FORM.houses.value, FORM.messs.value, FORM.taskname.value);
        userHouseData.push(udObj);
        saveLS(userHouseData);
        renderTbl(userHouseData);
        FORM.reset(); }
});

/* This function validates the house 
*  size and mess size input fields  */
const inputValidation = (house, mess) => {
  if (house === "" || mess === "") {
      SUBMIT.textContent = "Form requires house size and mess size";
      return false
  } else {
    return true }
}

function validateField(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);
  if (field == "") {
    fieldError.textContent = `${fieldId} is required`;
    event.target.classList.add('invalid');
  } else {
    fieldError.textContent = "";
    event.target.classList.remove('invalid'); }
}

HSIZE.addEventListener('blur', validateField);
MSIZE.addEventListener('blur', validateField);

 // Small House: 800–1,500 sq ft (e.g., townhouses, small suburban homes)
// Medium House: 1,500–2,500 sq ft (average suburban home)
// Large House: 2,500–4,000 sq ft (spacious suburban homes)
// Luxury House: 4,000+ sq ft (high-end homes, estates)

//let Rooms = {};
 // Rooms = {
    //     bathrooms: 5,       // 5 bathrooms (or more)
    //     diningRm: 1,       // 1 dining room
    //     bedRms: 4,          // 4 bedrooms (or more)
    //     livingRm: 2,        // 2 living rooms (or more)
    //     kitchen: 2,         // 2 kitchens (small and big)
    //     laundryRm: 1,       // 1 laundry room
    //     studyRm: 1,         // 1 study room
    //     extraRm: 2,         // 1 (or more) extra rooms (office/gym)  
    //     masterBedRm: 1,     // 1 master bedroom
    //     pantry: 1,          // 1 pantry (walk-in)
    //     garage: 2           // 2 (or more) car garage
    // };

     // Rooms = {
    //     bathrooms: 3,      // 3 bathrooms (could be 3-4 depending on layout)
    //     diningRm: 1,      // 1 dining room
    //     bedRms: 4,         // 4 bedrooms (including master and extra)
    //     livingRm: 1,       // 1 living room
    //     kitchen: 1,        // 1 kitchen
    //     laundryRm: 1,      // 1 laundry room
    //     studyRm: 1,        // 1 study room or office
    //     extraRm: 1,        // 1 extra room (could be a playroom, home office, or gym)
    //     masterBedRm: 1,    // 1 master bedroom
    //     pantry: 1,         // 1 pantry (likely walk-in)
    //     garage: 2          // 2-car garage
    // };

     // Rooms = {
    //     bathrooms: 2,      // 2 bathrooms (typically one in the master suite and one for the rest of the house)
    //     diningRm: 1,      // 1 dining room
    //     bedRms: 3,         // 3 bedrooms (usually including a master bedroom)
    //     livingRm: 1,       // 1 living room
    //     kitchen: 1,        // 1 kitchen
    //     laundryRm: 1,      // 1 laundry room (often separate or in a hallway)
    //     studyRm: 1,        // 1 study room or small home office
    //     extraRm: 0,        // 0 extra rooms (unless there's a den or additional space)
    //     masterBedRm: 1,    // 1 master bedroom
    //     pantry: 1,         // 1 pantry (often smaller than in larger homes)
    //     garage: 1          // 1-car or 2-car garage (depending on the home)
    // };

     // Rooms = {
    //     bathrooms: 1,      // 1 bathroom (small homes typically have 1 bathroom)
    //     diningRm: 1,      // 1 dining room (often combined with the living room in small houses)
    //     bedRms: 2,         // 2 bedrooms (including the master and one additional room)
    //     livingRm: 1,       // 1 living room (often open-plan with the dining area)
    //     kitchen: 1,        // 1 kitchen
    //     laundryRm: 0,      // 0 laundry room (may have laundry area in the kitchen or bathroom)
    //     studyRm: 0,        // 0 study room (small houses usually don't have a dedicated study)
    //     extraRm: 0,        // 0 extra rooms (unless there's a den or small additional space)
    //     masterBedRm: 1,    // 1 master bedroom
    //     pantry: 0,         // 0 pantry (small houses usually don't have walk-in pantries)
    //     garage: 1          // 1-car garage (if there is a garage)
    // };

     // Rooms = {
    //     bathrooms: 1,      // 1 bathroom (typically a single, compact bathroom)
    //     diningRm: 0,      // 0 dining room (often combined with the living room or kitchen)
    //     bedRms: 1,         // 1 bedroom (likely a studio or one-bedroom apartment)
    //     livingRm: 1,       // 1 living room (sometimes part of an open-plan space)
    //     kitchen: 1,        // 1 kitchen (often part of the living area or open-plan)
    //     laundryRm: 0,      // 0 laundry room (laundry facilities may be shared or in the bathroom)
    //     studyRm: 0,        // 0 study room (space might be used for a desk in the living room)
    //     extraRm: 0,        // 0 extra rooms (usually no extra room beyond the basics)
    //     masterBedRm: 1,    // 1 master bedroom (if it's a studio, this would be combined with living space)
    //     pantry: 0,         // 0 pantry (storage is usually limited to cabinets)
    //     garage: 0          // 0 garage (if available, it might be shared parking)
    // };

    //let cleaningTime = {};

      // cleaningTime = {
    //     bathrooms: 2,     // 1 bathroom takes 2 hours (deep cleaning)
    //     diningRm: 1,     // Dining room: 1 hour (deep cleaning and organizing)
    //     bedRms: 2,        // Each bedroom: 2 hours (deep cleaning, including under the bed, etc.)
    //     livingRm: 2,      // Living room: 2 hours (cleaning furniture, under cushions, etc.)
    //     kitchen: 3,       // Kitchen: 3 hours (deep cleaning appliances, surfaces, and cabinets)
    //     laundryRm: 1,     // Laundry room: 1 hour (sorting, cleaning surfaces, etc.)
    //     studyRm: 1,       // Study room: 1 hour (cleaning desk, organizing, etc.)
    //     extraRm: 1,       // Extra room: 1 hour (deep cleaning, organizing items)
    //     masterBedRm: 2,   // Master bedroom: 2 hours (includes cleaning and tidying up)
    //     pantry: 1,        // Pantry: 1 hour (cleaning shelves, organizing items)
    //     garage: 3         // Garage: 3 hours (deep cleaning, sorting, and organizing)
    // };

       // cleaningTime = {
    //     bathrooms: 1,     // 1 bathroom takes 1 hour (general cleaning)
    //     diningRm: 0.5,   // Dining room: 30 minutes (cleaning surfaces, sweeping)
    //     bedRms: 1,        // Each bedroom: 1 hour (vacuuming, organizing, tidying)
    //     livingRm: 1,      // Living room: 1 hour (cleaning furniture, floors)
    //     kitchen: 2,       // Kitchen: 2 hours (cleaning countertops, appliances, and floors)
    //     laundryRm: 0.5,   // Laundry room: 30 minutes (cleaning and sorting laundry)
    //     studyRm: 0.5,     // Study room: 30 minutes (organizing papers, cleaning desk)
    //     extraRm: 0.5,     // Extra room: 30 minutes (general tidying and cleaning)
    //     masterBedRm: 1,   // Master bedroom: 1 hour (vacuuming, organizing, making bed)
    //     pantry: 0.5,      // Pantry: 30 minutes (cleaning shelves, organizing food)
    //     garage: 1         // Garage: 1 hour (organizing tools, sweeping floors)
    // };

      // cleaningTime = {
    //     bathrooms: 0.5,    // 1 bathroom takes 30 minutes (basic cleaning, tidying surfaces)
    //     diningRm: 0.5,    // Dining room: 30 minutes (clearing clutter, wiping down surfaces)
    //     bedRms: 0.5,       // Each bedroom: 30 minutes (organizing, making the bed)
    //     livingRm: 0.5,     // Living room: 30 minutes (organizing clutter, tidying furniture)
    //     kitchen: 1,        // Kitchen: 1 hour (clearing counter, organizing items, cleaning surfaces)
    //     laundryRm: 0.5,    // Laundry room: 30 minutes (sorting laundry, tidying up)
    //     studyRm: 0.5,      // Study room: 30 minutes (organizing papers, clearing desk)
    //     extraRm: 0.5,      // Extra room: 30 minutes (tidying up, organizing items)
    //     masterBedRm: 0.5,  // Master bedroom: 30 minutes (organizing and tidying up)
    //     pantry: 0.5,       // Pantry: 30 minutes (organizing shelves, checking food)
    //     garage: 1          // Garage: 1 hour (organizing tools, moving things into place)
    // };

     // cleaningTime = {
    //     bathrooms: 0.25,    // 1 bathroom takes 15 minutes (light cleaning, wipe surfaces)
    //     diningRm: 0.25,    // Dining room: 15 minutes (quick wipe down, light tidying)
    //     bedRms: 0.25,       // Each bedroom: 15 minutes (making the bed, light tidying)
    //     livingRm: 0.25,     // Living room: 15 minutes (light tidying, fluffing cushions)
    //     kitchen: 0.5,       // Kitchen: 30 minutes (wiping down countertops, putting things away)
    //     laundryRm: 0.25,    // Laundry room: 15 minutes (folding clothes, tidying)
    //     studyRm: 0.25,      // Study room: 15 minutes (organizing desk, putting away papers)
    //     extraRm: 0.25,      // Extra room: 15 minutes (light tidying, organizing)
    //     masterBedRm: 0.25,  // Master bedroom: 15 minutes (making the bed, organizing)
    //     pantry: 0.25,       // Pantry: 15 minutes (organizing shelves, checking items)
    //     garage: 0.5         // Garage: 30 minutes (light sweeping, organizing items)
    // };

      // cleaningTime = {
    //     bathrooms: 0.1,    // 1 bathroom takes 6 minutes (just a quick check, maybe wiping down surfaces)
    //     diningRm: 0.1,    // Dining room: 6 minutes (quick wipe of the table, checking for crumbs)
    //     bedRms: 0.1,       // Each bedroom: 6 minutes (quick touch-up, fluffing pillows)
    //     livingRm: 0.1,     // Living room: 6 minutes (light tidying, fluffing cushions)
    //     kitchen: 0.25,     // Kitchen: 15 minutes (wiping down countertops, putting things away)
    //     laundryRm: 0.1,    // Laundry room: 6 minutes (folding clothes, tidying up)
    //     studyRm: 0.1,      // Study room: 6 minutes (organizing papers, checking desk)
    //     extraRm: 0.1,      // Extra room: 6 minutes (light touch-up, organizing)
    //     masterBedRm: 0.1,  // Master bedroom: 6 minutes (fluffing pillows, making the bed)
    //     pantry: 0.1,       // Pantry: 6 minutes (quick check, organizing shelves)
    //     garage: 0.25       // Garage: 15 minutes (sweeping, tidying up tools)
    // };

    //let totalTime = {}; // store total time to clean everything
// for (let key in Rooms) {
//     //console.log(`Rooms: ${Rooms[key]} for ${key}`);
//     //console.log(`Cleaning Time: ${cleaningTime[key]} for ${key}`);
//     totalTime[key] = Rooms[key] * cleaningTime[key];
// }

// console.log(totalTime);

// find task less than time available and add to array:
// let tasks = []; // arr of objects
// for (let key in totalTime) {
//     if (totalTime[key] < timeAvailable){
//         console.log(timeAvailable);

//         if (totalTime[key] !== 0) {
//             console.log(`tasks.push(${key}: ${totalTime[key]});`);
//             tasks.push({[key]: totalTime[key]});
//             console.log(`${timeAvailable} = ${timeAvailable} - ${totalTime[key]};`);
//             timeAvailable = timeAvailable - totalTime[key];
//         }
//     }
// }
