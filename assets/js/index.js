document.getElementById("calc-btn").addEventListener("click", function () {
    calcTotal();
});

function calcTotal() {
    var twoEuros = document.getElementById("twoEuros").value * 2;
    var oneEuro = document.getElementById("oneEuro").value * 1;
    var fiftyCents = document.getElementById("fiftyCents").value * 0.5;
    var twentyCents = document.getElementById("twentyCents").value * 0.2;

    var tenCents = document.getElementById("tenCents").value * 0.1;
    var fiveCents = document.getElementById("fiveCents").value * 0.05;
    var twoCents = document.getElementById("twoCents").value * 0.02;
    var oneCent = document.getElementById("oneCent").value * 0.01;

    total = twoEuros + oneEuro + fiftyCents + twentyCents + tenCents + fiveCents + twoCents + oneCent
    console.log(total)
}