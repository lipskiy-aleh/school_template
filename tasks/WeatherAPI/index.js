const button = document.querySelector('.btn')
const cityName = document.querySelector('.name-city')
const inputCity = document.querySelector('.input-city')
const inputCountry = document.querySelector('.input-country')
const temperature = document.querySelector('.temperature')
const imageWeather = document.querySelector('.image-weather')
const pressure = document.querySelector('.pressure')
const time = document.querySelector('.time')
const wind = document.querySelector('.wind')
const windSpeed = document.querySelector('.wind-speed')

button.addEventListener('click', (event) => {
  event.preventDefault()
  fetch(`http://api.weatherstack.com/current?access_key=b6caa7150023839805a2e76116a8137e&query=${inputCity.value},${inputCountry.value}`)
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line no-console
      console.log(data)
      cityName.textContent = data.location.name
      temperature.innerHTML = `Температура: ${data.current.temperature}&deg;`
      // eslint-disable-next-line prefer-destructuring
      imageWeather.src = data.current.weather_icons[0]
      pressure.textContent = `Давление: ${data.current.pressure} MB`
      time.textContent = data.location.localtime
      windSpeed.textContent = `Скорость ветра: ${data.current.wind_speed} km/h`
      wind.textContent = `Направление ветра: ${data.current.wind_dir}`
    })
    // eslint-disable-next-line no-alert
    .catch(() => alert('Error!!!'))
})
