const rangeInput = document.querySelector("#amount-range-input");
const rangeLabel = document.querySelector("#amount-range-label");
const rangeMonthInput = document.querySelector("#month-range-input");
const rangeMonthLabel = document.querySelector("#month-range-label");
const payment = document.querySelector("#monthly-payment");

rangeInput.addEventListener("input", function(){
    rangeLabel.textContent = this.value
    updateMonthlyPayment();
})

rangeMonthInput.addEventListener("input", function(){
    rangeMonthLabel.textContent = this.value
    updateMonthlyPayment();
})

const monthlyInterestSpan = document.querySelector('#monthly-interest');

rangeMonthInput.addEventListener('input', () => {
    const value = parseInt(rangeMonthInput.value);
    
    if (value >= 3 && value <= 6) {
        monthlyInterestSpan.textContent = "12";
    } else if (value >= 7 && value <= 9) {
        monthlyInterestSpan.textContent = "14";
    } else if (value >= 10 && value <= 12) {
    monthlyInterestSpan.textContent = "15.5";
} else if (value >= 13 && value <= 18) {
    monthlyInterestSpan.textContent = "16.5";
} else if (value >= 19) {
    monthlyInterestSpan.textContent = "17";
}
})


updateMonthlyPayment();
function updateMonthlyPayment() {
    const amount = parseInt(rangeInput.value);
    const months = parseInt(rangeMonthInput.value);
    const interest = parseInt(monthlyInterestSpan.textContent)/100;
    const monthlyPayment = Math.round((amount + (amount * interest)) / months);
    payment.textContent = monthlyPayment;
}