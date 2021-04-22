const Intern = require("../lib/Intern");
 test('Can you set the school through constructor',() => {
    const testSchool = 'school'
    const emp = new Intern('Rob', 1, 'Rob@email.com', testSchool)
    expect(emp.school).toBe(testSchool);
 });
 test('getRole() returns intern', () =>{
     const testRole = 'Intern'
     const emp = new Intern('Rob', 1, 'Rob@email.com', 'Intern')
     expect(emp.getRole()).toBe(testRole)
 });
 test('Get the school name', () =>{
     const testSchoolName = 'getSchoolname'
     const emp = new Intern('Rob', 1, 'Rob@email.com', testSchoolName)
     expect(emp.getSchool()).toBe(testSchoolName)
 });