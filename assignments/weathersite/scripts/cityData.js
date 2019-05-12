// City Data API JSON FILE

function getTownName(townID) {
  var cityName,
    cities,
    i,
    x = ''
  var myPara1 = document.querySelector('newMess')
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
      if (cities[cityName].name == townID) showCities(cities[cityName])
    }
  }
  function showCities(jsonObj) {
    var data = jsonObj
    var townEventData = jsonObj['events']

    for (var i = 0; i < townEventData.length; i++) {
      var myPara1 = document.createElement('li')
      myPara1.textContent = townEventData[i]

      document.getElementById('newMess').appendChild(myPara1)
    }
    var myHd = document.createTextNode('h2')
    myHd.textContent = data.name
    document.getElementById('newHead1').appendChild(myHd)
  }
}
