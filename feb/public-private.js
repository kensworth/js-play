'use strict'
var Employee = function(name, company, salary) {
    this.name = name || ''
    this.company = company || ''
    this.salary = salary || 5000
    
    // private method
    var increaseSalary = _ => this.salary += 1000

    // public method
    this.displayIncreasedSalary = _ => {
        increaseSalary()
        console.log(this.salary)
    }
}

var emp1 = new Employee('john', 'jamesco', 3000)

emp1.displayIncreasedSalary()
