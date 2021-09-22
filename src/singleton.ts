class Singleton {
    static #instance: Singleton;

    constructor() {
        if (!Singleton.#instance) Singleton.#instance = this;
        return Singleton.#instance;
    }
}

// using
const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2);
