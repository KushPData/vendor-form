"use strict";
export function makeStaticContainers(place, headingArray, dataArray) {

    const table = document.createElement("table");

    let headingRow = document.createElement("tr");
    for(let i = 0; i < headingArray.length; i++) {
        let tableHeading = document.createElement("th");
        tableHeading.textContent = headingArray[i];
        headingRow.appendChild(tableHeading);
    }

    table.appendChild(headingRow);

    let dataRow = document.createElement("tr");
    for(let i = 0; i < dataArray.length; i++) {
        let tableData = document.createElement("td");
        tableData.textContent = dataArray[i];
        dataRow.appendChild(tableData);
    }

    dataRow.classList.add("greater-height");
    table.appendChild(dataRow);

    place.appendChild(table);

    return place;
}
