let currentInput = "";

const inputField = document.getElementById("input");

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== "" && !isNaN(currentInput.charAt(currentInput.length - 1))) {
        currentInput += ` ${operator} `;
        updateDisplay();
    }
}

function calculate() {
    try {
        currentInput = currentInput.replace("÷", "/").replace("×", "*").replace("%", "/100");
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}

function sqrt() {
    if (currentInput) {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function clearInput() {
    currentInput = "";
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    inputField.value = currentInput;
}

// Event listeners
document.getElementById("clear").addEventListener("click", clearInput);
document.getElementById("backspace").addEventListener("click", backspace);
