/*
    const person = {
        name: "Wallace",
        age: 30,
        talk: function() {
            console.log(`Hello, my name is ${this.name}`)
        }
    }
*/

class Person {
    name;
    age;

    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age}`)
    }
}

const newPerson = new Person()

newPerson.name = "Wallace"
newPerson.age = 30
newPerson.talk()