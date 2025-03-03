const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "Total"];
  
    headingTextArr.forEach(function(text) {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
    return (table);
  }

  // Coding challenge below:
function renderTbl(data) {
  const tblCreated = document.querySelector("table");
  if (tblCreated === null) {
    const table = renderTblHeading(); // create table heading
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
  
    data.forEach(function(text) {
      const tdName = document.createElement("td");
      const tdTotal = document.createElement("td");
      tdName.textContent = text['fname'];
      tdTotal.textContent = text['total'];
      tr.appendChild(tdName);
      tr.appendChild(tdTotal);
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
  else { // table is already created (no need for heading)
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    data.forEach(function(text) {
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdTotal = document.createElement("td");
      tdName.textContent = text['fname'];
      tdTotal.textContent = text['total'];
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