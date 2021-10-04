abstract class Vehicle {
    constructor(public model: string) {}
    abstract get info(): string;
}

abstract class Car extends Vehicle { }
abstract class Boat extends Vehicle { }

class ModernCar extends Car {
    get info() { return `Modern car ${this.model}` }
}

class SportCar extends Car {
    get info() { return `Sport car ${this.model}` }
}

class ModernBoat extends Boat {
    get info() { return `Modern boat ${this.model}` }
}

class SportBoat extends Boat {
    get info() { return `Sport boat ${this.model}` }
}

interface VehicleFactory {
    createCar(model: string): Car;
    createBoat(model: string): Boat;
}

class ModernVehicleFactory implements VehicleFactory {
    createCar(model: string): Car { return new ModernCar(model) }
    createBoat(model: string): Boat { return new ModernBoat(model) }
}

class SportVehicleFactory implements VehicleFactory {
    createCar(model: string): Car { return new SportCar(model) }
    createBoat(model: string): Boat { return new SportBoat(model) }
}

const modernVehicleFactory: VehicleFactory = new ModernVehicleFactory();
console.log(modernVehicleFactory.createCar("Q7").info);
console.log(modernVehicleFactory.createBoat("Titanik").info);

const sportVehicleFactory: VehicleFactory = new SportVehicleFactory();
console.log(sportVehicleFactory.createBoat("Pobeda").info);
console.log(sportVehicleFactory.createCar("R8").info);
