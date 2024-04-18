let displayValue: string = "";

function appendToDisplay(value: string): void {
  displayValue += value;
  updateDisplay();
}

function calculateResult(): void {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearDisplay(): void {
  displayValue = "";
  updateDisplay();
}

function updateDisplay(): void {
  const display = document.getElementById("display") as HTMLInputElement;
  display.value = displayValue;
}
