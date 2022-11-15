const inputs = document.querySelectorAll(".input-side1");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateMulti(b,h){
    const multiply = (b * h) ;
    return multiply;
}
function calculateArea(){
    const multiply = calculateMulti(Number(inputs[0].value),Number(inputs[1].value));
    const area = (multiply/2);
    outputEl.innerText = "Area of the triangle is "+area;
}
 
areaBtn.addEventListener('click',calculateArea);
