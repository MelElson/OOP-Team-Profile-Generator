class Employee {
   constructor(name, id, email){
     this.name = name;
     this.id = id;
     this.email = email;
    
   }

   getName() {
       return this.name;
   }
  
   getID() {
     return this.id;
     
   }

   getEmail() {
       return this.email;
   }

   getRole() {
       return "Employee"
   }

}

module.exports = Employee


//const newEmployee = new Employee('Person', 1, "user@email.ccom")
//newEmp.name //this is no good cause we can change person directly