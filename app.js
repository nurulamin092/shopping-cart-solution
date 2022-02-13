
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }

    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    //Update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}
document.getElementById('phone-pluse').
    addEventListener('click', function () {
        updateProductNumber('phone', 1219, true);
    });
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});


//case pluse
document.getElementById('case-pluse').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
//case minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

});
