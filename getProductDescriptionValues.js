"use strict";

export function getProductDescriptionValues(nodeList, array) {
    for (const product of nodeList.values()) {
        array.push(product.value);
    }

    return array;
}