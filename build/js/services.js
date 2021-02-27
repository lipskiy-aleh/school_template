const ACCESS_KEY = '24597c5583052d171345f884c0b2a3ab'

export function getWeather(city, country) {
  const URL_GET_WEATHER = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${city},${country}`
  return fetch(URL_GET_WEATHER)
}
