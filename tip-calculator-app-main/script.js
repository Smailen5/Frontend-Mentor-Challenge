const billInput = document.querySelector("#bill-input");
const tipInput = document.querySelector("#tip-input");
const peopleInput = document.querySelector("#people-input");
const resetButton = document.querySelector("#reset-button");
const tipAmount = document.querySelector("#tip-amount");
const totalAmount = document.querySelector("#total-amount");

// inizializzo le variabili per poterle usare fuori dalle funzioni
let billNumber;
let tipNumber;
let peopleNumber;

billInput.addEventListener("input", function (event) {
  billNumber = Number(event.target.value);
  calculate(); // Chiamo calculate() ogni volta che il valore di bill cambia
});

tipInput.addEventListener("input", function (event) {
  tipNumber = Number(event.target.value);
  calculate(); // Chiamo calculate() ogni volta che il valore di tip cambia
});

peopleInput.addEventListener("input", function (event) {
  peopleNumber = Number(event.target.value);
  calculate(); // Chiamo calculate() ogni volta che il valore di people cambia
});

function calculate() {
  if (billNumber && tipNumber && peopleNumber) {
    const tip = (billNumber * (tipNumber / 100)) / peopleNumber;
    const total = billNumber / peopleNumber + tip;
    tipAmount.innerText = `$${tip.toFixed(2)}`;
    totalAmount.innerText = `$${total.toFixed(2)}`;
    console.log("Hai inserito tutti i valori. Calcolo effettuato.");
  } else {
    console.log("Inserisci tutti i valori per calcolare la mancia.");
  }
}

resetButton.addEventListener("click", function () {
  billInput.value = "";
  tipInput.value = "";
  peopleInput.value = "";
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
})