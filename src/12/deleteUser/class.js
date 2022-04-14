class DeleteUserAction {
    constructor(userId) {
        this.type = 'DELETE-USER'
        this.payload = {userId: userId}
    }
}

const action1 = new DeleteUserAction(21654)