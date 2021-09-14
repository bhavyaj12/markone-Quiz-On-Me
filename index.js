const chalk = require('chalk');
var readLineSync = require('readline-sync');

var userName = readLineSync.question("What is your name? ");
var score = 0;

var highscore = [{
    name: "Bhavya",
    score: 5,
}, {
    name: "Kruti",
    score: 4,
}]

var welcomeMsg = "Welcome to the quiz " + userName + "! Let's see how well you know me!";
console.log(chalk.bold(welcomeMsg));

function playQuiz(question, answer) {
    var userAns = readLineSync.question(question);

    if (userAns.toUpperCase() === answer.toUpperCase()) {
        console.log(chalk.green("Right Answer!"));
        score = score + 1;
    } else {
        console.log(chalk.red("Wrong Answer!"));
    }

    console.log("Your current score: " + chalk.blue(score));
    console.log("--------");
}

var questions = [{
    question: "What is my favourite colour? ",
    answer: "purple"
}, {
    question: "What is my dog's name? ",
    answer: "trusty"
}, {
    question: "Where do I live? ",
    answer: "delhi"
}, {
    question: "What show am I obssessed with right now? ",
    answer: "loki"
}, {
    question: "Which city did I want to live in as a child? ",
    answer: "new york city"
}];

for (var i = 0; i < questions.length; i++) {
    playQuiz(questions[i].question, questions[i].answer);
}

console.log("Quiz over! Your final score is: " + score + "/5");
console.log("Here are the high scores, see if you beat them and let me know so I update it!");

for (var i = 0; i < highscore.length; i++) {
    console.log(highscore[i].name + " : " + chalk.green(highscore[i].score));
}