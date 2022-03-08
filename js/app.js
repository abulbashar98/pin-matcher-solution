
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('pin is not a 4 digit number', pin)
        return getPin()
    }
}



function generatePin() {

    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}



document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    let calcInput = document.getElementById('calc-input');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

})



function verifyPin() {

    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('calc-input').value;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('fail-error');

    if (pin == typedNumbers) {

        successMessage.style.display = 'block'
        errorMessage.style.display = 'none'
    }
    else {
        errorMessage.style.display = 'block'
        successMessage.style.display = 'none'
    }
}