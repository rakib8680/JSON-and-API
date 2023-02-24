

const loadQuote = () => {
    const url = 'https://api.kanye.rest/'
    fetch(url)
        .then(res => res.json())
        .then(quotes => displayQuote(quotes))
};


const displayQuote = quotes => {
    const quoteSection = document.getElementById('quote');
    quoteSection.innerText = quotes.quote;
}


loadQuote()