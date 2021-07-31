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
        answerA:"Andy",
        answerB: "Mo",
        answerC:"LeBron",
        answerD:"Bugs Bunny",
        correctAnswer: "LeBron"
    },
    { question: "I was born in Akron, Ohio and but I never played for the Cavaliers ",
        answerA:"Andy",
        answerB: "Curry",
        answerC:"LeBron",
        answerD:"Bugs Bunny",
        correctAnswer:"Curry"
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

function checkAnswer (event){
 let selected = event.target.value
  answerQuesOne = bioQuestions[0][selected]
  console.log(bioQuestions[0].correctAnswer)
  if(bioQuestions[0].correctAnswer === answerQuesOne){
      playerScore +=20
      console.log(playerScore)
      score.innerText = playerScore
    console.log("correct!")
    question2()
      }
    else{
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
// function checkAnswer2 (event){
//     let selected2 = event.target.value
//      answerQues2 = bioQuestions[1][selected2]
//      console.log(bioQuestions[1].correctAnswer)
//      if(bioQuestions[1].correctAnswer === answerQues2){
//          playerScore +=20
//          console.log(playerScore)
//          score.innerText = playerScore
//        console.log("correct!")
//        question2()
//          }
//        else{
//            console.log("incorrect")
//        }