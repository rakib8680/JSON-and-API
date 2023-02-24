
const loadRandomUsers = () => {
    const url = 'https://randomuser.me/api/?results=1'
    fetch(url)
        .then(response => response.json())
        .then(users => displayUser(users))
};


const displayUser = users => {
    const image = document.getElementById('image')
    const gender = document.getElementById('gender');
    const name = document.getElementById('name');
    const location = document.getElementById('location');
    const street = document.getElementById('street')
    const phone = document.getElementById('phone')


    image.innerHTML = `
    <img src=${users.results[0].picture.large}> `
    name.innerText = `${users.results[0].name.title} ${users.results[0].name.first} ${users.results[0].name.last}`
    gender.innerText = users.results[0].gender
    location.innerText = users.results[0].location.city
    street.innerText = users.results[0].location.street.name
    phone.innerText = users.results[0].phone
    console.log(users.results[0])

}


loadRandomUsers();