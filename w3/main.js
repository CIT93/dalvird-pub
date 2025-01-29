
//function determineHouseHoldPts(membersInHousehold) {

    // If you live alone, then add 14 points to your carbon footprint.
    if (membersInHousehold === 1) {
        cfp += 14;
    // If you share a house or apartment with 1 other person, then add 12 points.
    } else if (membersInHousehold === 2) {
        cfp += 12;
    // If you share a house or apartment with 2 other people, then add 10 points.
    } else if (membersInHousehold === 3) {
        cfp += 10;
    // If you share a house or apartment with 3 other people, then add 8 points.
    } else if (membersInHousehold === 4) {
        cfp += 8;
    // If you share a house or apartment with 4 other people, then add 6 points.
    } else if (membersInHousehold === 5) {
        cfp += 6;
    // If you share a house or apartment with 5 other people, then add 4 points.
    } else if (membersInHousehold === 6) {
        cfp += 4;
    // If you share a house or apartment with more than 5 other people, then add 2 points.
    } else if (membersInHousehold > 6) {
        cfp += 2;
    }
    console.log(`Based on the number of members in the household ${membersInHousehold} the carbon points added are: ${cfp}.`)
//}

let cfp = 0;
const membersInHousehold = 1;
// determineHouseHoldPts(3)
// determineHouseHoldPts(4)