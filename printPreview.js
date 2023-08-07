"use strict";

export function printPreview(printPreviewButton) {
    printPreviewButton.addEventListener("click", function (event) {
        let toPrint = document.querySelector(".print-screen");
        let popupWindow = window.open("", "printWindow");
        popupWindow.document.open();
        popupWindow.document.write('<html><title>Print Preview</title><link rel="stylesheet" href="./style.css" media="screen"/></head>');
        popupWindow.document.write(toPrint.innerHTML);
        popupWindow.document.write('</html>');
        popupWindow.document.close();
    })
}