
function moreUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data))
};

function displayUsers(data) {
    const userList = document.getElementById('usersList');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = ` name : ${user.name} 
         email : ${user.email}
         phone : ${user.phone}`;
        userList.appendChild(li);
    }
}