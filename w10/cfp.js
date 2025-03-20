// default parameter set:
const determineHouseSizePts = (size="medium") => {
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
  
  // default set:
  const determineHouseHoldPts = (numberInHousehold=5) => {
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

export {determineHouseHoldPts, determineHouseSizePts};