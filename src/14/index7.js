import {findUserIndB} from "./global";

findUserIndB(1)
    .then(user => {
        console.log(user.name);
        return user.friend;
    })
    .then(friendId => findUserIndB(friendId))
    .catch(error => {
        //    alert('Sorry. Try later');
        return {name: 'Friend Bot', friend: 3} //если словит ошибку, то примет 'Friend Bot' и пойдет дальше
    })
    .then(friend1 => {
        console.log(friend1.name);
        return friend1.friend
    })
    .then(friendId => findUserIndB(friendId))
    .then(friend2 => {
        console.log(friend2.name);
    })
    .catch(error => alert(error))

async function run() {
    try {
        let user = await findUserIndB(1);
        console.log(user.name);
        let friend1;
        try {
            friend1 = await findUserIndB(user.friend);
        } catch (error) {
            friend1 = {name: 'Friend Bot', friend: 3}
        }
        console.log(friend1.name);
        let friend2 = await findUserIndB(friend1.friend);
        console.log(friend2.name);
    } catch (error) {
        alert(error)
    }
};