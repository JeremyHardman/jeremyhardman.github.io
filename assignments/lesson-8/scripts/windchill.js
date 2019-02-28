var tempF = parseFloat(document.getElementById('currenttemp').innerHTML)
var speed = parseFloat(document.getElementById('windspeed').innerHTML)

var windchill =
  35.74 +
  0.6215 * tempF -
  35.75 * Math.pow(speed, 0.16) +
  0.4275 * tempF * Math.pow(speed, 0.16)

windchill = Math.round(windchill)
document.getElementById('windchill').innerHTML = windchill
