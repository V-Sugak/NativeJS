type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType;

beforeEach(() => {
    users = {
        '242': {id: 242, name: 'Dima'},
        '654': {id: 654, name: 'Vika'},
        '874': {id: 874, name: 'Anna'},
        '947': {id: 947, name: 'Ira'},
    }
})

test('should update corresponding user', () => {
    users['654'].name = 'Viktoria'

    expect(users['654'].name).toBe('Viktoria')
    expect(users['654']).toEqual({id: 654, name: 'Viktoria'})
})


test('should delete corresponding user', () => {
    delete users['654']

    expect(users['654']).toBeUndefined()
})