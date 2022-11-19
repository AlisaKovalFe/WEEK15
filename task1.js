
function plus() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    if (Number(firstNumber) && Number(secondNumber)) {
        let result = (+firstNumber + +secondNumber);
        document.getElementById('result').innerHTML = result;
    } else {
        let result = 'Не посчитаю, введи число'; 
        document.getElementById('result').innerHTML = result;
    }
}

function minus() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    if (Number(firstNumber) && Number(secondNumber)) {
        let result = (firstNumber - secondNumber);
        document.getElementById('result').innerHTML = result;
    } else {
        let result = 'Не посчитаю, введи число'; 
        document.getElementById('result').innerHTML = result;
    }
}

function mult() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondnumber').value;
    if (Number(firstNumber) && Number(secondNumber)) {
        let result = (firstNumber * secondNumber);
        document.getElementById('result').innerHTML = result;
    } else {
        let result = 'Не посчитаю, введи число'; 
        document.getElementById('result').innerHTML = result;
    }
}

function divide() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondnumber').value;

    if (secondNumber == 0) {
        let result = 'На ноль делить нельзя';
        document.getElementById('result').innerHTML = result
    } else if (Number(firstNumber) && Number(secondNumber)) {
        let result = (firstNumber  / secondNumber);
        document.getElementById('result').innerHTML = result
    } else {
        let result = 'Не посчитаю, введи число'; 
        document.getElementById('result').innerHTML = result;
    }    
}
 

