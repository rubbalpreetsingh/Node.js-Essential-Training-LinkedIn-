
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do witj node js?"
];


const collectAnswers = (questions,done)=>{
    const answers = [];
    const [firstQuestion] = questions;
    //done(answers);

    const questionAnswer = answer =>{
        answers.push(answer);


        if(answers.length<questions.length){
            rl.question(questions[answers.length],questionAnswer);
        }else{
            done(answers);
        }
    };

    rl.question(firstQuestion,questionAnswer);
}


collectAnswers(questions,answers=>{
    console.log(`Thank you for your answers.`);
    console.log(answers);
    process.exit();
});





