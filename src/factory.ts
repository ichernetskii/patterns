// factory method pattern

interface IAuto {
    model: string;
    price: number;
    get info(): string;
}

class Audi implements IAuto {
    constructor(public model: string, public price: number) {}

    get info(): string {
        return `Audi ${this.model}: $${this.price}`;
    }
}

class Mercedes implements IAuto {
    constructor(public model: string, public price: number) {}

    get info(): string {
        return `Mercedes ${this.model}: $${this.price}`;
    }
}

abstract class AutoFactory {
    init(model: string, price: number) {
        const auto = this.create(model, price);
        console.log(`Created: ${auto.info}`);
    }

    // abstract factory method
    abstract create(model: string, price: number): IAuto;
}

class AudiFactory extends AutoFactory {
    create(model: string, price: number): IAuto {
        return new Audi(model, price);
    }
}

class MercedesFactory extends AutoFactory {
    create(model: string, price: number): IAuto {
        return new Mercedes(model, price);
    }
}

const audiFactory: AutoFactory = new AudiFactory();
audiFactory.init("R8", 200000);
audiFactory.init("Q7", 100000);

const mercedesFactory: AutoFactory = new MercedesFactory();
mercedesFactory.init("GL100", 150000);