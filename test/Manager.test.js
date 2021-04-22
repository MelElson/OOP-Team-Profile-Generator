const Manager = require("../lib/Manager");
 test('Can you set the GitHub  constructor',() => {
    const testOfficeNumber= 'githubuser'
    const e = new Manager('Rob', 1, 'Rob@email.com', testOfficeNumber)
    expect(e.officeNumber).toBe(testOfficeNumber);
 });
 test('getRole() returns Manager', () =>{
     const testRole = 'Manager'
     const e = new Manager('Rob', 1, 'Rob@email.com', 'Manager')
     expect(e.getRole()).toBe(testRole)
 });
 test('Get the githubusername through getHub()', () =>{
     const testOffice = 'officenumber'
     const e = new Manager('Rob', 1, 'Rob@email.com', testOffice)
     expect(e.getOfficeNumber()).toBe(testOffice)
 });