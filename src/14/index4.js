import {findUserIndB} from "./index";
import {log} from "util";

findUserIndB(1)
    .then(user => user.name)
    .then(name => {
        console.log(name);
        return 100;
    })
    .then(number => {
        console.log(number); //100
        return number + 1;
    })
    .then(number => {
        console.log(number); //101
    })
    .then(number => {
        console.log(number); //undefined
        return number + 1;
    })


const lastPromise = findUserIndB(1)
    .then(user => user.name)
    .then(name => {
        console.log(name);
        return 100;
    })
    .then(number => {
        console.log(number); //100
        return {value: number + 1};
    })
    .then(obj => {
        console.log(obj.value); //101
        const promise = Promise.resolve(obj.value + 1);
    })
    .then(number => {
        console.log(number); //102
        return number + 1;
    })


findUserIndB(1)
    .then(console.log) //залогированный результат промиса, т. е. имя пользователя в консоле


findUserIndB(1)
    .then(user => {
        console.log(user);
        return user;
    })
    .then(user => findUserIndB(user.friend)) // user.friend === id friend
    .then(friend1 => friend1)
    .then(friend1 => findUserIndB(friend1.friend))
    .then(friend2 => console.log(friend2))


/////    async\await

async function run() {
    let user = await findUserIndB(1);
    console.log(user.name);
    let friend1 = await findUserIndB(user.friend);
    console.log(friend1.name);
    let friend2 = await findUserIndB(friend1.friend);
    console.log(friend2.name);
};

run();




