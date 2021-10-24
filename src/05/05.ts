export type PeopleType = {
    name: string
    age: number
}

const people: Array<PeopleType> = [
    {name: 'Andrew Ivanov', age: 32},
    {name: 'Alexandr Petrov', age: 24},
    {name: 'Dmitriy Sidorov', age: 28},
]

const transformator = (man: PeopleType) => {
    return {
        stack: ['css', 'html', 'js', 'rect'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1],
    }
}

const devs = [
    {
        stack: ['css', 'html', 'js', 'rect'],
        firstName: 'Andrew',
        lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'rect'],
        firstName: 'Alexandr',
        lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'rect'],
        firstName: 'Dmitriy',
        lastName: 'Sidorov'
    },]

const devs2 = people.map(p => ({
    stack: ['css', 'html', 'js', 'rect'],
    firstName: p.name.split(' ')[0],
    lastName: p.name.split(' ')[1],
}))

const  messages = people.map(p => `Hello ${p.name.split(' ')[0]}. Welcome to IT-INCUBATOR`)

export function creatMessages (people: Array<PeopleType>) {
    return  people.map(p => `Hello ${p.name.split(' ')[0]}. Welcome to IT-INCUBATOR`)
}