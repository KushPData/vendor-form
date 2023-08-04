"use strict";

export function makeRow(array) {
    const row = document.createElement("tr");

    for(let i = 0; i < array.length; i++) {
        const data = document.createElement("td");
        data.textContent = array[i];
        row.appendChild(data);
    }

    return row;
}