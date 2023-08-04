"use strict";

export class dropdown {

    findArray(data, name) {
        let array = data[name];

        return array;
    }

    makeDropDownList(parent, array, value) {
        for (let i = 0; i < array.length; i++) {
            let option = document.createElement("option");
            if (typeof array[i] === 'object') {
                option.setAttribute("value", array[i][value]);
                option.innerHTML = array[i][value];
            } else {
                option.setAttribute("value", array[i]);
                option.innerHTML = array[i];
            }
    
            parent.appendChild(option);
        }
    }
}