const deleteUser = (userId) => {
    return {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        }
    }
}

const action1 = deleteUser('252656')
const action2 = deleteUser('874165')