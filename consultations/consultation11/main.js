fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .catch((e) => console.error(e.message))
    .then((users) => {
        const promises = users.map((user) => {
            return new Promise((res) => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then((response) => response.json())
                    .then((posts) => {
                        res(posts)
                    })
            })
        })
        console.log(promises)

        Promise.all(promises).then((resArr) => {
            resArr.map((res) => {
                if (res.status === 'fulfilled') {
                    console.log('dfgdfg')
                }

            })
            console.log(resArr, 'ddddddddddd')
        })
    }).catch((e) => console.error(e.message))


const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        return await Promise.all(users.map(async (user) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            return await response.json()
        }));
    } catch (e) {
        console.error(e.message);
    }
}
const presentInDOM = (arr) => {
    for (const item of arr) {
    //  TODO
    }
}

const handler = async () => {
    try {
         const data = await getData();
         presentInDOM(data);
    } catch (e) {
        console.error(e.message);
    }
}
handler()


// const user   = {
//     name: "Maksym", age: 44
// }
// console.log(user);
//
// const {name: firstName} = user;
// console.log(firstName)



// TODO see clock example
async function startClock(startH, startM, startS) {
    for (let hour = startH; hour < 24; hour++) {
        for (let min = startM; min < 60; min++) {
            for (let sec = startS; sec < 60; ++sec) {
                console.log(`Time: ${hour} : ${min} : ${sec}`);
                await waitOneSecond();
            }
        }
    }
}

startClock(15, 30, 0);

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
