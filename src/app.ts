const formInputs = document.getElementById("forms") as HTMLFormElement;
console.log("hello")
formInputs.addEventListener('submit', (event) => {
    event.preventDefault()
})

const myButton = document.querySelector("#myButton") as HTMLButtonElement;

myButton?.addEventListener("click", () => {
let typeInput = (document.getElementById("type") as HTMLInputElement).value;
let nameInput = (document.getElementById("name") as HTMLInputElement).value;
let detailsInput = (document.getElementById("details") as HTMLInputElement).value;
let amountInput = (document.getElementById("amount") as HTMLInputElement).value;
console.log(`${typeInput}, ${nameInput}, ${detailsInput}, ${amountInput}`) 

const HTMLElements = document.querySelector(".item-list")
const wrapper = document.createElement("h3")
wrapper.textContent = (`${typeInput}`)
HTMLElements?.appendChild(wrapper)


const HTMLElements1 = document.querySelector(".item-list")
const wrapper1 = document.createElement("p")
wrapper1.textContent = (`Anda ${nameInput} telah ${detailsInput} ${amountInput} untuk ${detailsInput}`)
HTMLElements?.appendChild(wrapper1)
});

