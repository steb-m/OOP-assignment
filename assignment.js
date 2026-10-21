class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    start() {
        console.log("The car has started. vroom vroom!")
    }
}

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    city: "Lancaster",
    occupation: "Student",

    greet() {
        console.log(`Hi! my name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old. I'm a ${this.occupation} in ${this.city}`)
    },

    birthday() {
        this.age++;
        console.log(`${this.firstName} is now ${this.age} years old`);
    },
}
console.log(person.firstName + " " + person.lastName)
console.log(`${person.firstName} ${person.lastName}`)

console.log(person.greet());
console.log(person.birthday());

let student = {
    name: {
        first: "Juan", 
        last: "Carastaños",
    },
    age: "25",
    courses: ["CSET", "Business", "Math"],
    printInfo: function(){
        let coarse = "";
        const len = this.courses.length
        for (let i = 0; i < len; i++) {
            if (i == len - 1) {
                coarse += "and " + this.courses[i];
            } else {
                coarse += this.courses[i] + ", "
            }
        }
        console.log(`${this.firstName} + ${this.lastName} + "is enrolled in" ${coarse}`);
    },

}



let laptop = `{"model":"Acer", "type":"Nitro 5", "price":"1200"}`;
let object = JSON.parse(laptop);


console.log(object);
console.log(object.model);
console.log(object.type);
console.log(object.price);




class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayBalance() {
        console.log(`You currently have $${balance}`);
    }
    declareBankruptcy() {
        this.balance = 0;
        console.log(`${this.owner} has filed for bankruptcy! The gas money costs too much!!!`)
    }
}

let lewisGasMoney = new BankAccount("Lewis", 0.01);
lewisGasMoney.deposit(14);
lewisGasMoney.deposit(30);
lewisGasMoney.displayBalance();
lewisGasMoney.withdraw(16); // for gas money ofc;
lewisGasMoney.declareBankruptcy();

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    
    makeSound() {
        console.log(`${this.sound}!!!`)
    }
}

let PUPPYYYYYY = new Animal("dog", "BOOF");
let KITTYYYYYY = new Animal("cat", "mraow");

PUPPYYYYYY.makeSound();
KITTYYYYYY.makeSound();