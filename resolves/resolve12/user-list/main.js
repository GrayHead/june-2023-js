// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const foo  = async () => {
    const res = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const wrapper = document.getElementById('wrap');

    for (const user of users) {
        const div = document.createElement('div');
        const button = document.createElement('button');
        div.innerText = `#${user.id} ${user.name}`;
        button.innerText = 'more';
        div.appendChild(button)
        wrapper.appendChild(div);

        button.onclick = () => {
            location.href = `../user-info/index.html?userId=${user.id}`;
        }
    }
}
void foo();
