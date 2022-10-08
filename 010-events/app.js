const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Listner : Execture when 'tutorial' event occur
eventEmitter.on("tutorial", () => {
    console.log("Tutorial event has occured");
});

// Emitter : This will emit event
eventEmitter.emit("tutorial");

// Listner : Execture when 'sum' event occur
eventEmitter.on("sum", (num1, num2) => {
    console.log(num1 + num2);
});

// Emitter : This will emit event
eventEmitter.emit("sum", 10, 20);

// Extending EventEmitter
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let pedro = new Person("Pedro");
pedro.on("name", () => {
    console.log("My Name is " + pedro.name);
});
pedro.emit("name");
