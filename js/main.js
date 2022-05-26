import "../js/app/busqueda.js"
import "../js/app/Flag.js"
import { result } from '../js/vendor/fetch.js'


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

getCountries(result);

