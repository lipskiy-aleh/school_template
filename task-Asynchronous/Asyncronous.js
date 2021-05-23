const accessKey = 'a3a9e19d56c963ef109677caad441f8f'

function createWeatherIcon(icon) {
  const element = document.createElement('img')
  element.setAttribute('src', icon)
  element.className = 'weather-icon'
  document.getElementsByClassName('data-to-show')[0].appendChild(element)
}

function createCustomElement(tag, value, elementClassName) {
  const element = document.createElement(tag)
  const elementContent = document.createTextNode(value)
  element.className = elementClassName
  element.appendChild(elementContent)
  document.getElementsByClassName('data-to-show')[0].appendChild(element)
}

function createCell(tag, value) {
  const cell = document.createElement(tag)
  const cellContent = document.createTextNode(value)
  cell.appendChild(cellContent)
  return cell
}

function createRow(tag, ...args) {
  const content = document.createElement('tr')

  for (let arg = 0; arg < args.length; arg += 1) {
    content.appendChild(createCell(tag, args[arg]))
  }

  return content
}

function createTable(weatherData) {
  const weatherTable = document.createElement('table')
  const weatherTableHead = document.createElement('thead')
  const weatherTableBody = document.createElement('tbody')
  const time = new Date(weatherData.location.localtime).toLocaleTimeString()

  weatherTableHead.appendChild(createRow('th', 'Time', 'Wind', 'Feels Like', 'Speed', 'Pressure'))
  weatherTableBody.appendChild(createRow('td', time, weatherData.current.wind_dir, weatherData.current.feelslike, weatherData.current.wind_speed, weatherData.current.pressure))

  weatherTable.appendChild(weatherTableHead)
  weatherTable.appendChild(weatherTableBody)

  document.getElementsByClassName('data-to-show')[0].appendChild(weatherTable)
}

function showData(weatherData) {
  document.getElementsByClassName('data-to-show')[0].innerHTML = ''

  createWeatherIcon(weatherData.current.weather_icons[0])
  createCustomElement('div', `${weatherData.current.temperature}°C`, 'temperature')
  createCustomElement('p', `${weatherData.location.name}, ${weatherData.location.country}`, 'location')
  createCustomElement('p', `Today is ${weatherData.current.weather_descriptions[0]}`, 'weather-description')

  createTable(weatherData)
}

function searchAndShowData() {
  const city = document.getElementById('city').value
  const country = document.getElementById('city').value

  if (city === '') {
    return
  }

  fetch(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${city}, ${country}`)
    .then((data) => data.json())
    .then((p) => showData(p))
}

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    searchAndShowData()
  }
})

document.getElementsByClassName('fullscreen-button')[0].addEventListener('click', () => {
  searchAndShowData()
})
