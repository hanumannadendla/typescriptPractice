abstract class Animal {
    protected name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    abstract makeSound(): void;
  
    move(distance: number): void {
      console.log(`${this.name} moved ${distance} meters.`);
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
      console.log(`${this.name} purrs.`);
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log(`${this.name} barks.`);
    }
  }
  
  const cat = new Cat("Whiskers");
  cat.makeSound(); // Output: Whiskers purrs.
  cat.move(10); // Output: Whiskers moved 10 meters.
  
  const dog = new Dog("Buddy");
  dog.makeSound(); // Output: Buddy barks.
  dog.move(20); // Output: Buddy moved 20 meters.