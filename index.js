function Person(name){
    this.name=name;
}

Person.prototype.greet = function(){
    return `Hello, ${this.name}`;
};

const person = new Person("Siva");
console.log(person.greet());


let x=null;
let y;

console.log(x);
console.log(y);