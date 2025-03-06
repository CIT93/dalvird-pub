const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "House Members", "House Size", "Total"];
  
    headingTextArr.forEach(function(text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return (table);
  }

function renderTbl(data) {
  const tblCreated = document.querySelector("table");
  if (tblCreated === null) {
    const table = renderTblHeading();
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
  
    data.forEach(function(obj) {
      for (const [key, value] of Object.entries(obj)) {
        if (key === "lname" || key === "houseHoldPTS" || key === "houseSizePts") {
        }
        else {
          const td = document.createElement("td");
          td.textContent = obj[key];
          tr.appendChild(td);
        }
        // const tdName = document.createElement("td");
        // const tdTotal = document.createElement("td");
        // tdName.textContent = obj['fname'];
        // tdTotal.textContent = obj['total'];
        // tr.appendChild(tdName);
        // tr.appendChild(tdTotal);
      }
    });
  
    // const tdBtn = document.createElement("td");
    // const btnEdit = document.createElement("button");
    // const btnDel = document.createElement("button");
    // btnEdit.textContent = "Edit";
    // btnDel.textContent = "Delete";
    // tdBtn.appendChild(btnEdit);
    // tdBtn.appendChild(btnDel);
    // tr.appendChild(tdBtn); 

    tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
  else {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    data.forEach(function(obj) {
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdTotal = document.createElement("td");
      tdName.textContent = obj['fname'];
      tdTotal.textContent = obj['total'];
      tr.appendChild(tdName);
      tr.appendChild(tdTotal);
      tbody.appendChild(tr);
      tblCreated.appendChild(tbody);
    });
    // const tdBtn = document.createElement("td");
    // const btnEdit = document.createElement("button");
    // const btnDel = document.createElement("button");
    // btnEdit.textContent = "Edit";
    // btnDel.textContent = "Delete";
    // tdBtn.appendChild(btnEdit);
    // tdBtn.appendChild(btnDel);
    // tr.appendChild(tdBtn);
  }
}

export { renderTbl, renderTblHeading };