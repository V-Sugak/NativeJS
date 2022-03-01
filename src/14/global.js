export const axios = {
    _fake(url, data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let responseData = {text: `${url} loves you`}
                if (url.indexOf('it-kamasutra') > 0) {
                    responseData = {
                        requestedCount: data.count,
                        message: 'hello'
                    }
                }
                if (url.indexOf('google') > 0) {
                    responseData = {
                        vacancies: 12,
                    }
                }
                if (url.indexOf('microsoft') > 0) {
                    responseData = {
                        vacancies: 23,
                    }
                }
                resolve({
                    request: {},
                    status: 200,
                    headers: {},
                    config: {},
                    data: responseData,
                })
            }, randomIntFromInterval(1, 5) * 1000
            )
        })
    },
    get(url, data) {
        return this._fake(url, data)
    }
    ,
    post(url, data) {
        return this._fake(url, data)
    }
    ,
};
export const findUserIndB = (id) => {
    const users = [
        {id: 1, name: 'Kate', friend: 3},
        {id: 2, name: 'Ira', friend: 1},
        {id: 3, name: 'Diana', friend: 2},
    ]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(u => u.id === id)
            if (!user) {
                reject('user not found')
            } else {
                resolve(user)
            }
        }, randomIntFromInterval(500, 1000))
    })
};

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}