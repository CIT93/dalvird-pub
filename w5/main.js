
const movieData = [
  { title: "The Great Indian Kitchen", year: 2021, rating: 8, watched:1  },
  { title: "What Happened to Monday", year: 2017, rating: 8, watched:1  },
  { title: "Bhai Taru Singh", year: 2018, rating: 10, watched:3 }
];

const output = document.getElementById("output");
let newHeading = document.createElement("h1");
newHeading.textContent = "Top Three Movies Rating:";
output.appendChild(newHeading);

// for (book of bookData) {
//   // let newH1 = document.createElement("h3");
//   // let newH2 = document.createElement("h3");
//   let newH3 = document.createElement("h3");
//   newH3.textContent = `${book.title} ${book.year} has a rating of ${book.rating}\n`;
//   output.appendChild(newH3);
// }
movieData.forEach(function(movie) {
  let newH1 = document.createElement("h3");
  newH1.textContent = `${movie.title} ${movie.year} has a rating of ${movie.rating}\n`;
  output.appendChild(newH1);

  if (movie.watched <= 1 && (movie.rating < 7 || movie.year < 2020)) {
    const lowTitle = document.createElement("h1");
    lowTitle.textContent = `Least Recommended Movie (or oldest movie): ${movie.title}`;
    const output_list = document.getElementById("recommendation");
    output_list.appendChild(lowTitle);
  }

  if (movie.watched > 1 && movie.rating > 7) {
    const newTitle = document.createElement("h1");
    newTitle.textContent = `Top Recommended Movie: ${movie.title}`;
    const output_list = document.getElementById("recommendation");
    output_list.appendChild(newTitle);
  }
});


const cfpData = [];
// function cfpDataObj(houseHoldMembers, houseSize, houseHoldPoints, houseSizePts, total) {
//   // this.houseHoldMembers = houseHoldMembers, 
//   // this.houseSize = houseSize, 
//   // this.houseHoldPTS = houseHoldPoints, 
//   // this.houseSizePts = houseSizePts, 
//   // this.total = total,
//   // displayOutput: function() {
//   //   console.log(
//   //    `House Hold Members: ${objName[houseHoldMembers]}\n 
//   //     House Hold Points: ${this.houseHoldPTS}\n
//   //     House size: ${this.houseSize}\n
//   //     House Size points: ${this.houseSizePts}
//   //     Total: ${this.total}`)
//   // }
// };

function determineHouseSizePts(size) {
    let houseSizePts = 0;
    if(size === "large") {
      houseSizePts = 10;
    } else if(size === "medium") {
      houseSizePts = 7;
    } else if (size === "small") {
      houseSizePts = 4;
    } else if (size === "apt") {
      houseSizePts = 2;
    }
      return houseSizePts;
  }
  
function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
      houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    }
     return houseHoldPoints;
}
  
function displayObjOutput(obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    const newH3 = document.createElement("h3");
    newH2.textContent = `Carbon Footprint total is ${obj.total}`;
    newH3.textContent = 'Based on Number in Household and Size of Home'
    newP.textContent = `This number is based on the number of members in the hold of ${obj.houseHoldMembers} (score: ${obj.houseHoldPTS})`;
    newP.textContent += `and a ${obj.houseSize} size of home (score: ${obj.houseSizePts})`
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePts;
    cfpData.push({
        houseHoldMembers: houseHoldMembers, 
        houseSize: houseSize, 
        houseHoldPTS: houseHoldPTS, 
        houseSizePts: houseSizePts, 
        total: total
    });
}
  
function displayOutput(){
    for(obj of cfpData) {
        console.log(obj);
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        const newH2 = document.createElement("h2");
        const newH3 = document.createElement("h3");
        newH2.textContent = `Carbon Footprint total is ${obj.total}`;
        newH3.textContent = 'Based on Number in Household and Size of Home'
        newP.textContent = `This number is based on the number of members in the hold of ${obj.houseHoldMembers} (score: ${obj.houseHoldPTS})`;
        newP.textContent += `and a ${obj.houseSize} size of home (score: ${obj.houseSizePts})`
        output.appendChild(newH2);
        output.appendChild(newH3);
        output.appendChild(newP);
    }
    // console.log(cfpData.length);
    // for (let i = 0; i < cfpData.length; i++) { // 28 times
    //     const output = document.getElementById("output");
    //     const newP = document.createElement("p");
    //     const newH2 = document.createElement("h2");
    //     const newH3 = document.createElement("h3");
    //     newH2.textContent = `Carbon Footprint total is ${cfpData[i][4]}`;
    //     newH3.textContent = 'Based on Number in Household and Size of Home'
    //     newP.textContent = `This number is based on the number of members in the hold of ${cfpData[i][0]} (score: ${cfpData[i][3]})`;
    //     newP.textContent += `and a ${cfpData[i][1]} size of home (score: ${cfpData[i][2]})`
    //     output.appendChild(newH2);
    //     output.appendChild(newH3);
    //     output.appendChild(newP);
    //     }
}
  
  // start(1, "apt");
  // start(2, "apt");
  // start(3, "apt");
  // start(4, "apt");
  // start(5, "apt");
  // start(6, "apt");
  // start(7, "apt");
  // start(1, "small");
  // start(2, "small");
  // start(3, "small");
  // start(4, "small");
  // start(5, "small");
  // start(6, "small");
  // start(7, "small");
  // start(1, "medium");
  // start(2, "medium");
  // start(3, "medium");
  // start(4, "medium");
  // start(5, "medium");
  // start(6, "medium");
  // start(7, "medium");
  // start(1, "large");
  // start(2, "large");
  // start(3, "large");
  // start(4, "large");
  // start(5, "large");
  // start(6, "large");
  // start(7, "large");
  
// displayOutput();