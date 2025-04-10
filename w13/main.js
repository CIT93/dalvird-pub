const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

FORM.addEventListener("submit", function(e) {
    e.preventDefault();

    OUTPUT.textContent = "";

    const eType = FORM.exercise.value;
    const eReps = FORM.reps.value;
    const eMins = FORM.minutes.value;
    startWrkout(eType, eReps, eMins).then(updateDOM).catch(onErr);

    FORM.reset();
});

const onErr = (message) => {
  updateDOM(message);
}

const updateDOM = (message) => {
  const h4 = document.createElement("h4");
  h4.textContent = message;
  OUTPUT.appendChild(h4);
}

const startWrkout = (type, reps, mins) => {

  return new Promise(function(resolve, reject) {
    if (parseInt(mins) === 0) {
      reject(`Cannot time: ${mins} mins`);
    } else {
      OUTPUT.textContent = `Start ${type} <> Goal reps is ${reps} <> in ${mins} minutes!`;
      setTimeout(() => {
        resolve(`Stop ${type}`)
      },mins * 2000)
    }
  })
}

// const start = document.createElement("h3");
//     start.textContent = `Start ${eType}! Goal: ${eReps} reps`;
//     OUTPUT.appendChild(start);

// const timer = (ms) => {
//   return new Promise(function(resolve, reject){
//     if (ms === "") {
//       reject("Time selection");
//     } else {
//     setTimeout(() => { resolve("Workout complete");}, ms);
//     }
//   });
// }

const error = (message) => {
  const end = document.createElement("h3");
  end.textContent = `Error: ${message}`;
  OUTPUT.appendChild(end);
}

const minutesToMilliseconds = mins => mins * 2000; //60000 if a minute, 2000 == 2 seconds

function workoutDone(message) {
  const end = document.createElement("h3");
  end.textContent = `STOP! ${message}`;
  OUTPUT.appendChild(end);
}