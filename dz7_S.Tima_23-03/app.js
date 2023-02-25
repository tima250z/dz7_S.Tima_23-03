function add(x, y,) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function multi(x, y) {
    return x / y;
}
function getOperator() {
    let operatorSelect = document.getElementById("operator");
    return operatorSelect.options[operatorSelect.selectedIndex].value;
}
function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = getOperator();
    let result;
    if (operator == "+") {
        result = add(num1, num2);
    } else if (operator == "-") {
        result = subtract(num1, num2);
    } else if (operator == "*") {
        result = multiply(num1, num2);
    }else if (operator == "/") {
        result = multi(num1, num2);
    } else {
        result = "Неправильная операция";
    }
    document.getElementById("result").value = result;
}
