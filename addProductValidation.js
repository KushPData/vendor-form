"use strict";
import { validateEach } from "./validateEach.js";

export function addProductValidation(nameArray, quantityArray, unitArray) {

    let validator = [];

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

    return validator;
}