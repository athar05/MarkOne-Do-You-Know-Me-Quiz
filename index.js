var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("May I Know Your Name?");

console.log(`Hello ${userName}, Welcome to the Do You Know Athar Quiz`);
console.log ("----===----");

var instructions = readlineSync.question("Before you begin, enter [1] to read instrcutions, enter [0] to skip");
console.log ("----===----");

if (instructions === "1") {
  console.log ("1.For every right answer, you get 1 point, and for every wrong answer, you lose 1 point.2. All answers are case sensitive. All the best") 
} else {
  console.log ("The quiz will begin now. All the best")
}
console.log ("----===----");
var userInput1 = readlineSync.question("Enter 1 to begin the quiz")

if (userInput1 === "1") {
  console.log ("The quiz starts in 3..2..1..") 
} else {
  var userInput1 = readlineSync.question("Press 1 to begin the quiz")
}
console.log ("----===----");

function play (question, answer) {
  var userAnswer = readlineSync.question(question);

if (userAnswer === answer) {
  console.log("You are right. You get 1 point")
  score++;
} else { 
  console.log (`Uh-oh... that is the wrong answer. The right answer is ${answer}.You lose 1 point`);
  score--;
}
console.log(`Your score is ${score}`);
console.log ("----===----");

}

var questions = [{
  question: "Which city was Athar born in?",
  answer: "Mysore"
},
{
question: "Where did Athar complete his high school?",
answer: "CFTRI"},

{
  question: "What is the name of the company Athar works for?",
  answer: "Samaaro"
},

{
  question: "What is Athar's favourite food?",
  answer: "Biryani"
},

{
  question: "Finally, What does Athar prefer? Tea or Coffee?",
  answer: "Coffee"
},

];

for (var i=0; i<questions.length; i++) {
  var currentQuestion= questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log ("----===----");

console.log (`The quiz has come to an end. Your final score is ${score}`);

console.log ("----===----");

console.log (`Thank you for participating, ${userName}. If your score is 4 or above, you are a creep. If your score is more than 2, kudos. If your score is less than 2, well shame on you`);
