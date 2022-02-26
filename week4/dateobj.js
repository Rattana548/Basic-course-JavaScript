const start = Date.now();

console.log('Starting time....');

setTimeout(()=>{
    const millis = Date.now() - start;
    console.log(`seconds elaped = ${Math.floor(millis/1000)}`);
},4000);