class Employee {
  constructor(id, name, dept, salary) {
    this.id = id;
    this.name = name;
    this.department = dept;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent / 100);
  }
}

let e1 = new Employee(1, "Amit", "HR", 30000);
let e2 = new Employee(2, "Sara", "IT", 45000);
let e3 = new Employee(3, "Kiran", "Finance", 40000);
let e4 = new Employee(4, "Rohan", "IT", 50000);
let e5 = new Employee(5, "Neha", "Marketing", 35000);

let employees = [e1, e2, e3, e4, e5];

console.log("Annual Salaries:");
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name, employees[i].getAnnualSalary());
}

let total = employees.reduce((sum, emp) => {
  return sum + emp.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", total);
