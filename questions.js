//process.stdout.write("Helo ");
//process.stdout.write("World\n\n\n");
//Print in same line


const questions = [
    "What is your Name?",
    "Where are you from?",
    "What is your preferred programming language?"
];

const ask = (i=0)=>{
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(' > ');
};


ask();


const answers = [];


process.stdin.on('data',data=>{
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }
});

process.on("exit",()=>{
    const [name, from, lang] = answers;
    console.log(`
    
    Thank you for your answers.

    Your Name: ${name},
    You from: ${from},
    Preferred Language: ${lang}

    
    `);
});


/*
process.stdin.on('data',data=>{
    process.stdout.write(`\n\n ${data.toString().trim()}\n`);
    process.exit();
});*/


