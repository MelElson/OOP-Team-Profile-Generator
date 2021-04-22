const Employee = require("./Employee");

class Intern extends Employee {
constructor(name, id, email, school){
    super(name, id, email); //sets the name id etc that was in the employee class so dont have to rewrite it
    this.school = school;
}
getSchool() {
    return this.school;
}
getRole() {
    return "Intern";
}

}
module.exports = Intern;