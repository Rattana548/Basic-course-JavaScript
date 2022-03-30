const capToFront = (text) =>{
    let str1 = "";
    let str2 = "";
    let str3 = "";
    text.split("").forEach((char) =>{
        if(char == char.toUpperCase()) str1 = char + str1;
        else if(char == char.toLowerCase()) str2 = char + str2;
    });
    str3 =str1+str2;
    return str3;

}
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))