
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