"use strict";

export function validateEach(value) {
let validator = true;

    if(Array.isArray(value)) {
        for(let i=0; i < value.length; i++) {
            if(value[i] === "" || value[i] === null) {
                validator = false;
                break;
            }
        }
    } else {
        if(value === "" || value === null) {
            validator = false;
        }
    }

    return validator;
}