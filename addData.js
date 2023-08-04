"use strict";


export function addData(serialNumber, productName, quantity, unitPrice, total) {
    const newRow = document.createElement("tr");

    const addSerialNumber = document.createElement("td");
    addSerialNumber.textContent = serialNumber;
    newRow.appendChild(addSerialNumber);

    const addProduct = document.createElement("td");
    addProduct.textContent = productName;
    newRow.appendChild(addProduct);

    const addQuantity = document.createElement("td");
    addQuantity.textContent = quantity;
    newRow.appendChild(addQuantity);

    const addUnit = document.createElement("td");
    addUnit.textContent = unitPrice;
    newRow.appendChild(addUnit);

    const addTotal = document.createElement("td");
    addTotal.textContent = total;
    newRow.appendChild(addTotal);

    return newRow;
}
