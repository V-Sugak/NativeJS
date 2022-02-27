import {findUserIndB} from "./index";

/*
const promise2 = findUserIndB(1);
const promise2_2 = promise2.then((users) => {
    return users.name;
})
promise2_2.then(name => {
    console.log(name)
}) */


findUserIndB(1)
    .then((users) => users.name)
    .then(name => console.log(name))


const axios = {};
axios.get('google.com')
    .then(response => response.data)
    .then(data => console.log(data))

const getVacanciesCountFromGoogl = () => {
    /* const pr = axios.get('google.com');
     const pr2 = pr.then(response => response.data)
     return pr2*/

    return axios.get('google.com')
        .then(response => response.data)
        .then(data => data.vacancies)
}

getVacanciesCountFromGoogl().then(count => console.log(count))