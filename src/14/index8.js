const api = {
    save() {

    },
    read() {
        /*  return new Promise((resolve, reject) => {
              resolve({name: 'IT'})
          })*/
        return Promise.resolve({name: 'IT'})
    },
    async readAsync() {
        return {name: 'IT'}
    }
}

async function run() {
    await api.save()
    console.log('saved')
    let data = await api.read()
    console.log('read: ' + data)
}