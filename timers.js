const waitTimer = 3000;
console.log(`setting a ${waitTimer/1000} second delay`);

const timeFinished= ()=> console.log("Done");


setTimeout(timeFinished, waitTimer);