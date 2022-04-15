function DeleteUserAction(userId) {
    // this = {}
    this.type = 'DELETE-USER'
    this.payload = {userId: userId}
    // return this
}

const action1 = new DeleteUserAction(21654)
console.log(action1)