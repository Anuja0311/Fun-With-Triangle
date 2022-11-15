const inputs = document.querySelectorAll(".side-input");
const hypotaneusBtn = document.querySelector("#hypo-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypo(){
const sumOfSquares = calculateSumOfSquares(Number(inputs[0].value),Number(inputs[1].value));
const lengthOfHypotaneuse = Math.sqrt(sumOfSquares);
outputE1.innerText = "Length of Hypotaneuse is " +lengthOfHypotaneuse;
}
hypotaneusBtn.addEventListener('click',calculateHypo)
