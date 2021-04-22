const Intern = require("../lib/Intern");
 test('Can you set the school through constructor',() => {
    const testSchool = 'githubuser'
    const e = new Intern('Rob', 1, 'Rob@email.com', testSchool)
    expect(e.school).toBe(testSchool);
 });
 test('getRole() returns intern', () =>{
     const testRole = 'Intern'
     const e = new Intern('Rob', 1, 'Rob@email.com', 'Intern')
     expect(e.getRole()).toBe(testRole)
 });
 test('Get the school name', () =>{
     const testSchoolName = 'getSchoolname'
     const e = new Intern('Rob', 1, 'Rob@email.com', testSchoolName)
     expect(e.getSchool()).toBe(testSchoolName)
 });