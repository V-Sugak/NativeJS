const resolvedPromise = Promise.resolve([{}]);
console.log(resolvedPromise); // <fulfilled> : Array(1);
resolvedPromise
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })

const rejectedPromise = Promise.reject({message: 'some problem'});
console.log(resolvedPromise); // <rejected> : {...};
rejectedPromise
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })


const userAPI = {
    getAllUsers() {
        return Promise.resolve([{name: 'Diana'}, {name: 'Ira'}])
    },
    login(login, password) {
        if (login != '123' && password != '123') {
            return Promise.reject('Incorrect login and password')
        } else {
            return Promise.resolve({name: 'Diana', id: 17, urlAvatar: ''})
        }
    }
}
const promise = userAPI.getAllUsers();
promise.then(users => {
    console.log(users); // [{name: 'Diana'}, {name: 'Ira'}]
})

userAPI.login('123', '6654')
    .then((data) => {
        //make redirect
    })
    .catch(() => {
        //show error
    })