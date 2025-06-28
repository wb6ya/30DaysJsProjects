const display = document.querySelector('#display');
let msg = document.createElement('div');

function calculate() {
    msg.remove()
    const value = display.value.trim();

    // يتحقق هل ينتهي برمز عملية
    if (value.endsWith('+') || value.endsWith('-') || value.endsWith('*') || value.endsWith('/')) {
        showError('Please enter a valid expression');
        return;
    }

    // يتحقق من القسمة على صفر
    if (/\/0(?!\d)/.test(value)) {
        showError('Division by zero is not allowed');
        return;
    }

    try {
        display.value = eval(value);
    } catch (error) {
        showError('Invalid expression');
    }
}

function showError(message) {

    msg.className = 'alert alert-danger';
    msg.innerText = message;
    display.parentElement.appendChild(msg);

}
