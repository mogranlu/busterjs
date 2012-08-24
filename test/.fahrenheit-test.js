buster.testCase("AMSC Fahrenheit Über Demo Test FTW", {
    
    setUp: function () {
        this.converter = new FahrenheitConverter();
    },

     "test convert correctly from 12 degrees Celsius": function () {
        celsius = this.converter.convertFromCelsius(12);
		        
        assert.equals(celsius, 53.6);        
    }

});
