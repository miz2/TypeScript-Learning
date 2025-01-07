interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
  }
  
  class Employee implements Person {
    name: string;
    age: number;
  
    constructor(n: string, a: number) {
      this.name = n;
      this.age = a;
    }
  
    greet(phrase: string): void {
      console.log(`${phrase}, I am ${this.name} and I am ${this.age} years old.`);
    }
  
    promote(): void {
      console.log(`${this.name} has been promoted! 🎉`);
    }
  }
  
  // Example usage
  const employee1 = new Employee("John Doe", 30);
  employee1.greet("Hello"); 
  employee1.promote();

  const employee2 = new Employee("Jane Smith", 25);
  employee2.greet("Hi there"); 
  