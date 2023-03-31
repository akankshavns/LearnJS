const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2)=>{
    console.log(num1+num2)
    console.log('tutorial event has occurred')
})

// eventEmitter.emit('tutorial', 1, 2)


class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name () {
        return this._name;
    }
}

let bhaarat = new Person('Bhaarat')
let ganga = new Person('Ganga')

bhaarat.on('name', () => {
    console.log('I am ' + bhaarat.name)
})
ganga.on('name', () => {
    console.log('I am ' + ganga.name)
})

bhaarat.emit('name')
ganga.emit('name')