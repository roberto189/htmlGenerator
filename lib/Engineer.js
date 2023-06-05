// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{
    constructor(name, id, email) {
        super(name, id, email)
        this.github=github;
    }
    // getRole(){
    // console.log(`${this.Role}`)
    // }
    getGithub(){
        console.log(`${this.github}`)
    }
}
module.exports = Engineer;