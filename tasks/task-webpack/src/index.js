import axios from 'axios'
import { renderSearch } from './modules/search/index'
import { renderWeather } from './modules/weather/index'

const parentElement = document.getElementById('root')

function getWeather(params) {
  axios.get('http://api.weatherstack.com/current', { params })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error)
    })
}

async function onCallSearch(params) {
  // 1 - get weather from API (data)
  const data = await getWeather(params)
  // 2 -  renderWeather(parentElement, data)
  await renderWeather(parentElement, data)
}

renderSearch(parentElement, onCallSearch)
