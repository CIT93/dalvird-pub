
const saveLS = function(cfpData) {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}

// const saveAVG = avg => {
//     const serializedAvg = JSON.stringify(avg);
//     localStorage.setItem("avg", serializedAvg);
// }

// const getAVG = function () {
//     const retrievedAvg = localStorage.getItem("avg");
//     if (retrievedAvg !== null) {
//         return JSON.parse(retrievedAvg);
//     }
//     else {
//         return 0;
//     }
// }

const getLS = function() {
    const retrievedArr = localStorage.getItem("cfp");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    }
    else {
        return [];
    }
}

const cfpData = getLS();

export {cfpData, saveLS, getLS};
