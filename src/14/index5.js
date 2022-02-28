function getNumber() {
    //  const promise = Promise.resolve(Math.random());
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Math.random())
        })
    });

    return promise;
}

getNumber().then(number => console.log(number));
getNumber().then(number => console.log(number));


const repo = {
    sava(data) {
        try {
            localStorage.setItem('some-key', JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    savaAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key', JSON.stringify(data));
                resolve();
            } catch (error) {
                reject(error);
            }
        })
        return promise;
    },
    read() {
        const data = localStorage.getItem('some-key');
        if (!data) {
            return null;
        } else {
            return JSON.parse(data);
        }
    },
    readAsync() {
        return new Promise((resolve, reject) => {
            const data = localStorage.getItem('some-key');
            if (!data) {
                resolve(null);
            } else {
                resolve(JSON.parse(data));
            }
        })
    },
}

const result = repo.sava({name: 'IT-KAMASUTRA'});
if (result) {
    console.log('SAVED');
}
const data = repo.read();
console.log(data);

/*
repo.savaAsync({name: 'IT-KAMASUTRA'})
    .then(() => console.log('SAVED'))
    */
const run = async function () {
    await repo.savaAsync({name: 'IT-KAMASUTRA'})
        .then(() => console.log('SAVED'));

    const data = await repo.readAsync();
    console.log(data);
}
