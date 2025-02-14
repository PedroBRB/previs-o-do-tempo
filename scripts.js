

const key = "bc921d962f5262595baf0c4eda7bfe1d"

function dataOnScreen(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".forecast").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    
}

async function searchCity(city) {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json()) 
    
    dataOnScreen(data)
    
}


 function clickOnBotton() {
     const city = document.querySelector(".input-city").value
    searchCity (city)
}