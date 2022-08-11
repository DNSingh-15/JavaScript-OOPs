// Abstract main goal is to handle complexity by hiding unnecessary details from the user.
// or
// Abstraction is way of hiding ther implementation details or irrelevant details inested shoe only required ones. 


function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let bonus = 1000;                 // by using let we will hide the bonus

    this.getEmpDetails = function () {
        console.log('name: ' + this.name + ', age: ' + this.age + ', baseSalary: ' + this.baseSalary)
        getfinalSalary();
    }

    let getfinalSalary = function () {
        let finalSalary = baseSalary + bonus;
        console.log(finalSalary)
    }

}
let emp = new Employee("dn", 23, 300)

emp.getEmpDetails();
