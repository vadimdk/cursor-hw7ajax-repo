//let users = [];
//
//const API = 'https://jsonplaceholder.typicode.com/';
//
////const API = 'https://test-users-api.herokuapp.com/users'
//
//const getUsers = () => {
//    return  fetch(API + 'users', 
//                {
//  method: "GET", 
//  headers: {
//    "Content-Type": "application/json" // for a string body, depends on body
//  }
//  
//}).then(res => {
//        return res.json();
//    }).catch(err => {
//        console.log('coudnt get users', err);
//        return [];
//    })
//};
//
//
//
//
//
//
//const renderUsers = () => {
//    const container = document.querySelector('.users');
//
//    container.innerHTML = '';
//
//    users.forEach(item => {
//        const userElement = document.createElement('div');
//        userElement.classList.add('user');
//        userElement.innerHTML = `
//        <h4>${item.name}</h4>
//        <h5>${item.age}</h5>
//        `;
//
//        const removeBtn = document.createElement('button');
//        removeBtn.classList.add('user_remove');
//        removeBtn.textContent = 'x';
//        removeBtn.addEventListener('click', () => {
//            deleteUser(item.id, userElement)
//        });
//
//        userElement.append(removeBtn);
//        container.append(userElement);
//    });
//}
//
//const deleteUser = async (userId, userElement) => {
//    try {
//        await fetch(API + 'users/' + userId, {
//            method: 'DELETE'
//        });
//
//        users = users.filter((item) => item.id !== userId);
//        userElement.remove();
//    } catch (err) {
//        console.log('coudnt delete users', err);
//    }
//}
//
//const loadUsers = async () => {
//    users = await getUsers();
//
//
//    renderUsers();
//}
//
//
//
//const createUser = () => {
//    const name = document.querySelector('#name').value;
//    const email = document.querySelector('#age').value;
//    console.log('name: ', name);
//    console.log('age: ', age);
//
//    fetch(API + 'users', {
//            method: 'POST',
//            body: JSON.stringify({
//                name: name,
//                age: age
//            })
//        }).then(res => {
//            return res.json();
//        }).then(({
//            id
//        }) => {
//            const user = {
//                name,
//                age,
//                id
//            };
//            users.unshift(user)
//
//            renderUsers();
//
//        })
//        .catch(err => {
//            console.log('coudnt create a user', err);
//
//        })
//}
//
//
//document.addEventListener('DOMContentLoaded', () => {
//    const loadBtn = document.querySelector('.load-users')
//    loadBtn.addEventListener('click', loadUsers);
//
//    const createUserBtn = document.querySelector('#create-user-btn')
//    createUserBtn.addEventListener('click', createUser);
//});
