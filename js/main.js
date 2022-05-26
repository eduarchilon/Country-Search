import "../js/app/busqueda.js"
import "../js/app/Flag.js"
import { result } from './fetch.js'

/*cambios edu */
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

const createSelect = (continent) =>{
    let regions = document.getElementById('select');
    regions.innerHTML += `
        <option value=${continent} id="${continent}">${continent}</option>
        `
}

const getCountries = async (api) =>{
    const arrayCountries = await api.json();
    const continent = [];
    console.log(arrayCountries)
    arrayCountries.forEach(element => {
        const {region} = element
        if(!continent.includes(region)){
            continent.push(region)
        }
    });

    continent.forEach(element => {
        createSelect(element)
    });

    arrayCountries.forEach(element => {
        createCountryCard(element);
    });
    
    
}

getCountries(result);

/*fin edu */
