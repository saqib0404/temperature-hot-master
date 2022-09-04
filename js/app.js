const api_Key = 'e69f72450ea993ae048899c7f86212ea';

const loadTemp = city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`)
        .then(res => res.json())
        .then(data => displayTemp(data))
        .catch(error => console.log('There is a ' + error))
}
const displayTemp = (data) => {
    console.log(data);
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('weather').innerText = data.weather[0].main;
    
}

const searcData = (id) => {
    const searchField = document.getElementById(id)
    const city = searchField.value
    loadTemp(city)
    searchField.value = ''
}
const searchTemp = () => {
    searcData('search-field');
}
const searchTempByEnter = (event) => {
    if (event.key === 'Enter') {
        searcData('search-field');
    }
}
// loadTemp('new york')