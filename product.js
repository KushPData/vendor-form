"use strict";
import { addProductValidation } from "./addProductValidation.js";
import { getProductDescriptionValues } from "./getProductDescriptionValues.js";

export class product {
    createProduct(add) {
        let numberOfProducts = 0;
        add.addEventListener("click", function (event) {
            event.preventDefault();
            numberOfProducts += 1;

            console.log(numberOfProducts);

            if (numberOfProducts >= 14) {
                const excessFeedback = document.querySelector(".excess-feedback");
                excessFeedback.classList.remove("d-none");
            } else {
                let productValue = document.querySelectorAll("#product-description");
                let productValueArray = [];
                productValueArray = getProductDescriptionValues(productValue, productValueArray);

                let quantityValue = document.querySelectorAll("#quantity");
                let quantityValueArray = [];
                quantityValueArray = getProductDescriptionValues(quantityValue, quantityValueArray);

                let unitValue = document.querySelectorAll("#unit-price");
                let unitValueArray = [];
                unitValueArray = getProductDescriptionValues(unitValue, unitValueArray);

                let validator = addProductValidation(productValueArray, quantityValueArray, unitValueArray);

                let finalValidator = true;

                for (let i = 0; i < validator.length; i++) {
                    if (validator[i] === false) {
                        finalValidator = false;
                        break;
                    }
                }

                if (finalValidator === true) {
                    const productDetails = document.querySelector(".product-details");

                    const oneProduct = document.createElement("div");
                    oneProduct.classList.add("one-product");

                    const name = document.createElement("div");
                    name.classList.add("form-element");

                    const labelName = document.createElement("label");
                    labelName.setAttribute("for", "product-description");
                    labelName.textContent = "Product Name/Description: ";
                    const inputName = document.createElement("input");
                    inputName.classList.add("input-box");
                    inputName.setAttribute("type", "text");
                    inputName.setAttribute("name", "product-description");
                    inputName.setAttribute("id", "product-description");

                    const nameFeedback = document.createElement("div");
                    nameFeedback.classList.add("invalid-input", "d-none", "name-feedback");
                    nameFeedback.textContent = "Please enter a product name!!!";

                    name.appendChild(labelName);
                    name.appendChild(inputName);
                    name.appendChild(nameFeedback);

                    oneProduct.appendChild(name);

                    const quantity = document.createElement("div");
                    quantity.classList.add("form-element");

                    const labelQuantity = document.createElement("label");
                    labelQuantity.setAttribute("for", "quantity");
                    labelQuantity.textContent = "Qty Approx: ";
                    const inputQuantity = document.createElement("input");
                    inputQuantity.classList.add("input-box");
                    inputQuantity.setAttribute("type", "text");
                    inputQuantity.setAttribute("name", "quantity");
                    inputQuantity.setAttribute("id", "quantity");

                    const quantityFeedback = document.createElement("div");
                    quantityFeedback.classList.add("invalid-input", "d-none", "quantity-feedback");
                    quantityFeedback.textContent = "Please enter quantity for your order!!!";

                    quantity.appendChild(labelQuantity);
                    quantity.appendChild(inputQuantity);
                    quantity.appendChild(quantityFeedback);

                    oneProduct.appendChild(quantity);

                    const unit = document.createElement("div");
                    unit.classList.add("form-element");

                    const labelUnit = document.createElement("label");
                    labelUnit.setAttribute("for", "unit-price");
                    labelUnit.textContent = "Unit Price: ";
                    const inputUnit = document.createElement("input");
                    inputUnit.classList.add("input-box");
                    inputUnit.setAttribute("type", "text");
                    inputUnit.setAttribute("name", "unit-price");
                    inputUnit.setAttribute("id", "unit-price");


                    const unitFeedback = document.createElement("div");
                    unitFeedback.classList.add("invalid-input", "d-none", "unit-feedback");
                    unitFeedback.textContent = "Please enter the unit price of the product!!!";

                    unit.appendChild(labelUnit);
                    unit.appendChild(inputUnit);
                    unit.appendChild(unitFeedback);

                    oneProduct.appendChild(unit);

                    productDetails.appendChild(oneProduct);
                }
            }

        })
    }
}