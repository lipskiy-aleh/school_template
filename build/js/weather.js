import { getWeather } from './services.js'

const formLocation = document.querySelector('#form-location')
const weatherParagraph = document.querySelector('.weather__paragraph')
const weatherImg = document.querySelector('.weather__img')
const tableWeather = document.querySelector('.weather__table')
const tableTemperature = tableWeather.querySelector('.table__temperature-value')
const tableTime = tableWeather.querySelector('.table__time-value')
const tableWindDir = tableWeather.querySelector('.table__wind-direction-value')
const tableWindSpeed = tableWeather.querySelector('.table__wind-speed-value')
const tableFeelsLikeWeather = tableWeather.querySelector('.table__feels-like-value')
const tableSkyDescriptions = tableWeather.querySelector('.table__sky-descriptions-value')
const tablePressure = tableWeather.querySelector('.table__pressure-value')
let country = formLocation.querySelector('#form-location__country').value
let city = formLocation.querySelector('#form-location__city').value

showWeather()
setInterval(showWeather, 100000)

formLocation.addEventListener('submit', (evt) => {
  evt.preventDefault()
  city = formLocation.querySelector('#form-location__city').value
  country = formLocation.querySelector('#form-location__country').value

  showWeather()
})

async function showWeather() {
  const responseGetWeather = await getWeather(city, country)
  const dataWeather = await responseGetWeather.json()
  console.log(dataWeather, new Date().getMinutes())
  const location = `${dataWeather.location.name}, ${dataWeather.location.country}`
  const { temperature, pressure } = dataWeather.current
  const windDir = dataWeather.current.wind_dir
  const windSpeed = dataWeather.current.wind_speed
  const feelsLikeWeather = dataWeather.current.feelslike
  const skyDescriptions = dataWeather.current.weather_descriptions.reduce((acc, current) => acc += ' ' + current)
  const imgPath = dataWeather.current.weather_icons[0]
  const time = dataWeather.location.localtime.slice(-5)

  weatherParagraph.textContent = `The weather today in ${location}`
  weatherImg.src = imgPath
  tableTemperature.textContent = `${temperature} \u00b0C`
  tableTime.textContent = `${time}`
  tableWindDir.textContent = `${windDir}`
  tableWindSpeed.textContent = `${windSpeed} km/h`
  tableFeelsLikeWeather.textContent = `${feelsLikeWeather} \u00b0C`
  tableSkyDescriptions.textContent = `${skyDescriptions}`
  tablePressure.textContent = `${pressure} MB`
}

// git commit -m feth3 --no-verify
