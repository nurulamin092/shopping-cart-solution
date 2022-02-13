
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}

function calculateTotal() {
    const phoneNumber = getInputValue('phone') * 1219;
    const caseNumber = getInputValue('case') * 59;
    const subTotal = phoneNumber + caseNumber;
    const taxAmount = subTotal / 10;
    const totalPrice = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}

function updateNumber(product, price, isIncrease) {
    const caseInputNumber = document.getElementById(product + '-number');
    let productNumber = parseInt(caseInputNumber.value);
    if (isIncrease == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1;
    }
    caseInputNumber.value = productNumber;

    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;
    calculateTotal();

}

document.getElementById('phone-pluse').addEventListener('click', function () {
    updateNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone', 1219, false)
});

document.getElementById('case-pluse').addEventListener('click', function () {
    updateNumber('case', 59, true)
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber('case', 59, false)
});