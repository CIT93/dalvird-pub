const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
  
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
    const table = renderTblHeading(); // create table heading
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const trTextArr = ["Dalvir", 3, "Large", 20];
  
    trTextArr.forEach(function(text) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
  
    const tdBtn = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Delete";
    tdBtn.appendChild(btnEdit);
    tdBtn.appendChild(btnDel);
    
    tr.appendChild(tdBtn);  
    tbody.appendChild(tr);
    table.appendChild(tbody);
    TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };


// we got error first because we didn't have 'type="module"', then it was
// because of the reference to TBL the index.html ID. Then we finally got 
// an error of cfpData but that was because of the debugging in console.