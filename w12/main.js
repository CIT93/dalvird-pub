const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
//const TIMER = document.getElementById("timer");

FORM.addEventListener("submit", function(e) {  //callback
    e.preventDefault();

    OUTPUT.textContent = "";

    const eType = FORM.exercise.value;
    const eReps = FORM.reps.value;
    const eMins = FORM.minutes.value;

    const start = document.createElement("h3");
    start.textContent = `Start ${eType}! Goal: ${eReps} reps`;
    OUTPUT.appendChild(start);

    // const timer = document.createElement("p");
    // timer.textContent = mins
    // TIMER.appendChild(timer);

    const miliTime = minutesToMili(eMins);
    setTimer(workoutDone, miliTime);

    FORM.reset();

});

 const setTimer = (callback, mili) => {
  setTimeout(() => {
    callback();
  }, mili);
}

const minutesToMili = mins => mins * 2000; //60000

function workoutDone() {
  const end = document.createElement("h3");
  end.textContent = "STOP!";
  OUTPUT.appendChild(end);
}