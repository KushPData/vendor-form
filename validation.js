"use strict";

import { validateEach } from "./validateEach.js";

export function validation(date, poNumber, vendor, shipTo, nameArray, quantityArray, unitArray, deliveryMethod, paymentTerms, discount, otherCosts, gstVat, againstQuote) {
    let validator = [];

    if(validateEach(date)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".date-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(poNumber)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".po-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(vendor)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".vendor-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(shipTo)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".ship-to-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(nameArray)) {
        validator.push(true);
    } else {
        const place = document.querySelectorAll(".name-feedback");
        const lastElement = place[place.length - 1];
        lastElement.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(quantityArray)) {
        validator.push(true);
    } else {
        const place = document.querySelectorAll(".quantity-feedback");
        const lastElement = place[place.length - 1];
        lastElement.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(unitArray)) {
        validator.push(true);
    } else {
        const place = document.querySelectorAll(".unit-feedback");
        const lastElement = place[place.length - 1];
        lastElement.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(deliveryMethod)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".delivery-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(paymentTerms)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".payment-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(discount)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".discount-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(otherCosts)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".other-costs-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(validateEach(gstVat)) {
        validator.push(true);
    } else {
        const place = document.querySelector(".gst-vat-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }

    if(typeof againstQuote == 'number') {
        validator.push(true);
    } else {
        const place = document.querySelector(".against-quote-feedback");
        place.classList.remove("d-none");
        validator.push(false);
    }
    
    return validator;
}