const employee = {
    name : "John",
    position: "Developer",
    salary: 567889
}
employee.salary = 60000;
employee.department = "IT";
delete employee.position;
console.log(employee);