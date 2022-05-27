import "../js/app/busqueda.js"
import "../js/app/filtro.js"
import { result } from './fetch.js'
import { getCountriesOfRegions } from "../js/app/filtro.js";


//este es
export const arrayCountries = await result.json();

export const createCountryCard = ({ flags, name, population, region, capital }) => {
    const countries = `
                    <div class="country__content" id="country__content">
                        <img class="country__image" src="${flags.png}" alt="${name}" width="200">
                        <div class="country__information">
                            <h5 class="country__name">${name}</h5>
                            <p class="country__population">Population: <span>${population}</span></p>
                            <p class="country__region">Region: <span>${region}</span></p>
                            <p class="country__capital">Capital: <span>${capital}</span></p>
                        </div>
                    </div>    
                    `
    return countries;
}

const createSelect = (continent) =>{
    let regions = document.getElementById('select');
    regions.innerHTML += `
        <option value=${continent} id="${continent}">${continent}</option>
        `
}

const getSelect = async (api)=>{
    const continent = [];
    api.forEach(element => {
        const {region} = element
        if(!continent.includes(region)){
            continent.push(region)
        }
    });

    continent.forEach(element => {
        createSelect(element)
    });
}

export const getCountries = async (api) =>{
    let html = document.getElementById('country__container')
    api.forEach(element => {
        html.innerHTML +=createCountryCard(element);
    });
}

console.log(arrayCountries)

//este es
// getCountries(arrayCountries);
// getSelect(arrayCountries)

// getCountriesOfRegions(arrayCountries)



//este es
const input = document.getElementById('searchInput');


const getAllCharacters = async (event) => {
    event.preventDefault()
    const value = event.target.value;
    let html = document.getElementById('country__container')
    try {
        const result = await fetch(`https://restcountries.com/v2/name/${value}`);
        const array = await result.json();

        html.innerHTML = '';
        array.forEach(item => {
            let upper = item.name.toLowerCase()
            let min = upper.charAt(0)
            if (upper.includes(value.charAt(0)) && upper.includes(value.charAt(1)) && upper.includes(value.charAt(2)) && upper.includes(value.charAt(3)) || upper.charAt(0) === min) {
                html.innerHTML += createCountryCard(item)
                console.log(item)
            } else {
                console.log("No esta")
            }
        })
    } catch (error) {
        console.log("error", error)
    }
    return result;
}

let timer = 0;
const  debouncedFetch = (input) =>{
    clearTimeout(timer);
    timer = setTimeout(() => getAllCharacters(input), 1000);
}

//este es
input.addEventListener('input', debouncedFetch);


