"use strict";
const formInputs = document.getElementById("forms");
console.log("hello");
formInputs.addEventListener('submit', (event) => {
    event.preventDefault();
});
const myButton = document.querySelector("#myButton");
myButton === null || myButton === void 0 ? void 0 : myButton.addEventListener("click", () => {
    let typeInput = document.getElementById("type").value;
    let nameInput = document.getElementById("name").value;
    let detailsInput = document.getElementById("details").value;
    let amountInput = document.getElementById("amount").value;
    console.log(`${typeInput}, ${nameInput}, ${detailsInput}, ${amountInput}`);
    const HTMLElements = document.querySelector(".item-list");
    const wrapper = document.createElement("h3");
    wrapper.textContent = (`${typeInput}`);
    HTMLElements === null || HTMLElements === void 0 ? void 0 : HTMLElements.appendChild(wrapper);
    const HTMLElements1 = document.querySelector(".item-list");
    const wrapper1 = document.createElement("p");
    wrapper1.textContent = (`${nameInput} ${detailsInput} ${amountInput} ${detailsInput}`);
    HTMLElements === null || HTMLElements === void 0 ? void 0 : HTMLElements.appendChild(wrapper1);
});
