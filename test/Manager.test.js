const Manager = require("../lib/Manager");
 test('Can you set the GitHub  constructor',() => {
    const testOfficeNumber= 'githubuser'
    const emp = new Manager('Rob', 1, 'Rob@email.com', testOfficeNumber)
    expect(emp.officeNumber).toBe(testOfficeNumber);
 });
 test('getRole() returns Manager', () =>{
     const testRole = 'Manager'
     const emp = new Manager('Rob', 1, 'Rob@email.com', 'Manager')
     expect(emp.getRole()).toBe(testRole)
 });
 test('Get the githubusername through getHub()', () =>{
     const testOffice = 'officenumber'
     const emp = new Manager('Rob', 1, 'Rob@email.com', testOffice)
     expect(emp.getOfficeNumber()).toBe(testOffice)
 });