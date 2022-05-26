import { result } from './fetch.js'

const input = document.getElementById('#searchInput');
let inputvalue = input.value;

const createCountryCard = ({ flags, name, population, region, capital }) => {
    let countries = document.getElementById('country__container');
    countries.innerHTML += `
                    <div class="country__content">
                        <img class="country__image" src="${flags.png}" alt="${name}" width="200">
                        <div class="country__information">
                            <h5 class="country__name">${name}</h5>
                            <p class="country__population">Population: <span>${population}</span></p>
                            <p class="country__region">Region: <span>${region}</span></p>
                            <p class="country__capital">Capital: <span>${capital}</span></p>
                        </div>
                    </div>    
                    `;
}

const getCountries = async (api) =>{
    const arrayCountries = await api.json();
    arrayCountries.forEach(element => {
        createCountryCard(element);
    });
}

const getAllCharacters = async (event) => {
    const value = event.target.value;
    const result = await fetch(`https://restcountries.com/v3.1/name/${value}`);
    const { results } = await result.json();
    deleteAllCards();
    results.forEach(item => {
      createCountryCard(item);
    })
    return results;
}

const deleteAllCards = () => {
    const charCards = document.querySelectorAll('.card');
    charCards.forEach(card => card.remove());
};
  
let timer = 0;
const debouncedFetch = (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => getAllCharacters(value), 1000);
};
  
searchInput.addEventListener('input', debouncedFetch);

getCountries(result);