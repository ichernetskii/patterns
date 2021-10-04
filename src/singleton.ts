class Singleton<T = any> {
    static #instance: Singleton;
    public data: T;

    constructor(data?: T) {
        if (!Singleton.#instance) Singleton.#instance = this;
        if (data) Singleton.#instance.data = data;
        return Singleton.#instance;
    }
}

const fnSingleton = (function<U>() {
    type Data<T> = {
        data?: T
    }

    let instance: Data<U>;

    return function<V extends U>(data?: V): Data<V> {
        if (!instance) instance = {}
        instance.data = data;
        return instance as Data<V>;
    }
})();

// using
const singleton1 = new Singleton(1);
console.log(singleton1.data);
const singleton2 = new Singleton(2);
console.log(singleton1.data);
console.log(singleton2.data);
console.log(singleton1 === singleton2);

const fnSingleton1 = fnSingleton({value: 1} );
console.log(fnSingleton1.data);
const fnSingleton2 = fnSingleton({value: 2});
console.log(fnSingleton1.data);
console.log(fnSingleton2.data);
console.log(fnSingleton1 === fnSingleton2);

