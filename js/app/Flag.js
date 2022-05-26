const country__container = document.getElementById('#country__container');

function createFlagCountry(country) {
    let flag = ''
    flag += `<div class="country__content">
            <img class="country__image" src="${country.flags.png}"></img>
            <div class="country__information">
                <h3 class="country_name">${country.name.common}</h3>
                <p class= "country__population"> Population: ${pais.population}</p>
                <p class="country__region"> Region: ${country.region}</p>
                <p class="country__capital"> Capital: ${country.capital}</p>
                </div>
            </div>
        </div>`
    let countryContent = country__container.innerHTML = flag;
    return countryContent;
  }
  

  /*
  export function createFlagContinent(continent) {
    let flags = ''
    for (let i = 0; i < continent.length; i++) {
      flags += createFlagCountry(continent[i])
    }
    country.innerHTML = flags;
  }*/