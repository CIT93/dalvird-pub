import {TBL, FORM} from "./global.js";
import {saveLS} from "./storage.js"

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "House Members", "House Size", "Total", "Actions"];
  headingTextArr.forEach(function(text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return (table);
  }

const renderTbl = data => {
  TBL.innerHTML = "";
  if (data.length !== 0) {
    const table = renderTblHeading(); // headings
    const tbody = renderTblBody(data); // tbody
    table.appendChild(tbody); 
    TBL.appendChild(table);
  }
}

 const onUpdate = (data, index) => {
  data.splice(index, 1); // delete entire object
  saveLS(data);
  renderTbl(data);
}

const  renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  btnDel.addEventListener("click", e => {
    // array.splice(start, deleteCount, item1, item2, ...);
    onUpdate(data, index);
  });re
  btnEdit.addEventListener("click", e => {
    FORM[1].value = obj.fname;
    FORM[2].value = obj.lname;
    FORM[3].value = obj.houseHoldMembers;
    FORM[4].value = obj.houseSize;
    onUpdate(data, index);
  });
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  return td;
}

 const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach(function(obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lname" && key !== "houseHoldPTS" && key !== "houseSizePts") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
      const td = renderTblBtn(obj, index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
  });

  return tbody;
}

export { renderTbl, renderTblHeading };