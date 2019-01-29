// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
    constructor(l, w, h) {
        this.length = l;
        this.width = w;
        this.height = h;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const imporovedCuboid = new Cuboid(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(imporovedCuboid.volume()); // 100
console.log(imporovedCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// This is pretty silly. You could copy and paste the class above and change the name. The formulas are technically the same. Would make more sense if we were extending cube to build cuboid.

class Cube extends Cuboid {
    constructor(side) {
        super(side, side, side);
    }
    
    volume() {
        return this.length ** 3;
    }
    
    surfaceArea() {
        return 6 * (this.length ** 2);
    }
}

const cube = new Cube(5);

console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150