var cityName, cities
var mynewList = document.querySelector('newMess')
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
  var cityData = request.response
  populateCity(cityData)
}

function populateCity(jsonObj) {
  cities = jsonObj['towns']

  for (cityName = 0; cityName < cities.length; cityName++) {
    if (cities[cityName].name == 'Preston') showCities(cities[cityName])
  }
}

function showCities(jsonObj) {
  var data = jsonObj

  var mynewList = document.createElement('LI')
  var myHd = document.createTextNode('h2')
  var myPara1 = document.createTextNode('h4')

  myHd.textContent = data.name
  myPara1.textContent = data.events

  // mynewList.appendChild(myHd)
  mynewList.appendChild(myPara1)

  document.getElementById('newMess').appendChild(mynewList)
  document.getElementById('newHead1').appendChild(myHd)
}
