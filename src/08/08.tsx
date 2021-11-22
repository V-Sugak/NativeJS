type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '242': {id: 242, name: 'Dima'},
    '654': {id: 654, name: 'Vika'},
    '874': {id: 874, name: 'Anna'},
    '947': {id: 947, name: 'Ira'},
}

const user = {id: 689, name: 'Igor'}

users[user.id] = user;
delete users[user.id];
users[user.id].name = 'Kate'


//эффективней чем find, filter