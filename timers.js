const waitTimer = 5000;

const waitInterval = 500;
let currentTime = 0;

const incTime = ()=>{
    currentTime += waitInterval;
    const p = Math.floor((currentTime/waitTimer)*100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p} %`);
};


console.log(`setting a ${waitTimer/1000} second delay`);

const timeFinished= ()=>{
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done");
};


const interval = setInterval(incTime, waitInterval);

setTimeout(timeFinished, waitTimer);



