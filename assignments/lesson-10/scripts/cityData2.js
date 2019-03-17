// INFORMATION FROM BYUI-CIT230 GITHUB TOWNDATA

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
  request.responseType = 'json'
  request.send()
/*
let townDataRequest = new XMLHttpRequest()
townDataRequest.open(
  'GET',
  'https://byui-cit230.github.io/weather/data/towndata.json',
  true
  let townData = JSON.parse(townDataRequest.responseText)
  console.log(townData)
) */

request.onload = function () {
    var townData = request.response
    populateTown(townData)
}

function populateTown(townData){
    townData = townData['towns']

  var cityName = []
  var cityEvents = []

  for (i = 0; i < townData.length; i++) {
    if (townData[i].name == 'Preston') 
      var name = townData.towns[i].name
      cityName.push(name)

      var event = townData.towns[i].events
      cityEvents.push(event)
      loadData(cityEvents, cityName)
    }
    continue
  
  document.getElementById('townName').innerHTML = cityName[i]
  document.getElementById('townEvents').innerHTML = cityEvents[i]
}

/*   function loadData(cityEvents, cityName) {
    var myHeading = document.createElement('h1')
    var myParagraph = document.createElement('p')
    var myArticle = document.createElement('article')

    myHeading.textContent = cityName
    myParagraph.textContent = cityEvents

    myArticle.appendChild(myHeading)
    myArticle.appendChild(myParagraph)

    section.appendChild(myArticle)
  }
}
/* var townEvents = {
    allEvents: function showCities() {
        return this.myHeading + '<br>' + this.myPara1
          
    
    }
  }

  var town1 = {
    myHeading: cityTitle,
    myPara1: cityPara
  }
  var x = townEvents.allEvents.call(town1)
  document.getElementById('newSection').innerHTML = x 
} */
