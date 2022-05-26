const url = 'https://restcountries.com/v3.1/all';
const inputSearch = document.getElementById('#search-input');

let inputSearchValue = inputSearch.value;

function searchCountry(inputSearchValue) {
    const response = await fetch(url)
    .then(res => res.json())
    .then(data => {
        
    })
}

const loadFlags = async () => {

    await fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
            console.log(country.name)
        });
    })
    .catch (error => console.log(error));


}

loadFlags();