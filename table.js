"use strict";

import { addData } from "./addData.js";
import { makeStaticContainers } from "./makeStaticContainers.js";
import { getProductDescriptionValues } from "./getProductDescriptionValues.js";
import { validation } from "./validation.js";
import { calculate } from "./calculate.js";
import { makeSummary } from "./makeSummary.js";

export class table {
    createTable(submit) {
        submit.addEventListener("click", function (event) {
            event.preventDefault();

            const printPreview = document.querySelector(".print-preview");
            printPreview.classList.remove("d-none");

            let date = document.querySelector("#order-date").value;
            let poNumber = document.querySelector("#po-number").value;
            let vendorValue = document.getElementById("vendor-list").value;
            let shipToValue = document.getElementById("ship-to").value;
            let deliveryValue = document.getElementById("delivery-method").value;
            let paymentValue = document.getElementById("payment-terms").value;
            let againstQuoteValue = parseInt(document.getElementById("against-quote").value);
            let discountValue = document.getElementById("discount").value;
            let otherCostsValue = document.getElementById("other-costs").value;
            let noteValue = document.getElementById("note").value;
            console.log(otherCostsValue);
            let gstVatValue = document.getElementById("gst-vat-rate").value;
            console.log(gstVatValue);

            let productValue = document.querySelectorAll("#product-description");
            let productValueArray = [];
            productValueArray = getProductDescriptionValues(productValue, productValueArray);

            let quantityValue = document.querySelectorAll("#quantity");
            let quantityValueArray = [];
            quantityValueArray = getProductDescriptionValues(quantityValue, quantityValueArray);

            let unitValue = document.querySelectorAll("#unit-price");
            let unitValueArray = [];
            unitValueArray = getProductDescriptionValues(unitValue, unitValueArray);

            let validator = validation(date, poNumber, vendorValue, shipToValue, productValueArray, quantityValueArray, unitValueArray, deliveryValue, paymentValue, discountValue, otherCostsValue, gstVatValue, againstQuoteValue);

            let finalValidator = true;

            for(let i = 0; i < validator.length; i++){
                if(validator[i] === false) {
                    finalValidator = false;
                    break;
                }
            }

            if (finalValidator === true) {
                const summaryContainer = document.querySelector(".summary-container");
                summaryContainer.classList.remove("d-none");

                // const datePOHeading = ["Date ", date];
                // const datePOData = ["P.O. Number", poNumber]
                // const datePoPlace = document.querySelector(".date-po");
                // const getDatePO = makeStaticContainers(datePoPlace, datePOHeading, datePOData);
                // getDatePO.classList.add("date-po-style");
                // const addDatePO = document.querySelector(".date-po-container");
                // addDatePO.appendChild(getDatePO);

                const datePoContainer = document.querySelector(".date-po-container");
                const datePoTable = document.createElement("table");
                const dateArray = ["Date: ", date];
                const poArray = ["P.O. Number: ", poNumber];

                const dateRow = document.createElement("tr");
                for(let i = 0; i < dateArray.length; i++) {
                    const dateData = document.createElement("td");
                    dateData.textContent = dateArray[i];
                    dateRow.appendChild(dateData);
                }

                datePoTable.appendChild(dateRow);

                const poRow = document.createElement("tr");
                for(let i = 0; i < poArray.length; i++) {
                    const poData = document.createElement("td");
                    poData.textContent = poArray[i];
                    poRow.appendChild(poData);
                }

                datePoTable.appendChild(poRow);

                datePoContainer.appendChild(datePoTable);

                const vendorShipToHeading = ["Vendor", "Ship To"];
                const vendorShipToData = [vendorValue, shipToValue];
                const vendorShipToPlace = document.querySelector(".vendor-ship-to");
                const getVendorShipTo = makeStaticContainers(vendorShipToPlace, vendorShipToHeading, vendorShipToData);
                const stakeholderContainer = document.querySelector(".order-stakeholders-container");
                stakeholderContainer.appendChild(getVendorShipTo);

                const deliveryPaymentAgainstQuoteHeading = ["Delivery Method", "Payment Terms", "Against Quote No:"];
                const deliveryPaymentAgainstQuoteData = [deliveryValue, paymentValue, againstQuoteValue];
                const deliveryPaymentPlace = document.querySelector(".delivery-payment");
                const getDeliveryPayment = makeStaticContainers(deliveryPaymentPlace, deliveryPaymentAgainstQuoteHeading, deliveryPaymentAgainstQuoteData);
                const logisticsContainer = document.querySelector(".order-logistics-container");
                logisticsContainer.appendChild(getDeliveryPayment);


                let grandTotal = 0;

                const rowsArray = [];
                for (let i = 0; i < productValueArray.length; i++) {
                    rowsArray.push(addData(i + 1, productValueArray[i], quantityValueArray[i], unitValueArray[i], quantityValueArray[i] * unitValueArray[i]));
                    grandTotal = grandTotal + (quantityValueArray[i] * unitValueArray[i]);
                }

                const numberOfRows = rowsArray.length;

                if(numberOfRows < 15) {
                    for(let i = 0; i < 15 - numberOfRows; i++) {
                        rowsArray.push(addData("","","","",""));
                    }
                }


                rowsArray.push(addData("", "", "", "Total Excl. Tax", grandTotal));

                const intermediateGrandTotal = ((parseInt(grandTotal) + parseInt(otherCostsValue)) - parseInt(discountValue));

                const gstVat = calculate(intermediateGrandTotal, gstVatValue);


                const finalGrandTotal = intermediateGrandTotal + gstVat;

                const table = document.querySelector(".summary-table");
                for (let i = 0; i < rowsArray.length; i++) {
                    table.appendChild(rowsArray[i]);
                }

                let additionalInfoContainer = document.querySelector(".additional-info-container");

                additionalInfoContainer = makeSummary(additionalInfoContainer, noteValue, date, discountValue, otherCostsValue, gstVatValue, gstVat, finalGrandTotal);
            }

        })
    }
}