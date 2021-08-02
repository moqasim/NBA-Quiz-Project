const letsGo = document.querySelector("#btn")
const quizArea = document.querySelector(".bioArea")
const question = document.querySelector("#questions")
const questionNum = document.querySelector(".questionNumber")
const score = document.querySelector(".totalScore")
const answerbuttonA = document.querySelector(".a")
const answerbuttonB = document.querySelector(".b")
const answerbuttonC = document.querySelector(".c")
const answerbuttonD = document.querySelector(".d")
const answerBtnDiv = document.querySelector(".answerButtons")
var playerScore = 0 
const bioQuestions = [
    { question: "I was born in Akron, Ohio and I star in Space Jam 2 ",
        answerA:"Kevin Durant",
        answerB: "Kyrie irving",
        answerC:"LeBron James",
        answerD:"Jayson Tatum",
        correctAnswer: "LeBron James"
    },
    { question: "I was named after the japanese steak ",
        answerA:"Giannis Antetekounpo",
        answerB: "Steph Curry",
        answerC:"Kobe Bryant",
        answerD:"Kawhi Leonard",
        correctAnswer:"Kobe Bryant"
    }, 
    {
        question:"I have been to 6 finals and never lost",
        answerA: "Shaquille O'Neal",
        answerB:"Michael Jordan",
        answerC:"Allen Iverson",
        answerD:"Tim Duncan",
        correctAnswer:"Michael Jordan"
    },  
    {
        question:"I was once married Eva Longoria",
        answerA:"Tony Parker",
        answerB:"Kevin Love",
        answerC:"Carmelo Anthony",
        answerD:"Vince Carter",
        correctAnswer:"Tony Parker"
    }, 
    {
        question:'filler',
        answerA:'filler',
        answerB:'filler',
        answerC:'filler',
        answerD:'filler',
        correctAnswer:'filler'
    }        
]




function startGame() {
    console.log(bioQuestions[0].question)
    question.innerText = bioQuestions[0].question
    letsGo.style.display = "none"
    questionNum.innerHTML = "1"
    answerbuttonA.innerText = bioQuestions[0].answerA
    answerbuttonB.innerText = bioQuestions[0].answerB
    answerbuttonC.innerText = bioQuestions[0].answerC
    answerbuttonD.innerText = bioQuestions[0].answerD
    answerBtnDiv.style.display = "block"
}
letsGo.addEventListener("click", startGame)

function checkAnswer(event) {
    let currentQuestionIndex = questionNum.innerHTML - 1
    console.log(currentQuestionIndex)
    let selected = event.target.value
    let playerAnswer = bioQuestions[currentQuestionIndex][selected]
    console.log(playerAnswer, "is the player's answer")
    if (bioQuestions[currentQuestionIndex].correctAnswer === playerAnswer) {
        playerScore += 20
        score.innerText = playerScore
        console.log("correct!")
        if (currentQuestionIndex == 0) {
            question2()
        } else if (currentQuestionIndex == 1) {
            question3()
        }
        else if (currentQuestionIndex == 2){
            question4()
        }
        else if (currentQuestionIndex == 3){
            question5()
        }
        
    } else {
        console.log("incorrect")
    }    
}

answerbuttonC.addEventListener("click",checkAnswer)
answerbuttonA.addEventListener("click",checkAnswer)
answerbuttonB.addEventListener("click",checkAnswer)
answerbuttonD.addEventListener("click",checkAnswer)

function question2() {
    question.innerText = bioQuestions[1].question
    questionNum.innerHTML ="2"
    answerbuttonA.innerText = bioQuestions[1].answerA
    answerbuttonB.innerText = bioQuestions[1].answerB
    answerbuttonC.innerText = bioQuestions[1].answerC
    answerbuttonD.innerText = bioQuestions[1].answerD
}

function question3() {
    question.innerText = bioQuestions[2].question
    questionNum.innerHTML ="3"
    answerbuttonA.innerText = bioQuestions[2].answerA
    answerbuttonB.innerText = bioQuestions[2].answerB
    answerbuttonC.innerText = bioQuestions[2].answerC
    answerbuttonD.innerText = bioQuestions[2].answerD
}

function question4() {
    question.innerText = bioQuestions[3].question
    questionNum.innerHTML ="4"
    answerbuttonA.innerText = bioQuestions[3].answerA
    answerbuttonB.innerText = bioQuestions[3].answerB
    answerbuttonC.innerText = bioQuestions[3].answerC
    answerbuttonD.innerText = bioQuestions[3].answerD
}
function question5() {
    question.innerText = bioQuestions[4].question
    questionNum.innerHTML ="4"
    answerbuttonA.innerText = bioQuestions[4].answerA
    answerbuttonB.innerText = bioQuestions[4].answerB
    answerbuttonC.innerText = bioQuestions[4].answerC
    answerbuttonD.innerText = bioQuestions[4].answerD
}


