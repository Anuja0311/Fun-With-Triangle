const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-btn");
const outputE1 = document.querySelector("#output");

const correctAnswer = ["90°","right angled"];

function calculateAnswer(){
    let i = 0;
    let score = 0;
const formResult = new FormData(quizForm);
for(let value of formResult.values()){
    if(value===correctAnswer[i]){
        score+=1;
    }
    i+=1;
}
outputE1.innerText= "Your score is" + score;
} 

submitButton.addEventListener('click',calculateAnswer);