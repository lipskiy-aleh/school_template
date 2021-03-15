import './style.css'

// eslint-disable-next-line import/prefer-default-export
export function renderWeather(parentEl, data) {
  const content = document.createElement('div')

  content.innerHTML = `<img class="weather-img" src="${data.current.weather_icons}" alt="weather">
    <h1 class="temperature">${data.current.temperature}℃</h1>
    <p class="city-name">${data.location.name}, ${data.location.country}</p>
    <p class="speed">${data.current.wind_speed}</p>`

  parentEl.appendChild(content)
}
