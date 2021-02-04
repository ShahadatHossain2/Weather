const apiKey = '6cd42292d9e879aefe312fcd94a469a9';

document.getElementById('searchButton').addEventListener('click', function () {
    showTemperature();
})

function showTemperature() {
    const city = document.getElementById('cityName').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => getTemp(data))
}

function getTemp(data) {
    console.log(data);
    document.getElementById('city').innerText = document.getElementById('cityName').value;
    document.getElementById('temperature').innerText = data.main.temp;
    document.getElementById('weather').innerText = data.weather[0].main;
    const iconUrl = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    document.getElementById('icon').setAttribute("src", iconUrl);
    document.getElementById('cityName').value = "";
}