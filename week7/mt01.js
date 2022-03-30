function numberSplit(number){
    let arr = Array
    let num = number/2
    if(number % 2 == 0){
        arr = [num,num]
    }
    else{
        arr = [Math.floor(num),Math.floor(num+1)]
    }
    return arr
}
console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))