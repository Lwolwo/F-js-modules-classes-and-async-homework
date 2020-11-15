import {Person} from './Person';
export class Student extends Person {
  constructor(name, className) {
    super();
    this.name = name;
    this.className = className;
  }

  study = () => {
    super.move();
    console.log(`${this.name} is studying in ${this.className}`);
  }
}
