import './style.css'

// eslint-disable-next-line import/prefer-default-export
export function renderSearch(parentEl, onSearch) {
  const form = document.createElement('form')
  const city = document.createElement('input')
  const country = document.createElement('input')
  const submit = document.createElement('button')
  const params = {
    access_key: 'b863db502d98247346256106b8ba49a0',
    query: `${city.value}, ${country.value}`,
  }

  form.classList.add('weather-form')
  city.classList.add('city')
  country.classList.add('country')
  submit.classList.add('submit')
  city.type = 'text'
  country.type = 'text'
  submit.type = 'submit'
  city.placeholder = 'Enter your city here...'
  country.placeholder = 'Enter your country here...'
  submit.append('SUBMIT')

  form.append(city, country, submit)
  parentEl.appendChild(form)

  submit.addEventListener('click', onSearch(params))
  return params
}
