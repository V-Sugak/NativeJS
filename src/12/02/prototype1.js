function User(name, site) {
    // this = {}
    this.name = name
    this.site = site
    // return this
}

User.prototype.hello = function () {
    return `I am ${this.name} from ${this.site}`
}

const u1 = new User('Dima', 'it-incubator')
const u2 = new User('Vika', 'it-incubator')

u1.hello() // 'I am Dima from it-incubator'
u2.hello() // 'I am Vika from it-incubator'

console.log(u1.hello === User.prototype.hello)  //true