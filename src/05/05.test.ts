import {creatMessages, PeopleType} from "./05";

let people: Array<PeopleType> = [];
beforeEach(() => {
        people = [
            {name: 'Andrew Ivanov', age: 32},
            {name: 'Alexandr Petrov', age: 24},
            {name: 'Dmitriy Sidorov', age: 28},
        ]
    }
)

test.skip('should get array of greeting messages', () => {
    const  messages = creatMessages(people);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello Andrew. Welcome to IT-INCUBATOR')
    expect(messages[1]).toBe('Hello Alexandr. Welcome to IT-INCUBATOR')
    expect(messages[2]).toBe('Hello Dmitriy. Welcome to IT-INCUBATOR')
})