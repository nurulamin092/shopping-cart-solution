
function updateInputNumber(isIncreasing) {
    const caseInputNumber = document.getElementById('case-number');
    const caseInputNumberText = caseInputNumber.value;
    const inputNumber = parseInt(caseInputNumberText);
    if (isIncreasing == true) {
        caseInputNumber.value = inputNumber + 1;
    }

    else if (inputNumber > 0) {
        caseInputNumber.value = inputNumber - 1;
    }

}


document.getElementById('case-pluse').addEventListener('click', function () {
    updateInputNumber(true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateInputNumber(false);

});
