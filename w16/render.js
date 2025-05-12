import { calculateAvg, addRow} from "./average.js";
import { TBL, FORM} from "./global.js";
import { saveLS} from "./storage.js"

const renderTblHeading = function() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["First", "Last", "Footprint Total", "Actions"];
  headingTextArr.forEach(function(text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return (table);
  }

const renderTbl = function(data) {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading(); // headings
    const tbody = renderTblBody(data); // tbody
    table.appendChild(tbody); 
    table.id = "table-data";
    TBL.appendChild(table);
    const total = calculateAvg();  // get average
    addRow(total);                 // add to row
  }
}

 const onUpdate = function(data, index) {
  data.splice(index, 1); // delete entire object
  saveLS(data);
  renderTbl(data);
}

const  renderTblBtn = function(obj, index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  btnDel.addEventListener("click", function(e) {
    // array.splice(start, deleteCount, item1, item2, ...);
    onUpdate(data, index);
  });
  btnEdit.addEventListener("click", function(e) {
    FORM.firstname.value = obj.first;
    FORM.lastname.value = obj.last;
    FORM.housem.value = obj.houseMembers;
    FORM.houses.value = obj.houseSize;
    FORM.meat.value = obj.meat;
    FORM.diet.value = obj.diet;
    FORM.water.value =  obj.water;
    onUpdate(data, index);
  });
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  return td;
}

const renderTblBody = function(data) {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "last", "total" ];
     keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
     });
      const td = renderTblBtn(obj, index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
  });

  return tbody;
}

export { renderTbl, renderTblHeading };