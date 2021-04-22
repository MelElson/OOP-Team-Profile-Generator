const Intern = require("../lib/intern");
 test('Can you set the school through constructor',() => {
    const testGithub = 'githubuser'
    const e = new Intern('Rob', 1, 'Rob@email.com', testGithub)
    expect(e.gitHub).toBe(testGithub);
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