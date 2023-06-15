const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
    .then((convert) => convert.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))