// Global variable to store conversion history
const conversionHistory = [];

function convertUnits() {
  const inputValue = document.getElementById("inputValue").value;
  const selectFrom = document.getElementById("selectFrom").value;
  const selectTo = document.getElementById("selectTo").value;

  let result;
  let errorMessage = "";

  if (selectFrom === selectTo) {
    errorMessage = "Cannot convert between the same units";
  } else if (selectFrom === "cm" && selectTo === "inch") {
    result = inputValue * 0.3937;
  } else if (selectFrom === "inch" && selectTo === "cm") {
    result = inputValue * 2.54;
  } else if (selectFrom === "cm" && selectTo === "m") {
    result = inputValue * 0.01;
  } else if (selectFrom === "m" && selectTo === "cm") {
    result = inputValue * 100;
  } else if (selectFrom === "cm" && selectTo === "km") {
    result = inputValue * 0.00001;
  } else if (selectFrom === "km" && selectTo === "cm") {
    result = inputValue * 100000;
  } else if (selectFrom === "inch" && selectTo === "m") {
    result = inputValue * 0.0254;
  } else if (selectFrom === "m" && selectTo === "inch") {
    result = inputValue * 39.37;
  } else if (selectFrom === "inch" && selectTo === "km") {
    result = inputValue * 0.0000254;
  } else if (selectFrom === "km" && selectTo === "inch") {
    result = inputValue * 39370.1;
  } else if (selectFrom === "m" && selectTo === "km") {
    result = inputValue * 0.001;
  } else if (selectFrom === "km" && selectTo === "m") {
    result = inputValue * 1000;
  } else if (selectFrom === "celsius" && selectTo === "fahrenheit") {
    result = (inputValue * 9/5) + 32;
  } else if (selectFrom === "fahrenheit" && selectTo === "celsius") {
    result = (inputValue - 32) * 5/9;
  } else if (selectFrom === "celsius" && selectTo === "kelvin") {
    result = parseFloat(inputValue) + 273.15;
  } else if (selectFrom === "kelvin" && selectTo === "celsius") {
    result = inputValue - 273.15;
  } else if (selectFrom === "fahrenheit" && selectTo === "kelvin") {
    result = (inputValue - 32) * 5/9 + 273.15;
  } else if (selectFrom === "kelvin" && selectTo === "fahrenheit") {
    result = (inputValue - 273.15) * 9/5 + 32;
  } else {
    errorMessage = "Units are incompatible";
  }

  if (errorMessage) {
    document.getElementById("result").textContent = errorMessage;
  } else {
    document.getElementById("result").textContent = result;
  }

  // Save the conversion to history
  const conversion = `${inputValue} ${selectFrom} = ${errorMessage ? errorMessage : result} ${selectTo}`;
  conversionHistory.push(conversion);

  // Update the history list
  const historyList = document.getElementById("historyList");
  const listItem = document.createElement("li");
  listItem.textContent = conversion;
  historyList.appendChild(listItem);
}

function clearHistory() {
  // Clear the conversion history
  conversionHistory.length = 0;

  // Clear the history list on the web page
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";
}
