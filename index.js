document.getElementById('interest-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);

    const interest = (principal * rate * years) / 100;
    const total = principal + interest;

    document.getElementById('interest').innerText = interest.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
});
