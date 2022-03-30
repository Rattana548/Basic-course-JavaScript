const highestDigits = (num) =>{
    var numCheck = 0
    var hight = 0
    while (num!=0){
        numCheck = num % 10
        if(numCheck > hight)
        hight = Math.floor(numCheck)
        num = num/10
    }
    return hight
}

console.log(highestDigits(379))
console.log(highestDigits(2))
console.log(highestDigits(377401))