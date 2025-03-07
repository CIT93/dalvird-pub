const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  TBL.innerHTML = "";
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

function renderTbl(data) {
  const table = renderTblHeading(); // headings
  const tbody = renderTblBody(data); // tbody
  table.appendChild(tbody); 
  TBL.appendChild(table);
}

function renderTblBtn(index, data) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Delete";

  btnDel.addEventListener("click", function(e) {
    // array.splice(start, deleteCount, item1, item2, ...);
    data.splice(index, 1); // delete entire object
    renderTbl(data);
  });

  btnEdit.addEventListener("click", function(e) {
    let fnameInput = document.getElementsByName("firstname")[0];
    let lnameInput = document.getElementsByName("lastname")[0];
    let householdmInput = document.getElementsByName("housem")[0];
    let houseSizeInput = document.getElementsByName("houses")[0];

    fnameInput.value = data[index]['fname'];
    lnameInput.value = data[index]['lname'];
    householdmInput.value = data[index]['houseHoldMembers'];
    houseSizeInput.value = data[index]['houseSize'];

    data.splice(index, 1);

  });

  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  return td;
}

function renderTblBody(data) {
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
      const td = renderTblBtn(index, data);
      tr.appendChild(td);
      tbody.appendChild(tr);
  });

  return tbody;
}

export { renderTbl, renderTblHeading };