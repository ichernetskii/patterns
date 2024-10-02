interface DataEvent {
    data: string;
}

class Observer {
    private subscribers: Subscriber[] = [];

    public subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
        console.log(`Subscriber "${subscriber.name}" has been subscribed`);
    }

    public unsubscribe(subscriber: Subscriber) {
        this.subscribers = this.subscribers.filter((s) => s !== subscriber);
        console.log(`Subscriber "${subscriber.name}" has been unsubscribed`);
    }

    public notify(event: DataEvent) {
        console.log(`All subscribers have been notified. Subscribers: ${this.subscribers.map((s) => s.name).join(", ")}`);
        for (const subscriber of this.subscribers) {
            subscriber.onEvent(event);
        }
    }
}

abstract class Subscriber {
    constructor(public name: string) {
    };

    public abstract onEvent(event: DataEvent): void;
}

class FirstSubscriber extends Subscriber {
    public onEvent(event: DataEvent) {
        console.log(`Some business logic here from subscriber "${this.name}". Data: "${event.data}"`);
    }
}

class SecondSubscriber extends Subscriber {
    public onEvent(event: DataEvent) {
        console.log(`Another business logic here from subscriber "${this.name}". Data: "${event.data}"`);
    }
}

const firstSubscriber = new FirstSubscriber("firstSubscriber");
const secondSubscriber = new SecondSubscriber("secondSubscriber");
const observer = new Observer();
observer.subscribe(firstSubscriber);
observer.subscribe(secondSubscriber);
observer.notify({data: "Hello"});
observer.unsubscribe(secondSubscriber);
observer.notify({data: "World"});
observer.unsubscribe(firstSubscriber);
