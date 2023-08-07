"use strict";

export function printPreview(printPreviewButton) {
    printPreviewButton.addEventListener("click", function (event) {
        let printContents = document.querySelector(".print-screen").innerHTML;
        let originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();

        document.body.innerHTML = originalContents;
    })
}