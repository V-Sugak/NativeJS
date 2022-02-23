const axios = {};
const findUserIndB = (id) => {
};

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

