import { TBL, FORM } from "./global.js"
import { saveLS } from "./storage.js";


const renderTbl = function(userHouseData) {
    TBL.innerHTML = "";
    if (userHouseData.length !== 0) {
        const table = renderTblHead();
        const tbody = renderTblBody(userHouseData);
        table.appendChild(tbody);
        TBL.appendChild(table);
    }
}

const onUpdate = (userHouseData, index) => {
    userHouseData.splice(index,1);
    saveLS(userHouseData);
    renderTbl(userHouseData);
}

const renderTblBtn = (obj, index, userHouseData) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";
  btnEdit.addEventListener("click", function(e) {
    FORM.taskname.value = obj.task;
    FORM.houses.value = obj.houseSize;
    FORM.messs.value = obj.messSize;
    onUpdate(userHouseData, index);
  });
  btnDel.addEventListener("click", function() {
    onUpdate(userHouseData, index);
  });
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  return td;
}

/* This function creates the table heading */
const renderTblHead = () => {
    const headings = ["Task", "House Size (sqft)", "Mess Size", "Total Time", "Actions"];
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    headings.forEach(function(heading) {
        const th = document.createElement("th");
        th.textContent = heading;
        tr.appendChild(th);
    })
    thead.appendChild(tr);
    table.appendChild(thead);
    
    return table;
}

/* This function creates the table body */
const renderTblBody = (userHouseData) => {
    const tbody = document.createElement("tbody");
    userHouseData.forEach((user, index) => {
        const tr = document.createElement("tr");
        const keys = ["task", "houseSize", "messSize", "totalTime"];
        keys.forEach(key => {
            const td = document.createElement("td");
            td.textContent = user[key];
            tr.appendChild(td);
        })
        const tdBtn = renderTblBtn(user, index, userHouseData);
        tr.appendChild(tdBtn);
        tbody.appendChild(tr);
    });

    return tbody;
}

export { renderTbl };