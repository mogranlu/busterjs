function FahrenheitConverter() {}

FahrenheitConverter.prototype = {

    convertFromCelsius: function (fahrenheit) {
        celsius = fahrenheit * 9 / 5 + 32;
		
        return celsius;
    }

};
