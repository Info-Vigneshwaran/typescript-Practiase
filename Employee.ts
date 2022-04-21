class Employee {
  id: number;
  name: string;
  age: number;
  constructor(id, name, age) {
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
console.log(employee.details());
