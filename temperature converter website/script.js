let Coverter = () => {
  let inNumber = document.getElementById("initial_number").value;
  let initialUnit = document.getElementById("initial_temperature1").value;
  let finalUnit = document.getElementById("initial_temperature2").value;
  let finNumber;
  console.log(initialUnit + " " + finalUnit);
  if (initialUnit == finalUnit) {
    finNumber = inNumber;
  }
  if (initialUnit == "Fahrenheit" && finalUnit == "Celsius") {
    finNumber = (inNumber - 32) / 1.8;
  }
  if (initialUnit == "Celsius" && finalUnit == "Fahrenheit") {
    finNumber = inNumber * 1.8 + 32;
  }
  if (initialUnit == "Celsius" && finalUnit == "kelvin") {
    finNumber = inNumber + 273.15;
  }
  if (initialUnit == "kelvin" && finalUnit == "Celsius") {
    finNumber = inNumber - 273.15;
  }
  if (initialUnit == "kelvin" && finalUnit == "Fahrenheit") {
    finNumber = (inNumber * 9) / 5 - 459.67;
  }
  if (initialUnit == "Fahrenheit" && finalUnit == "kelvin") {
    finNumber = ((inNumber + 459.67) * 5) / 9;
  }

  document.getElementById("answer").innerText = finNumber;
};
