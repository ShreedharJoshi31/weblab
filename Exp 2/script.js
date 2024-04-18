var displayValue = "";
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}
function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    }
    catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}
function clearDisplay() {
    displayValue = "";
    updateDisplay();
}
function updateDisplay() {
    var display = document.getElementById("display");
    display.value = displayValue;
}
