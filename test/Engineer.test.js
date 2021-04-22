const Engineer = require("../lib/engineer");
 test('Can you set the GitHub  constructor',() => {
    const testGithub = 'githubuser'
    const e = new Engineer('Rob', 1, 'Rob@email.com', testGithub)
    expect(e.gitHub).toBe(testGithub);
 });
 test('getRole() returns Engineer', () =>{
     const testRole = 'Engineer'
     const e = new Engineer('Rob', 1, 'Rob@email.com', 'Engineer')
     expect(e.getRole()).toBe(testRole)
 });
 test('Get the githubusername through getHub()', () =>{
     const testUsername = 'githubusername'
     const e = new Engineer('Rob', 1, 'Rob@email.com', testUsername)
     expect(e.getGitHub()).toBe(testUsername)
 });