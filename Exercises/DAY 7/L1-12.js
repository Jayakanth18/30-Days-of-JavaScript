//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function temp(temperatureInC){
    let temperatureInF=(temperatureInC*9/5)+32
    return temperatureInF
  }
  console.log('Temperature in Fehrenheit :',temp(31))