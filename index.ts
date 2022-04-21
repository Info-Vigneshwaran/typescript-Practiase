// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
class Name {
  name: string;
  constructor() {
    this.name = 'test';
  }
}

const name_cls = new Name();
console.log(name_cls.name);
