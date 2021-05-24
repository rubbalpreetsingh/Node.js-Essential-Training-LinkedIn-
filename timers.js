const waitTimer = 3000;

const waitInterval = 500;
let currentTime = 0;

const incTime = ()=>{
    currentTime += waitInterval;
    console.log(`wait ${currentTime/1000} seconds`);
};


console.log(`setting a ${waitTimer/1000} second delay`);

const timeFinished= ()=>{
    clearInterval(interval);
    console.log("Done");
};


const interval = setInterval(incTime, waitInterval);

setTimeout(timeFinished, waitTimer);



