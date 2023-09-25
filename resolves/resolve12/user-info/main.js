console.log(location)
const userId = new URL(location.href).searchParams.get('userId');

const foo = async () => {
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    const wrapper = document.getElementById('wrap');
    const ul = document.createElement('ul');
    wrapper.appendChild(ul);
    recursiveBuilder(user, ul);
}
void foo();


function recursiveBuilder(obj, block) {
    for (const key in obj) {
        const value = obj[key];
        typeof value === 'object'
            ? ulBuilder(key, value, block)
            : liBuilder(key, value, block);
    }
}

function ulBuilder(key, value, block) {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    block.appendChild(li);
    li.appendChild(ul);
    ul.innerHTML = `<b>${key}:</b>`;
    recursiveBuilder(value, ul);
}

function liBuilder(key, value, block) {
    const li = document.createElement('li');
    li.innerHTML = `<b>${key}:</b> ${value}`
    block.appendChild(li);
}
