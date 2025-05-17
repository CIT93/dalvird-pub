import { cfpData } from "./storage.js";

const calculateAvg = () => {
    // let total = 0;
    // cfpData.forEach((object, index) => {
    // Object.entries(object).forEach(([key, value]) => {
    //     if (key === "total") {
    //     console.log(`key: ${key} value: ${value}`);
    //     total = value + total;
    //     }
    // });
    // })
    const totalArray = cfpData.map((data) => {
      return data.total}); //returns data.total
    //console.log("total array: " + totalArray);
    const total = totalArray.reduce((sum, fpScores) => sum + fpScores, 0);
    //console.log("total " + total);
    return total / totalArray.length;
}

const addRow = (avg) => {
    const tableID = document.getElementById("table-data");
    let newRow = tableID.insertRow(-1);     //inserts row at bottom
    //const len = Object.keys(cfpData[0]).length;
    const len = 3;
   for (let i = 0; i < len; i++) {
    let newCell = newRow.insertCell(i);     //will enter new 6 cells
   }
    newRow.style.backgroundColor = "rgba(3, 125, 48, 0.77)";
    newRow.cells[1].innerText = "Average FP score";
    newRow.cells[2].innerText = avg;
  }
  

export { calculateAvg, addRow };

