//process.stdout.write("Helo ");
//process.stdout.write("World\n\n\n");
//Print in same line


const questions = [
    "What is your Name?",
    "Where are you from?",
    "What is your prederred programming language?"
];

const ask = (i=0)=>{
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(' > ');
};


ask();