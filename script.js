let displayValue = "0";

function addToDisplay(value) {
  if (displayValue === "0" && value !== ".") {
    displayValue = "";
  }
  displayValue += value;
  updateDisplay(displayValue);
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay(displayValue);
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    updateDisplay(displayValue);
  } catch (error) {
    displayValue = "Error";
    updateDisplay(displayValue);
  }
}
function deleteDisplay() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay(displayValue);
}
function updateDisplay(value) {
  document.getElementById("display").textContent = value;
}
