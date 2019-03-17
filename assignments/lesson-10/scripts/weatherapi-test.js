let weatherRequest = new XMLHttpRequest()
weatherRequest.open(
  'GET',
  'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=05114d9b05fc90300235d8704185c770&units=imperial',
  true
)
weatherRequest.send()

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText)
  console.log(weatherData)

  document.getElementById('cc-temp').innerHTML = weatherData.main.temp

  let icon =
    'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'
  let desc = weatherData.weather.description

  document.getElementById('cc-img').setAttribute('src', icon)
  document.getElementById('cc-img').setAttribute('alt', desc)
}
