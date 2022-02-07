type UserType = {
    name: string
    age: number
    address?: { title: string }
};

const increaseAge = (u: UserType) => {
    return u.age++;
};

test('reference type test', () => {
    const user = {
        name: 'Vika',
        age: 26,
    }

    increaseAge(user);
    expect(user.age).toBe(27);

    const man = user;
    man.age = 50;
    expect(user.age).toBe(50);
});

test('array test', () => {
    const users = [
        {
            name: 'Vika',
            age: 26,
        },
        {
            name: 'Diana',
            age: 18,
        },
    ];
    const man = {
        name: 'Ira',
        age: 49,
    };
    const admin = users;
    admin.push(man);

    expect(users.length).toBe(3);
    expect(users[2]).toEqual(man);
})

test('reference type test1', () => {
    const user = {
        name: 'Vika',
        age: 26,
        address: {title: 'Minsk'},
    }

    const user2 = {
        name: 'Diana',
        age: 18,
        address: user.address,
    }

    user2.address.title = 'Kanary';
    expect(user.address.title).toBe('Kanary');
})

test('sort array test', () => {
    const letter = ['b', 'c', 'a'];
    letter.sort();
    expect(letter).toEqual(['a', 'b', 'c'])
})