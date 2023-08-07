"use strict";
import { dropdown } from "./dropdown.js";
import { table } from "./table.js";
import { product } from "./product.js";
import data from './public/vendorData.json' assert { type: "json" };
import { printPreview } from "./printPreview.js";

const vendors = new dropdown();
const vendorsList = vendors.findArray(data, "VendorList");
const vendorPlace = document.querySelector("#vendor-list");
vendors.makeDropDownList(vendorPlace, vendorsList, "VendorName");

const shipTo = new dropdown();
const shipToList = shipTo.findArray(data, "ShipTo");
const shipToPlace = document.querySelector("#ship-to");
vendors.makeDropDownList(shipToPlace, shipToList, "CompanyName");

const deliveryMethod = new dropdown();
const deliveryMethodList = deliveryMethod.findArray(data, "DeliveryMethod");
const deliveryMethodPlace = document.querySelector("#delivery-method");
vendors.makeDropDownList(deliveryMethodPlace, deliveryMethodList, "");

const paymentTerms = new dropdown();
const paymentTermsList = paymentTerms.findArray(data, "PaymentTerms");
const paymentTermsPlace = document.querySelector("#payment-terms");
vendors.makeDropDownList(paymentTermsPlace, paymentTermsList, "");

const add = document.querySelector(".add-button");
const addProduct = new product();
let numberOfProducts = 0;
addProduct.createProduct(add);

const submit = document.querySelector(".submit-button");
const summary = new table();

summary.createTable(submit);

const printPreviewButton = document.querySelector(".print-preview-button");
printPreview(printPreviewButton);