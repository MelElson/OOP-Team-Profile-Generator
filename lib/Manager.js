const Employee = require("./Employee");

class Manager extends Employee {

constructor(name, id, email, officeNumber){
    super(name, id, email); //sets the name id etc that was in the employee class so dont have to rewrite it
    this.officeNumber = officeNumber;
}

getOfficeNumber() {
    return this.officeNumber;
}
getRole() {
    return 'Manager';
}



} 

module.exports = Manager;