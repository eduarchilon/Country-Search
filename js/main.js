import { result } from './fetch.js'

const input = document.getElementById('#searchInput');

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


const getCountriesByResearch = async (event) => {
    const value = event.target.value;
    const result = await fetch(`https://restcountries.com/v3.1/name/${value}`);
    const results = await result.json();
    if(input.value === ""){
        getCountries();
    } else {
        if(result.status === 200){
            getCountries(results);
        } else if (result.status === 404) {
            alert("We couldnt find this country");
        }
    }
    return results;
}

input.addEventListener('input', getCountriesByResearch);

getCountries(result);