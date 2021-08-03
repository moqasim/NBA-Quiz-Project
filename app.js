const letsGo = document.querySelector("#btn")
const reset = document.querySelector(".resetButton")
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
        question:"I have been to 6 NBA finals and never lost",
        answerA: "Shaquille O'Neal",
        answerB:"Michael Jordan",
        answerC:"Allen Iverson",
        answerD:"Tim Duncan",
        correctAnswer:"Michael Jordan"
    },  
    {
        question:"I was once married to Eva Longoria",
        answerA:"Tony Parker",
        answerB:"Kevin Love",
        answerC:"Carmelo Anthony",
        answerD:"Vince Carter",
        correctAnswer:"Tony Parker"
    }, 
    {
        question:"I was born in the same hospital as LeBron James",
        answerA:"Trae Young",
        answerB:"Devin Booker",
        answerC:"Chris Paul",
        answerD:"Steph Curry",
        correctAnswer:"Steph Curry"
    },
    {
        question:"I was born in Melbourne, Australia and I believe the earth is flat",
        answerA:"Jimmy Butler",
        answerB:"Kyrie Irving",
        answerC:"Ben Simmons",
        answerD:"Rudy Gobert",
        correctAnswer:"Kyrie Irving"
    },
    {
        question:"I am called the Greek Freak on occasion",
        answerA:"Nikola Jokic",
        answerB:"Bam Adebayo",
        answerC:"Luka Doncic",
        answerD:"Giannis Antetekounpo",
        correctAnswer:"Giannis Antetekounpo"
    },
    {
        question:"My uncle co-founded the Beach Boys",
        answerA:"Kevin Love",
        answerB:"Mike Dunleavey",
        answerC:"DJ Wilson",
        answerD:"Paul Watson",
        correctAnswer:"Kevin Love"
    },
    {
        question:"I actually wanted to be a Weatherman before a NBA player",
        answerA:"Anthony Davis",
        answerB:"Russell Westbrook",
        answerC:"Kevin Durant",
        answerD:"Joel Embiid",
        correctAnswer:"Kevin Durant"
    },
    {
        question:"I only made 1 three-point shot ever in my entire career",
        answerA:"Shaquille O'Neal",
        answerB:"Yao Ming",
        answerC:"Kareem Abdul-Jabbar",
        answerD:"Scottie Pippen",
        correctAnswer:"Shaquille O'Neal"
    },

]




function startGame() {
    console.log(bioQuestions[0].question)
    question.innerText = bioQuestions[0].question
    letsGo.style.display = "none"
    questionNum.innerHTML = "1"
    score.innerHTML ="0"
    answerbuttonA.innerText = bioQuestions[0].answerA
    answerbuttonB.innerText = bioQuestions[0].answerB
    answerbuttonC.innerText = bioQuestions[0].answerC
    answerbuttonD.innerText = bioQuestions[0].answerD
    answerBtnDiv.style.display = "block"
}
letsGo.addEventListener("click", startGame)
reset.addEventListener("click",startGame )

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
        
        
        
    } else {
        console.log("incorrect")
    }  
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
    else if (currentQuestionIndex == 4){
        question6()
    }
    else if (currentQuestionIndex == 5){
        question7()
    }
    else if (currentQuestionIndex == 6){
        question8()
    }
    else if (currentQuestionIndex == 7){
        question9()
    }
    else if (currentQuestionIndex == 8){
        question10()
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
    questionNum.innerHTML ="5"
    answerbuttonA.innerText = bioQuestions[4].answerA
    answerbuttonB.innerText = bioQuestions[4].answerB
    answerbuttonC.innerText = bioQuestions[4].answerC
    answerbuttonD.innerText = bioQuestions[4].answerD
}
function question6() {
    question.innerText = bioQuestions[5].question
    questionNum.innerHTML ="6"
    answerbuttonA.innerText = bioQuestions[5].answerA
    answerbuttonB.innerText = bioQuestions[5].answerB
    answerbuttonC.innerText = bioQuestions[5].answerC
    answerbuttonD.innerText = bioQuestions[5].answerD
}
function question7() {
    question.innerText = bioQuestions[6].question
    questionNum.innerHTML ="7"
    answerbuttonA.innerText = bioQuestions[6].answerA
    answerbuttonB.innerText = bioQuestions[6].answerB
    answerbuttonC.innerText = bioQuestions[6].answerC
    answerbuttonD.innerText = bioQuestions[6].answerD
}
function question8() {
    question.innerText = bioQuestions[7].question
    questionNum.innerHTML ="8"
    answerbuttonA.innerText = bioQuestions[7].answerA
    answerbuttonB.innerText = bioQuestions[7].answerB
    answerbuttonC.innerText = bioQuestions[7].answerC
    answerbuttonD.innerText = bioQuestions[7].answerD
}
function question9() {
    question.innerText = bioQuestions[8].question
    questionNum.innerHTML ="9"
    answerbuttonA.innerText = bioQuestions[8].answerA
    answerbuttonB.innerText = bioQuestions[8].answerB
    answerbuttonC.innerText = bioQuestions[8].answerC
    answerbuttonD.innerText = bioQuestions[8].answerD
}
function question10() {
    question.innerText = bioQuestions[9].question
    questionNum.innerHTML ="10"
    answerbuttonA.innerText = bioQuestions[9].answerA
    answerbuttonB.innerText = bioQuestions[9].answerB
    answerbuttonC.innerText = bioQuestions[9].answerC
    answerbuttonD.innerText = bioQuestions[9].answerD
}




