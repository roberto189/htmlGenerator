// // TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// const Employee = require("../lib/Employee");
// const Manager = require("../lib/Manager");

class Manager extends Employee {
    constructor(name, id, email) {
    super(name, id, email)
    this.officeNumber=officeNumber;
    }
    // getRole()
    getofficeNumber(){
        console.log(`${this.getofficeNumber}`)
    }
}
module.exports = Manager;