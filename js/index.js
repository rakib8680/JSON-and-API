
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





function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
};




function patchPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};



function createPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
