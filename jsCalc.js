var display = document.getElementById("display");

function addToDisplay(value) {
display.value += value;
}

function clearDisplay() {
display.value = "";
}

function calculate() {
var result = eval(display.value);
display.value = result;
}