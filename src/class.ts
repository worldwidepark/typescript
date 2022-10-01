export {};

class Person {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const me = new Person('ham', 44);
