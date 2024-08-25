document.addEventListener('keydown', function(event) {
    if (isNumeric(event.key)) {
        insert(event.key);
    } else if (isOperator(event.key)) {
        insert(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        clearLast();
    } else {
        alert("Only numbers are allowed");
    }
});

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function isOperator(value) {
    return ['+', '-', '*', '/', '%'].includes(value);
}

function insert(value) {
    let display = document.getElementById('display');
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert("Invalid Expression");
        clearDisplay();
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
}

function clearLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === "") {
        display.value = "0";
    }
}
