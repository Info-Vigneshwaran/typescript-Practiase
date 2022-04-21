class Employee {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  public details(): object {
    let emp_details = {
      id: this.id,
      name: this.name,
      age: this.age,
    };
    return emp_details;
  }
}
let employee = new Employee(3, 'vignesh', 25);

class Manager extends Employee {
  // jobtype: string;
  private jobtype;
  constructor(id: number, name: string, age: number, jobtype: string) {
    super(id, name, age);
    this.jobtype = jobtype;
  }
  public manager_details(): object {
    let manager_details = {
      id: this.id,
      name: this.name,
      age: this.age,
      jobtype: this.jobtype,
    };
    return manager_details;
  }
}
console.log(employee.details());

let manager = new Manager(3, 'vignesh', 25, 'manager');
console.log(manager.manager_details());
