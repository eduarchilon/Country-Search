import { createCountryCard } from "../main.js";

const input = document.getElementById('searchInput');

export const getAllCharacters = async (event) => {
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
                // console.log(item)
            } else {
                console.log("No existe")
            }
        })
    } catch (error) {
        console.log("error: ", error)
    }
}

let timer = 0;
export const debouncedFetch = (input) => {
    clearTimeout(timer);
    timer = setTimeout(() => getAllCharacters(input), 1000);
}

input.addEventListener('input', debouncedFetch);