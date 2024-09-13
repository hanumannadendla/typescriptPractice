interface Shape {
    area(): number;
  }
  
  class Rectangle implements Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  class Circle implements Shape {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Polymorphic function using the Shape interface
  function calculateTotalArea(shapes: Shape[]): number {
    let totalArea = 0;
    for (const shape of shapes) {
      totalArea += shape.area();
    }
    return totalArea;
  }