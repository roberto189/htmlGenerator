// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      // this.Role = Employee;
    }
    getName(){
      console.log(`${this.name}`)
    }
    getId(){
      console.log(`${this.id}`)
    }
    getEmail(){
      console.log(`${this.email}`)
    }
    // getRole(){
    //   console.log(`${this.Role}`)
    // }
}
module.exports = Employee;