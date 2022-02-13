document.getElementById('case-pluse').addEventListener('click', function () {
    const caseInputNumber = document.getElementById('case-number');
    const inputNumberText = caseInputNumber.value;
    const inputNumber = parseInt(inputNumberText);
    caseInputNumber.value = inputNumber + 1;
});

document.getElementById('case-minus').addEventListener('click', function () {
    const caseInputNumber = document.getElementById('case-number');
    const caseInputNumberText = caseInputNumber.value;
    const inputNumber = parseInt(caseInputNumberText);
    if (inputNumber > 0) {
        caseInputNumber.value = inputNumber - 1;
    }
});
