class Employee {
  private id;
  id: number;
  constructor() {
    this.id = '';
  }
  private details(): string {
    return `Id ==> ${this.id}`;
  }
}
let employee = new Employee();
console.log(employee);

class Name {
  name: string;
  constructor() {
    this.name = 'test';
  }
}

const name_cls = new Name();