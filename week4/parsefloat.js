function cricumference(r) {
    if (Number.isNaN(Number.parseFloat(r))){
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(cricumference("4.567abcdefhh"));

console.log(cricumference("abcdefgh"));