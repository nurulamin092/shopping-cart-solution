
function updateInputNumber(isIncreasing) {
    const caseInputNumber = document.getElementById('case-number');
    const caseInputNumberText = caseInputNumber.value;
    let inputNumber = parseInt(caseInputNumberText);
    if (isIncreasing == true) {
        inputNumber = inputNumber + 1;
    }

    else if (inputNumber > 0) {
        inputNumber = inputNumber - 1;
    }
    caseInputNumber.value = inputNumber;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = inputNumber * 59;
}


document.getElementById('case-pluse').addEventListener('click', function () {
    updateInputNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateInputNumber(false);

});
