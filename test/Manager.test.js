const Manager = require("../lib/manager");
 test('Can you set the GitHub  constructor',() => {
    const testGithub = 'githubuser'
    const e = new Manager('Rob', 1, 'Rob@email.com', testGithub)
    expect(e.gitHub).toBe(testGithub);
 });
 test('getRole() returns Manager', () =>{
     const testRole = 'Manager'
     const e = new Manager('Rob', 1, 'Rob@email.com', 'Manager')
     expect(e.getRole()).toBe(testRole)
 });
 test('Get the githubusername through getHub()', () =>{
     const testOffice = 'githubusername'
     const e = new Manager('Rob', 1, 'Rob@email.com', testOffice)
     expect(e.getOfficeNumber()).toBe(testOffice)
 });