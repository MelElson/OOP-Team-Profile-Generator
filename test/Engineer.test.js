const Engineer = require("../lib/engineer");
 test('Can you set the GitHub  constructor',() => {
    const testGithub = 'githubuser'
    const emp = new Engineer('Rob', 1, 'Rob@email.com', testGithub)
    expect(emp.gitHub).toBe(testGithub);
 });
 test('getRole() returns Engineer', () =>{
     const testRole = 'Engineer'
     const emp = new Engineer('Rob', 1, 'Rob@email.com', 'Engineer')
     expect(emp.getRole()).toBe(testRole)
 });
 test('Get the githubusername through getHub()', () =>{
     const testUsername = 'githubusername'
     const emp = new Engineer('Rob', 1, 'Rob@email.com', testUsername)
     expect(emp.getGitHub()).toBe(testUsername)
 });