
function getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(posts => showPosts(posts));
};

function showPosts(posts) {
    const postContainer = document.getElementById('postContainer');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3> User - ${post.userId} </h3>
        <h3> Id - ${post.id} </h3>
        <h4> ${post.title} </h4>
        <p> ${post.body} </p>

        `
        postContainer.appendChild(div);
    };
};

getPosts()

