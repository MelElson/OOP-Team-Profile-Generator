const Employee = require("../lib/Employee");
test('create an employee', () => {
    const emp = new Employee()
    expect(typeof(emp)).toBe('object')
});
test('Can set name through constructor', () => {
    const name = "Rob" 
    const emp = new Employee(name)
    expect(emp.name).toBe(name)
});
test('Can set ie through constructor', () => {
    const id = 100;
    const emp = new Employee("Rob", id)
    expect(emp.id).toBe(id)
});
test('Can set emaie through constructor', () => {
    const email = "Rob@email.com";
    const emp = new Employee("Rob", 1, email)
    expect(emp.email).toBe(email)
});
test('Can we get name through getName()', () => {
    const testName = "Kevin";
    const emp = new Employee(testName)
    expect(emp.getName()).toBe(testName)
});
test('Can we get Ie through getID()', () => {
    const testID = 100;
    const emp = new Employee('Rob', testID)
    expect(emp.getID()).toBe(testID)
});
test('Can we get Emaie through getEmail()', () => {
    const testEmail = 'Rob@email.com'
    const emp = new Employee('Rob', 1, testEmail)
    expect(emp.getEmail()).toBe(testEmail)
});
test('Can we get Role through getRole()', () => {
    const testRole = 'Employee'
    const emp = new Employee('Rob', 1, 'Rob@email.com',)
    expect(emp.getRole()).toBe(testRole)
});


















