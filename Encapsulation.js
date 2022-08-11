
// Encapsulation is a mechanism of restricting direct acess to some of the object components.
//  mechanism of bundling data with methods that operates on th data.

// properties -----
// 1. security controlled access
// 2. hide emplementation and expose behaviour.
// 3. loose coupling -- modify the implementation anytime.


class Employee {

    setDetails(name, id, phoneNum) {           // set function take the arguments
        this.name = name;
        this.id = id;
        this.phoneNum = phoneNum;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getPhoneNum() {
        return this.phoneNum;
    }

}
let emp = new Employee()

emp.setDetails("rohan", 15, 6345455545)
console.log(emp.getName())
console.log(emp.getId())
console.log(emp.getPhoneNum())





// 2.  bank account
class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;      // # means private property

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount) {
        if (isNaN(amount)) {
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(amount) {
        console.log('Calculating interest');
    }

    takeBusinessLoan(amount) {
        // Logic in reallife
        this.#calculateInterest(amount);
        console.log('Taking business loan: ' + amount);
    }
}

const rakeshAccount = new CurrentAccount('Rakesh K', 2000);
// rakeshAccount.setBalance(400);
rakeshAccount.balance = 5000;
rakeshAccount.takeBusinessLoan(40000);
console.log(rakeshAccount);
