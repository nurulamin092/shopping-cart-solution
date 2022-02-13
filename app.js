
function updateInputNumber(product, isIncreasing) {
    const caseInputNumber = document.getElementById(product + '-number');
    const caseInputNumberText = caseInputNumber.value;
    let inputNumber = parseInt(caseInputNumberText);
    if (isIncreasing == true) {
        inputNumber = inputNumber + 1;
    }

    else if (inputNumber > 0) {
        inputNumber = inputNumber - 1;
    }
    caseInputNumber.value = inputNumber;
    const caseTotal = document.getElementById('case-total', product);
    caseTotal.innerText = inputNumber * 59;
}

document.getElementById('phone-pluse').addEventListener('click', function () {
    updateInputNumber('phone', true);
    console.log("bismillah");
});
/* document.getElementById('phone-minus').addEventListener('click', function () {
    console.log('Alhamdulillah');
}); */


//case pluse
document.getElementById('case-pluse').addEventListener('click', function () {
    updateInputNumber('case', true);
});
//case minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateInputNumber('case', false);

});
