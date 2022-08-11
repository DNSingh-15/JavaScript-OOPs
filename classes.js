console.log("All about to classes")


// Class declarations
// area of Squre
class Square {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.height * this.width;
    }
}
// Hoisting
let Rectangle = new Square(10, 10);          // Reactangle is a object not variable
console.log(Rectangle.area);


// area of Trapizium
class TrapeziumA {
    constructor(base1, base2, height) {
        this.base1 = base1;
        this.base2 = base2;
        this.height = height;
    }

    get areaOfTrapezium() {
        return (this.base1 + this.base2) / 2 * this.height;
    }
}
let trap = new TrapeziumA(1, 11, 5);
console.log(trap.areaOfTrapezium);


// perimeter of Trapizium     --- a,b,c,d are arm(bhuja) of Trapizium
class TrapeziumP {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    get perimeter() {
        return this.a + this.b + this.c + this.d;
    }
}
let p = new TrapeziumP(1, 11, 2, 4);
console.log(p.perimeter);




// get and set (Getters and Setters) 
class Athlete {
    constructor(name){
        this._name = name;
    }
    
    getName() {
        return this._name;
    }
    
    setName(name) {
        this._name = name;
    }
}
var athlete = new Athlete('Michael');
console.log(athlete.getName());

athlete.setName('Gupta G');
console.log(athlete.getName());



class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName() {
        return `person full name is ${this.firstName} ${this.lastName}`
    }
    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }
    sayHi() {
        return `Hi, ${this.firstName} ${this.lastName}`
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }
    set lastName(lastName) {
        this._lastName = lastName;
    }
}

const person = new Person('Rohan', 'Singhaniya');
console.log(person.fullName)
console.log(person.sayHi())

// set the first name and last name
person.firstName = 'D.N.';
person.lastName = 'Singh';
console.log(person.firstName, person.lastName)




// inheritance in JavaScript:
class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get info() {
        return `name ${this.name} and email: ${this.email}`
    }
}

class subUser extends user {
    get subInfo() {
        return "I'm subUser"
    }
}

// or
// class subUser extends user {
//     constructor(name, email){
//         super(name, email);z
//     }
//     get subInfo (){
//         return "I'm subUser"
//     }
// }

var userDetails = new user("shubham", "shubham@gmail.com")
console.log(userDetails.info)

var subDetails = new subUser("dn", "sjgduwa@gmail.com")
console.log(subDetails.info)
console.log(subDetails.subInfo)




class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('eat');
    }
} 
class Bird extends Animal {
    constructor(name, numWings) {
        super(name);
        this.numWings = numWings;
    }
} 
const bird = new Bird('Joe', 2);
console.log(bird.numWings)
bird.eat();