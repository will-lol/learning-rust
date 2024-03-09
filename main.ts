interface Area {
  area(): number;
}

class Rectangle implements Area {
  width: number;
  height: number;
  x: number;
  y: number;

  constructor(width: number, height: number, x: number, y: number) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Area {
  radius: number;
  x: number;
  y: number;

  constructor(radius: number, x: number, y: number) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  area(): number {
    return this.radius * this.radius * Math.PI;
  }
}

