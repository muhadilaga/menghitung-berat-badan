document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    calculateButton.addEventListener('click', calculateIdealWeight);
});

function calculateIdealWeight() {
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    const height = parseFloat(heightInput.value);

    if (isNaN(height) || height <= 0) {
        resultDiv.textContent = 'Masukkan tinggi badan yang valid.';
        return;
    }

    const idealWeight = (height - 100) - ((height - 100) * 0.1);
    resultDiv.textContent = `Berat Badan Ideal Anda adalah: ${idealWeight.toFixed(2)} kg`;
}

function reset() {
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";

}
