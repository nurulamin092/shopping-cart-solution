document.getElementById('case-pluse').addEventListener('click', function () {
    const caseInputNumber = document.getElementById('case-number');
    const inputNumberText = caseInputNumber.value;
    const inputNumber = parseInt(inputNumberText);
    caseInputNumber.value = inputNumber + 1;
});