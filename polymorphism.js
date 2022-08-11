// pollymoephism is contain more than one form
class Animal {
    constructor (name) {
        this.name = name;
    }

    eats(){
        console.log(this.name + ' eats food')
    }
}

class Aligator extends Animal {
    
    eats(){
        super.eats();
        console.log(this.name + ' eats fishes')
    }
}

let u = new Aligator("murphy")
u.eats()