const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");

FORM.addEventListener("submit", function(e) {
    e.preventDefault();

    OUTPUT.textContent = "";

    const eType = FORM.exercise.value;
    const eReps = FORM.reps.value;
    const eMins = FORM.minutes.value;

    const start = document.createElement("h3");
    start.textContent = `Start ${eType}! Goal: ${eReps} reps`;
    OUTPUT.appendChild(start);

    //const milliseconds = minutesToMilliseconds(eMins);    // converting minutes to milliseconds
    timer(eMins).then(workoutDone)
    .catch(error)

    FORM.reset();

});

const timer = (ms) => {
  return new Promise(function(resolve, reject){
    if (ms === "") {
      reject("Time selection");
    } else {
    setTimeout(() => { resolve("Workout complete");}, ms);
    }
  });
}

const error = (message) => {
  const end = document.createElement("h3");
  end.textContent = `Error: ${message}`;
  OUTPUT.appendChild(end);
}

//  const setTimer = (callback, mili) => {
//   setTimeout(() => {
//     callback();
//   }, mili);
// }

const minutesToMilliseconds = mins => mins * 2000; //60000 if a minute, 2000 == 2 seconds

function workoutDone(message) {
  const end = document.createElement("h3");
  end.textContent = `STOP! ${message}`;
  OUTPUT.appendChild(end);
}