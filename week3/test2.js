let value1 = ['Apple',1,false];
let value2 = ['Fries',2,true];
let value3 = ['Mars',9,'Apple'];

for(let index = 0; index < 3; index++){
    let item1 = value1.forEach(my);
    console.log(item1);
    let item2 = value2.forEach(my);
    console.log(item2);
    let item3 = value3.forEach(my);
    console.log(item3);
    if(item1 === item2){
        console.log('equal');
    }else {console.log('not equal'); }
    if(item1 === item3){
        console.log('equal');
    }else {console.log('not equal'); }
}
function my(item) {
    
  return this.item;
}