class User {
    _name = ''

    constructor(name, site) {
        this._name = name // приватное свойство либо #name
        this.site = site
        this.counter = 0
    }

    /*   getName() {
           return this.#name
       }

       setName(value) {
           this.#name = value
       }*/

    get name() {
        return this._name
    }                        // u1.name

    set name(value) {
        this._name = value
    }                        // u1.name('Ira')

    hello() {
        this.counter++;
        console.log(`I am ${this._name} from ${this.site}`)
    }
}

const u1 = new User('Dima', 'it-incubator')
const u2 = new User('Vika', 'it-incubator')

// Значение counter в зависимсти от контекста объекта, в котором работаем
u1.hello() // 'I am Dima from it-incubator'
u2.hello() // 'I am Vika from it-incubator'

class Coder extends User {
    constructor(name, site, tech) {
        super(name, site);
        this.tech = tech
    }

    code() {
        console.log(`I am ${this.name}. My ${this.tech} code is here: const sum = (a,b) => a+b`)
    }

    hello() {
        super.hello();
        console.log('Go away')
    }
}

const coder1 = new Coder('Vika', 'it-incubator', 'JS') // есть свойтва  и методы User & Coder

//полиморфизм
const users = [u1, u2, coder1]
users.forEach(u = u.hello())