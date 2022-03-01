import {axios, findUserIndB} from "./global";

//pending
const promise1 = axios.get('google.com')
promise1.then((data) => {
    console.log(data)
});

//pending
const promise2 = findUserIndB(100);
promise2
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.warn(error);  //user not found
    })
    .finally(() => {
        console.log('finish');
    })

const otherPromise = Promise.all([promise1, promise2]);
otherPromise
    .then((results) => {
        const dataFromGoogle = results[0];
        const usersFromDB = results[1];
        console.log(dataFromGoogle, usersFromDB);
    })
    .catch(() => {
        console.log('Initialisation failed. Try later');
    })

const otherPromise2 = Promise.allSettled([promise1, promise2]);
otherPromise2
    .then((results) => {
        const dataFromGoogle = results[0].status === 'fulfilled'
            ? results[0].value
            : {data: {vacancies: null}};
        const usersFromDB = results[1].status === 'fulfilled'
            ? results[1].value()
            : {name: results[1].reason};
        console.log(dataFromGoogle.vacancies + ', ' + usersFromDB.name);
    })