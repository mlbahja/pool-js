function citiesOnly(array) {
    return array.map(item => item.city);
}

function upperCasingStates(str) {
    return str.map(str =>
        str.split(' ').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
    );
}

function ssTocels(tmp) {
    return tmp.map(element => {
        const to_int = parseInt(element);
        const celsius = Math.floor((to_int - 32) * 5 / 9);
        return celsius + '°C';
    });
}

function trimTemp(arrt) {
    return arrt.map(cityObj => {
        const trimmedTemp = cityObj.temperature.replace(/\s+/g, '').replace('°', '°');
        return { ...cityObj, temperature: trimmedTemp };
    });
}

function tempForecasts(forecasts) {
    return forecasts.map(forecast => {
      const fahrenheit = parseInt(forecast.temperature);
      const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
      const capitalizedState = forecast.state
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
      return `${celsius}°Celsius in ${forecast.city}, ${capitalizedState}`;
    });
  }
function fahrenheitToCelsius(arr) {
    return arr.map(temp => {
              const fahrenheit = parseInt(temp);
      const celsius = Math.floor((fahrenheit - 32) * 5 / 9);
      return `${celsius}°C`;
    });
  }