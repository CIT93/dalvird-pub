
const cfpData = [];

function determineHouseSizePts(size) {
    let sizePoints = 0;
    if (size === "large") {
        sizePoints = 10;
    }
    else if (size === "medium") {
        sizePoints = 7;
    }
    else if (size === "small") {
        sizePoints = 4;
    }
    else if (size === "apt") {
        sizePoints = 2;
    }
    else {
        console.log("No points added")
    }
    return sizePoints;
}


function determineHouseHoldPts(membersInHousehold) {
    let houseHoldPoints = 0;
    // If you live alone, then add 14 points to your carbon footprint.
    if (membersInHousehold === 1) {
        houseHoldPoints = 14;
    // If you share a house or apartment with 1 other person, then add 12 points.
    } else if (membersInHousehold === 2) {
        houseHoldPoints = 12;
    // If you share a house or apartment with 2 other people, then add 10 points.
    } else if (membersInHousehold === 3) {
        houseHoldPoints = 10;
    // If you share a house or apartment with 3 other people, then add 8 points.
    } else if (membersInHousehold === 4) {
        houseHoldPoints = 8;
    // If you share a house or apartment with 4 other people, then add 6 points.
    } else if (membersInHousehold === 5) {
        houseHoldPoints = 6;
    // If you share a house or apartment with 5 other people, then add 4 points.
    } else if (membersInHousehold === 6) {
        houseHoldPoints = 4;
    // If you share a house or apartment with more than 5 other people, then add 2 points.
    } else if (membersInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput () {
    for (arr of cfpData) {
        console.log(arr);
        const output = document.getElementById("output");
        const newP = document.createElement("h3");
        const newP1 = document.createElement("p");
        const newP2 = document.createElement("p");
        newP.textContent = `Carbon FootPrint total is ${arr[4]}:`;
        newP1.textContent = `A Household with ${arr[0]} members, results in ${arr[2]} points`;
        newP2.textContent = `House size of ${arr[1]}, results in ${arr[2]} points`;
    
        output.appendChild(newP);
        output.appendChild(newP1);
        output.appendChild(newP2);
    }
}

start(5, "apt");
start(4, "large");
start(3, "medium");

displayOutput()