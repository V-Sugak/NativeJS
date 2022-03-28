let axios = {
    get() {
        let pr = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    f: 1,
                    g: 56,
                    message: 'ghkh'
                })
            }, 3000)
        })
        return pr
    }
}
//возвращается нвый объект promise
axios.get()
    .then(data => console.log(data))
    .then(() => console.log(1))
    .then(() => console.log(2))
    .catch(data => console.error(data))

axios.get()
    .then((data) => {
        return data.message
    })
    .then(message => message)





const a = {
    sum(a, b) {
        console.log(a + b)
        return this
    }
}
//возвращается старый объект
a.sum(2, 4)
    .sum(5, 6)
    .sum(1, 5)


const b = {
    result: 0,
    sum(a) {
        this.result += a
        return this
    },
    minus(a) {
        this.result -= a
        return this
    }
}

b.sum(9)
    .sum(5)
    .minus(7)
console.log(b.result)
