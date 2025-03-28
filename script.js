let isOn = false;

function appendValue(value) {
    if (isOn) {
        let display = document.getElementById("display");
        display.value = display.value === "0" ? value : display.value + value;
    }
}

function clearDisplay() {
    document.getElementById("display").value = "0";
}

function calculateResult() {
    if (isOn) {
        try {
            document.getElementById("display").value = eval(document.getElementById("display").value);
        } catch (e) {
            alert("Invalid Expression");
        }
    }
}

function calculateTrig(func) {
    if (isOn) {
        let num = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = Math[func](num * Math.PI / 180);
    }
}

function calculateSqrt() {
    if (isOn) {
        let num = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = num >= 0 ? Math.sqrt(num) : "Error";
    }
}

function calculateFactorial() {
    if (isOn) {
        let num = parseInt(document.getElementById("display").value);
        if (num < 0) {
            alert("Factorial of a negative number is undefined");
        } else {
            let fact = 1;
            for (let i = 1; i <= num; i++) {
                fact *= i;
            }
            document.getElementById("display").value = fact;
        }
    }
}

function turnOff() {
    document.getElementById("display").value = "";
    document.getElementById("display").disabled = true;
    isOn = false;
}

function turnOn() {
    isOn = true;
    document.getElementById("display").value = "0";
    document.getElementById("display").disabled = false;
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("calculator").classList.toggle("dark-mode");
}
