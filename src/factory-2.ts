// Creates objects depends on input data
// Uses when we create multiple similar objects, with same structure

interface CarModels {
    "Audi": "R8" | "Q7",
    "Mercedes": "GL" | "A100"
}

class Auto {
    constructor(
        protected model: string,
        protected price: number,
    ) {}

    get label() {
        return `${this.model}: $${this.price.toLocaleString()}`;
    }
}

class Audi extends Auto {
    get label() {
        return `I'm Audi ${super.label}`;
    }
}

class Mercedes extends Auto {
    get label() {
        return `I'm Mercedes ${super.label}`;
    }
}

class CarFactory {
    static brands = {
        Audi: Audi,
        Mercedes: Mercedes
    }

    // factory method
    create<T extends keyof typeof CarFactory.brands>(
        brand: T,
        model: CarModels[T],
        price: number,
    ) {
        const Car = CarFactory.brands[brand];
        return new Car(model, price);
    }
}

const factory2 = new CarFactory();
const cars = [
    factory2.create("Audi", "Q7", 100000),
    factory2.create("Mercedes", "GL", 80000),
    factory2.create("Audi", "R8", 150000),
    factory2.create("Mercedes", "A100", 30000)
];

cars.forEach(car => {
    console.log(car);
    console.log(car.label);
})