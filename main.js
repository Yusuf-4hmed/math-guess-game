const questionBox = document.getElementById("question-box")

questionBox.innerText = ''
let firstNumber = ''
let secondNumber = ''
let answer = 0

const newQuestion = () => {
    firstNumber = Math.floor(Math.random() * 13);
    secondNumber = Math.floor(Math.random() * 13);
    questionBox.innerText = `${firstNumber} x ${secondNumber} = ?`;
    answer = firstNumber * secondNumber;
    answer = String(answer);
    console.log(answer)
}

newQuestion()

const inputBox = document.getElementById('input-box');
const reviewButton = document.getElementById('review-button')

const checkAnswer = () => {
    if (inputBox.value !== answer) {
        alert(`wrong lol. Correct answer: ${answer}`)
    } else {
        alert("correct yessirrr")
    }
    inputBox.value = ''
    newQuestion()
}

reviewButton.addEventListener('click' , checkAnswer)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkAnswer()
    }
})
