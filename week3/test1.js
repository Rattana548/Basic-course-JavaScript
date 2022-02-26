let furniture = ['Table','Chairs','Couch'];
furniture.forEach(myFunction);
function myFunction(item) {
    for(let char of item) {
        console.log(char);
    }
  console.log(item);
}