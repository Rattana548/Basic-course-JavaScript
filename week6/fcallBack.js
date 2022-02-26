function callback(){

    console.log("Timeout Completed")
}
console.log("Start")
setTimeout(callback,5000)
console.log("End")