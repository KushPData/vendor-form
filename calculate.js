"use strict";

export function calculate(total, rate) {
    console.log(total);
    console.log(rate)
    let value = (rate / 100) * total;
    console.log(value);
    return value;
}