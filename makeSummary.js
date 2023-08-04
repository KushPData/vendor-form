"use script";

import { makeRow } from "./makeRow.js";

export function makeSummary(place, note, date, discount, otherCosts, gstVatRate, gstVatValue, total) {
    const noteDate = document.createElement("span");
    noteDate.classList.add("note-date");

    const notePlace = document.createElement("div");
    notePlace.classList.add("note-place");
    notePlace.textContent = "Note: " + note;

    const datePlace = document.createElement("div");
    datePlace.classList.add("date-place");
    datePlace.textContent = "Date: " + date;

    noteDate.appendChild(notePlace);
    noteDate.appendChild(datePlace);

    place.appendChild(noteDate);

    const calculationSignature = document.createElement("span");
    calculationSignature.classList.add("calculation-signature");

    const calculationTable = document.createElement("table");
    calculationTable.classList.add("calculation-table");

    const discountArray = ["Discount", discount];
    const otherCostsArray = ["Other Costs", otherCosts];
    const gstVatRateArray = ["GST/VAT Rate", gstVatRate];
    const gstVatValueArray = ["GST/VAT " + gstVatRate + "%", gstVatValue];
    const totalArray = ["Total", total];

    const discountRow = makeRow(discountArray);
    calculationTable.appendChild(discountRow);

    const otherCostsRow = makeRow(otherCostsArray);
    calculationTable.appendChild(otherCostsRow);

    const gstVatRateRow = makeRow(gstVatRateArray);
    calculationTable.appendChild(gstVatRateRow);

    const gstVatValueRow = makeRow(gstVatValueArray);
    calculationTable.appendChild(gstVatValueRow);

    const totalRow = makeRow(totalArray);
    calculationTable.appendChild(totalRow);

    calculationSignature.appendChild(calculationTable);

    const signature = document.createElement("div");
    signature.classList.add("signature");

    signature.textContent = "Authorized Signature";

    calculationSignature.appendChild(signature);

    place.appendChild(calculationSignature);

}