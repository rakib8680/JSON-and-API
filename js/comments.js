



function loadComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    fetch(url)
        .then(res => res.json())
        .then(comments => displayComments(comments))
}

function displayComments(comments) {

    const commentContainer = document.getElementById('comments');
    for (const comment of comments) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>Post ID - ${comment.postId} </h4>
        <h4>ID - ${comment.id} </h4>
        <h3>Name : ${comment.name} </h3>
        <h3>Email : ${comment.email} </h3>
        <h2>Comment : ${comment.body} </h2>

        `
        div.classList.add('comment')
        commentContainer.appendChild(div)
    }
}

loadComments()