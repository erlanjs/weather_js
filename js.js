const weather = {
    apiKey: "6b4c292e3e049dbf64d6c2441cc77864",
    fetchWeather: function(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => this.displayWeather(data))
    },
    displayWeather: function(data) {
        console.log(data)
        const{name} = data
        const{icon,description} = data.weather[0]
        const{temp,humidity} = data.main
        const{speed} = data.wind
        console.log(speed)
        document.querySelector('#myList').innerHTML += `
      <option value="${data.name}"></option>

    `
        document.querySelector(".city").innerText = "Погода в " + name
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description
        document.querySelector(".temp").innerText = temp
        document.querySelector(".humidity").innerText = "Влажность:" + humidity + "%"
        document.querySelector(".wind").innerHTML = "Скорость ветра:" + speed + "км/ч"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}
let ibp = document.querySelector(".search-bar")
    ibp.addEventListener("keyup",(e) => {
    if (e.key === 'Enter'){
        weather.search()
    }
})
ibp.value = ''

document.querySelector(".search button").addEventListener("click",() => {
    weather.search()
})
weather.fetchWeather("Dubai")