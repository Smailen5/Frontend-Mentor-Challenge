const input = document.getElementById("character-range");
const output = document.getElementById("character-length");
const thumb = document.getElementById("thumb");

console.log();

let val = parseFloat(input.value);
let min = parseFloat(input.min) || 0;
let max = parseFloat(input.max) || 100;

output.textContent = val;

function handleInput() {
  let val = parseFloat(input.value);
  let fillPercent = ((val - min) / (max - min)) * 100;
  input.style.background = "linear-gradient(to right, #A4FFAF 0%, #A4FFAF " + fillPercent + "%, rgb(15, 23, 42) " + fillPercent + "%)";
  output.textContent = val;
}

input.addEventListener("input", handleInput);
input.addEventListener("change", handleInput);

handleInput();
