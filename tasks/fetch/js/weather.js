const formLocation = document.querySelector('#form-location')
let city
let country

formLocation.addEventListener('submit', async () => {
  city = formLocation.querySelector('#form-location__city').value
  country = formLocation.querySelector('#form-location__country').value
})
