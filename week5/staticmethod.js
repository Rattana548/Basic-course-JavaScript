class dog{
    constructor(name){
        this._name = name;
    }
    introduce(){
        console.log("This is " + this._name+" !");
    }
    static brak(){
        console.log("Woof!");
    }
}

const mydog = new dog("Buster");
mydog.introduce();
dog.brak();