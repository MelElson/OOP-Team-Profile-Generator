const Employee = require("./Employee");



class Engineer extends Employee {

constructor(name, id, email, gitHub){
    super(name, id, email); //sets the name id etc that was in the employee class so dont have to rewrite it
    this.gitHub = gitHub;
}

getGitHub() {
    return this.gitHub;
}

getRole() {
    return "Engineer";
}


}
module.exports = Engineer;