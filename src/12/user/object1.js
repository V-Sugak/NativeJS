function commonHello() {
    return `I am ${this.name} from ${this.site}`
}

const userFabric = (name) => {
    return {
        name: name,
        site: 'it-incubator',
        hello: commonHello
    }
}

const u1 = userFabric('Dima')
const u2 = userFabric('Vika')

u1.hello() // 'I am Dima from it-incubator'
u2.hello() // 'I am Vika from it-incubator'