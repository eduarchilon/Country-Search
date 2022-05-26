function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
};

const url = 'https://restcountries.com/v3.1/all';

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