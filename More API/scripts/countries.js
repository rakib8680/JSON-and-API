

const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => displayData(countries))
};

const displayData = countries => {
    const allCountries = document.getElementById('countries');
    countries.forEach(element => {
        // console.log(element.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name : ${element.name.common} </h3>
        <h4>Capital : ${element.capital ? element.capital[0] : 'Capital name not Found'} </h4>
        <button onClick="getDetails('${element.cca2}')" >Details </button>
        `
        allCountries.appendChild(countryDiv);
    });

};

const getDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(country => countryDetails(country[0]))
};


const countryDetails = code => {
    console.log(code);
    const countryDetailsSection = document.getElementById('countryDetails');
    countryDetailsSection.innerHTML = `
    <h3>Country Name :${code.name.common}  </h3>
    <img src="${code.flags.png}"> 
    `

}

loadData();